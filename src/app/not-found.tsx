import { siteContent } from "../content/site";

export default function NotFound() {
  const content = siteContent.notFound;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{content.headline}</h1>
      <p className="text-xl text-text-muted mb-12">{content.text}</p>
      <a href="/" className="inline-flex h-14 items-center justify-center border border-border px-8 text-base font-bold tracking-wide text-white transition-colors hover:bg-surface">
        {content.button}
      </a>
    </div>
  );
}
