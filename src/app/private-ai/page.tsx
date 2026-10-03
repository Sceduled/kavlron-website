import { siteContent } from "../../content/site";
import Link from "next/link";

export const metadata = {
  title: "Private AI OS for Enterprise | Kalvron",
  description: "Kalvron provides private, fine-tuned AI models hosted exclusively for your business. Zero data leaks to public APIs.",
  alternates: { canonical: "/private-ai" },
  openGraph: { url: "/private-ai" },
};

export default function PrivateAIPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto space-y-12">
      <div className="space-y-6">
        <div className="inline-block border border-accent-amber/30 bg-accent-amber/10 px-3 py-1 rounded-full text-xs font-mono text-accent-amber tracking-wider uppercase">
          Enterprise Security
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
          Your data is your moat.<br/>
          <span className="text-text-muted">Keep it that way.</span>
        </h1>
        <p className="text-lg sm:text-xl text-text-muted max-w-3xl">
          Medium-sized enterprises want the efficiency of AI, but can't afford the risk of processing sensitive operational data through frontier model APIs like ChatGPT or Claude. Kalvron solves this.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <div className="bg-surface border border-border p-8 space-y-4">
          <h3 className="text-xl font-bold text-white">The SaaS API Risk</h3>
          <p className="text-text-muted">
            When you use off-the-shelf AI tools or connect your systems to public APIs, your proprietary workflows, customer data, and internal communications leave your infrastructure. 
          </p>
        </div>
        <div className="bg-surface-card border border-accent-amber/30 p-8 space-y-4">
          <h3 className="text-xl font-bold text-white">The Kalvron Standard</h3>
          <p className="text-text-muted">
            We host private, fine-tuned LLMs dedicated entirely to your company. Your data never touches public models. Your AI OS is completely isolated, ensuring enterprise-grade privacy and zero data leaks.
          </p>
        </div>
      </div>
      
      <div className="space-y-6 pt-8">
        <h2 className="text-3xl font-bold text-white">Done-For-You Delivery</h2>
        <p className="text-text-muted text-lg">
          We are not a SaaS platform handing you a blank slate. Kalvron delivers a custom, fully functioning AI operating system built around your specific workflows. We handle the mapping, the deployment, the fine-tuning of the private models, and the ongoing monitoring.
        </p>
      </div>

      <div className="pt-12">
        <Link href="/#book-a-call" className="inline-block bg-white text-background px-8 py-4 font-bold hover:bg-accent-amber hover:text-white transition-colors">
          Book a security consultation
        </Link>
      </div>
    </div>
  );
}
