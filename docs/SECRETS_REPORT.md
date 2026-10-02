# SECRETS REPORT

## Findings
- `src/app/components/CtaSection.tsx`: Form endpoint URL `https://script.google.com/macros/s/AKfy.../exec` found hardcoded. Action: Move to environment variable. No rotation needed, just a public endpoint.
- No API keys, tokens, or webhook URLs were found in the codebase or client bundle.
