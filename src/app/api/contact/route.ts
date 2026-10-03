import { NextResponse } from "next/server";

// Basic in-memory rate limiting (Note: limited effectiveness on serverless platforms, but helps against basic flooding)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 5; 
const WINDOW_MS = 60 * 1000; 

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    if (ip !== "unknown") {
      const now = Date.now();
      const record = rateLimitMap.get(ip) || { count: 0, lastReset: now };
      if (now - record.lastReset > WINDOW_MS) {
        record.count = 1;
        record.lastReset = now;
      } else {
        record.count++;
      }
      rateLimitMap.set(ip, record);
      
      if (record.count > RATE_LIMIT) {
        return NextResponse.json({ success: false, error: "Too many requests. Please try again later." }, { status: 429 });
      }
    }

    const data = await request.json();
    
    // Honeypot check
    if (data.honeypot && data.honeypot.length > 0) {
      return NextResponse.json({ success: false, error: "Invalid submission" }, { status: 400 });
    }

    // Speed check (reject submissions faster than 3 seconds)
    if (data.startTime) {
      const elapsed = Date.now() - parseInt(data.startTime, 10);
      if (elapsed < 3000) {
        return NextResponse.json({ success: false, error: "Submission too fast" }, { status: 400 });
      }
    }

    // Basic validation
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    const scriptURL = process.env.GOOGLE_SCRIPT_URL;
    if (!scriptURL) {
      console.error("Missing GOOGLE_SCRIPT_URL");
      return NextResponse.json({ success: false, error: "Server configuration error" }, { status: 500 });
    }
    
    // Add shared secret if present
    const payload = { ...data };
    if (process.env.FORM_TOKEN) {
      payload.token = process.env.FORM_TOKEN;
    }
    
    delete payload.honeypot;
    delete payload.startTime;

    const res = await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    
    if (!res.ok) {
       console.error("Apps script returned error status");
       return NextResponse.json({ success: false, error: "Submission failed" }, { status: 500 });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API route error occurred");
    return NextResponse.json({ success: false, error: "Submission failed" }, { status: 500 });
  }
}
