export default function TrustSection() {
  return (
    <section className="bg-background px-6 py-24 lg:px-10 border-y border-border">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-12 text-center text-lg font-bold tracking-widest text-text-muted uppercase">
          Trusted by teams recovering revenue at scale
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex h-24 items-center justify-center border border-border bg-surface grayscale transition-all hover:grayscale-0 hover:bg-surface-card">
            <span className="font-mono text-xl font-bold text-text-dim">IIL</span>
          </div>
          <div className="flex h-24 items-center justify-center border border-border bg-surface grayscale transition-all hover:grayscale-0 hover:bg-surface-card">
            <span className="font-mono text-xl font-bold text-text-dim text-center leading-tight">
              IZee<br/>Business<br/>School
            </span>
          </div>
          <div className="flex h-24 items-center justify-center border border-border bg-surface grayscale transition-all hover:grayscale-0 hover:bg-surface-card">
            <span className="font-mono text-xl font-bold text-text-dim">Drootle</span>
          </div>
          <div className="flex h-24 items-center justify-center border border-border bg-surface grayscale transition-all hover:grayscale-0 hover:bg-surface-card">
            <span className="font-mono text-xl font-bold text-text-dim">Darvyn</span>
          </div>
        </div>
      </div>
    </section>
  );
}
