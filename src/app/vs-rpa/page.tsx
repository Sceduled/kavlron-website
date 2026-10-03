import { siteContent } from "../../content/site";
import Link from "next/link";

export const metadata = {
  title: "Kalvron vs Traditional RPA | The Modern AI OS",
  description: "Why modern operations are moving from rigid Traditional RPA platforms to Kalvron's autonomous AI OS.",
  alternates: { canonical: "/vs-rpa" },
  openGraph: { url: "/vs-rpa" },
};

export default function VSRPAPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto space-y-12">
      <div className="space-y-6">
        <div className="inline-block border border-white/20 bg-white/5 px-3 py-1 rounded-full text-xs font-mono text-text-muted tracking-wider uppercase">
          Comparison
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
          Beyond Traditional RPA.<br/>
          <span className="text-text-muted">Enter the AI OS.</span>
        </h1>
        <p className="text-lg sm:text-xl text-text-muted max-w-3xl">
          Traditional RPA (Robotic Process Automation) was built for rigid, predictable clicks. When a website changes or an exception occurs, bots break. Kalvron's AI OS is built for reality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <div className="bg-surface border border-border p-8 space-y-4">
          <h3 className="text-xl font-bold text-white">Traditional RPA</h3>
          <ul className="space-y-3 text-text-muted list-disc pl-5">
            <li>Breaks when a UI changes or a step is unexpected.</li>
            <li>Requires expensive internal developers to maintain.</li>
            <li>Cannot handle unstructured data (emails, loose PDFs).</li>
            <li>You pay for the software, but still have to do the work to build the bots.</li>
          </ul>
        </div>
        <div className="bg-surface-card border border-accent-amber/30 p-8 space-y-4">
          <h3 className="text-xl font-bold text-white">Kalvron AI OS</h3>
          <ul className="space-y-3 text-text-muted list-disc pl-5">
            <li>Adapts to UI changes and handles exceptions intelligently.</li>
            <li>Understands context in unstructured emails, messages, and documents.</li>
            <li>Operates across departments as one connected system.</li>
            <li><strong>Done-For-You:</strong> We build, deploy, and run the entire system. No developers needed on your end.</li>
          </ul>
        </div>
      </div>

      <div className="pt-12">
        <Link href="/#book-a-call" className="inline-block bg-white text-background px-8 py-4 font-bold hover:bg-accent-amber hover:text-white transition-colors">
          Map your workflows with us
        </Link>
      </div>
    </div>
  );
}
