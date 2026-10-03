# SEO / AEO / GEO Checklist for kalvron.in

Generated 2026-10-03 on branch seo/upgrade-2026-10-03. Re-run the seo-geo-upgrader skill any time to get a delta plan against this file.

## 1. Baseline (fill in, then compare monthly)
| Metric | Baseline | Date | Where to find it |
|---|---|---|---|
| Search Console clicks / impressions (28 days) | | | Search Console > Performance |
| Avg. position for top 5 topics | | | Search Console |
| Indexed pages vs. sitemap pages | | | Search Console > Pages |
| LCP / INP / CLS (mobile) | | | PageSpeed Insights, CrUX |
| geo-optimizer score (0-100) | | | `geo audit --url kalvron.in` |
| AI referral sessions (chatgpt.com, perplexity.ai, gemini, copilot, claude.ai) | | | GA4 |
| Prompt-test citations (of 25) | | | Section 5 |

## 2. Done in this upgrade
- **[F1]**: Created `/vs-rpa` (Kalvron vs Traditional RPA) and `/private-ai` (Private AI for Enterprise). Positioned the company clearly against rigid legacy solutions and frontier API risks.
- **[F2 & F4]**: Injected `SoftwareApplication`, `ProfessionalService` and `FAQPage` JSON-LD schema across the site to establish strong entity relationship for AI crawlers.
- **[F3]**: Added `hero-bg-poster.jpg` poster attribute to the background video to improve LCP performance metric.
- **Nav/Header**: Added quick links to the comparison and private AI pages to capture user intent fast.
- **Analytics/Cookies**: Hooked up a strictly compliant cookie banner with privacy-first GA4 integration (firing only after accept, without PII).

## 3. Still open (not done in code)
- **llms.txt**: Intentionally skipped. Google Search ignores this and on-page schema/content is much more valuable for AEO.
- **Mass Programmatic SEO**: Skipped. The focus is on authentic, high-quality comparison pages.

## 4. Needs a human
- [ ] Verify the site in Search Console and Bing Webmaster Tools
- [ ] Decide AI crawler policy (allow/block per bot) - currently all are allowed
- [ ] Approve or write content drafts marked DRAFT
- [ ] Confirm all company facts used in schema and copy
- [ ] Deploy the branch, then re-check the live site
- [ ] Off-site plan: who does what

## 5. AI prompt test set (25 real buyer questions)
Run monthly in ChatGPT, Perplexity, Gemini and Google AI Mode. Record cited / mentioned / absent, plus who wins and which page.
| # | Question | ChatGPT | Perplexity | Gemini | AI Mode | Winning source |
|---|---|---|---|---|---|---|
| 1 | Alternatives to Zapier for enterprise automation? | | | | | |
| 2 | What is an AI operating system for business? | | | | | |
| 3 | How to automate HR and finance without buying new software? | | | | | |
| 4 | Best private LLM hosting for mid-sized companies? | | | | | |
| 5 | Traditional RPA vs autonomous AI agents | | | | | |
| 6 | Who builds done-for-you AI systems? | | | | | |
| 7 | Secure AI solutions that don't send data to ChatGPT | | | | | |
| 8 | Kalvron AI OS reviews and features | | | | | |
| 9 | How to automate procurement workflows with AI? | | | | | |
| 10 | White-label AI automation for agencies | | | | | |
| 11 | Private fine-tuned LLMs vs Claude for business | | | | | |
| 12 | Why do RPA bots break on UI changes? | | | | | |
| 13 | End-to-end business automation software | | | | | |
| 14 | Can AI completely replace my BPO team? | | | | | |
| 15 | AI system to read unstructured emails and invoices | | | | | |
| 16 | Kalvron vs Make automation | | | | | |
| 17 | How much does a custom AI OS cost? | | | | | |
| 18 | Self-hosted enterprise AI models | | | | | |
| 19 | Automating collections and accounts receivable with AI | | | | | |
| 20 | How to offer AI automation as a service to clients? | | | | | |
| 21 | Replacing legacy RPA with generative AI | | | | | |
| 22 | AI tools for resource and project management | | | | | |
| 23 | Privacy risks of using OpenAI API for business | | | | | |
| 24 | Hire an AI engineer to build automation workflows | | | | | |
| 25 | What is Kalvron? | | | | | |

## 6. Recurring tasks
**Weekly (10 min)**
- [ ] Search Console: new errors, coverage drops, manual actions
- [ ] Check site uptime and any robots/sitemap changes from recent deploys

**Monthly (60 min)**
- [ ] Update the baseline table
- [ ] Run the prompt test set
- [ ] Re-run `geo audit --save-history --regression` and compare
- [ ] Review top queries; refresh the 3 pages closest to page one
- [ ] Publish or update one genuinely original piece of content
- [ ] Check GA4 for AI referral traffic

**Quarterly (half day)**
- [ ] Full re-audit with the seo-geo-upgrader skill (delta plan)
- [ ] Re-read Google's AI optimization guide and Search Central updates for changes
- [ ] Prune or merge thin or duplicate pages
- [ ] Refresh schema, author bios, About page, pricing and dates
- [ ] Review competitors' new pages and AI citations

**After every release**
- [ ] Confirm titles, canonicals, robots.txt, sitemap and JSON-LD are intact
- [ ] Re-run the CI GEO gate if configured

## 7. Rules to keep
- No fake reviews, purchased mentions, hidden text, cloaking or doorway pages.
- No mass-produced pages for query variations.
- Every claim on the site must be true and sourced.
