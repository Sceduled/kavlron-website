import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const scriptURL = process.env.FORM_ENDPOINT || "https://script.google.com/macros/s/AKfycbwnHERcgZDULNqBrxlp5FJWqu3CDvoM9amf-4nEa35W_-f6ez0Ggz64juHT8IkLhgHX/exec";
    
    await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Submission failed" }, { status: 500 });
  }
}
