"use client";
import { siteContent } from "../../../content/site";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface/50 py-16 px-6 lg:px-10 mt-auto">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="flex flex-col gap-6 max-w-sm">
            <div className="flex items-center gap-3">
              <img src="/logo-letter.png" alt="Kalvron Logo" className="h-8 w-auto opacity-80" />
              <span className="text-xl font-bold tracking-tight text-white opacity-80">Kalvron</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              {siteContent.footerText}
            </p>
            <div className="flex gap-4">
              <a href={siteContent.social.linkedIn} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-white transition-colors text-sm font-mono">LinkedIn</a>
              <a href={siteContent.social.instagram} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-white transition-colors text-sm font-mono">Instagram</a>
              <a href={siteContent.social.founderLinkedIn} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-white transition-colors text-sm font-mono">Founder</a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-dim">Product</span>
              <a href="/#ai-os" className="text-sm text-text-muted hover:text-white transition-colors">AI OS</a>
              <a href="/#departments" className="text-sm text-text-muted hover:text-white transition-colors">Departments</a>
              <a href="/#security" className="text-sm text-text-muted hover:text-white transition-colors">Security</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-dim">Company</span>
              <a href="/#team" className="text-sm text-text-muted hover:text-white transition-colors">Team</a>
              <a href="/#faq" className="text-sm text-text-muted hover:text-white transition-colors">FAQ</a>
              <a href="/partners" className="text-sm text-text-muted hover:text-white transition-colors">Partners</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-dim">Legal</span>
              <a href="/privacy" className="text-sm text-text-muted hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="text-sm text-text-muted hover:text-white transition-colors">Terms</a>
              <button onClick={() => { localStorage.removeItem('kalvron-cookie-consent'); window.location.reload(); }} className="text-sm text-text-muted hover:text-white transition-colors text-left">Cookie settings</button>
            </div>
          </div>

        </div>
        <div className="mt-16 pt-8 border-t border-border/50 text-xs text-text-dim flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Kalvron. All rights reserved.</span>
          <span>Deployed for you.</span>
        </div>
      </div>
    </footer>
  );
}
