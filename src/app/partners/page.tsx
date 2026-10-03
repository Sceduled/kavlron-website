import { siteContent } from "../../content/site";

export const metadata = {
  title: siteContent.meta.partners.title,
  description: siteContent.meta.partners.description,
  alternates: { canonical: "/partners" },
  openGraph: { url: "/partners" },
};

import { PartnerForm } from "../components/ui/PartnerForm";

export default function PartnersPage() {
  const content = siteContent.partners;
  return (
    <div className="pt-32 pb-24 px-6 lg:px-10 max-w-7xl mx-auto min-h-screen">
      <div className="mb-8 inline-flex items-center gap-3">
        <div className="w-1.5 h-1.5 bg-accent-amber rounded-full" />
        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-text-dim">
          {content.eyebrow}
        </span>
      </div>
      
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">{content.headline}</h1>
        <p className="text-xl text-text-muted leading-relaxed">{content.subhead}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        {content.benefits.map((b, i) => (
          <div key={i} className="flex flex-col gap-4 p-8 border border-border bg-surface">
            <h3 className="text-xl font-bold text-white">{b.title}</h3>
            <p className="text-text-muted leading-relaxed">{b.body}</p>
          </div>
        ))}
      </div>
      
      <div className="p-8 md:p-12 border border-border bg-surface/50 text-center mb-24">
        <h2 className="text-2xl font-bold text-white mb-2">How it works</h2>
        <p className="text-accent-amber font-mono text-sm tracking-wide">{content.howItWorks}</p>
      </div>
      
      <div className="max-w-xl mx-auto border border-border bg-surface p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">{content.ctaHeadline}</h2>
        <PartnerForm />
      </div>
    </div>
  );
}
