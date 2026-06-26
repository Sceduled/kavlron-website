export default function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="font-bold tracking-tighter text-foreground">
          Kalvron AI
        </div>
        <div className="text-sm text-text-muted">
          &copy; 2026 Kalvron Infrastructure. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
