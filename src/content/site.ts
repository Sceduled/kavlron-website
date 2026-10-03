export const SITE_URL = process.env.SITE_URL || "https://kalvron.in";

export const siteContent = {
  meta: {
    home: {
      title: "Kalvron AI OS | Run every department with one AI system",
      description: "Kalvron deploys an AI OS that runs sales, HR, finance and operations as one system, inside the tools you already use. Grow without hiring to keep up.",
    },
    partners: {
      title: "Partner with Kalvron | Add an AI OS to your agency",
      description: "Agencies bring the clients. Kalvron builds, deploys and runs the AI OS behind them, so you add recurring revenue without any technical work.",
    }
  },
  navigation: [
    { label: "AI OS", href: "/#ai-os" },
    { label: "Departments", href: "/#departments" },
    { label: "Security", href: "/#security" },
    { label: "Team", href: "/#team" },
  ],
  footerLinks: [
    { label: "AI OS", href: "/#ai-os" },
    { label: "Departments", href: "/#departments" },
    { label: "Security", href: "/#security" },
    { label: "Team", href: "/#team" },
    { label: "FAQ", href: "/#faq" },
    { label: "Partners", href: "/partners" },
    { label: "Book a call", href: "/#book-a-call" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookie settings", href: "#" }, // hook up later
  ],
  social: {
    linkedIn: "https://www.linkedin.com/company/kalvron/",
    instagram: "https://www.instagram.com/kalvron_network/",
    founderLinkedIn: "https://www.linkedin.com/in/srihari-r-195926334/"
  },
  hero: {
    eyebrow: "The AI operating system for your business",
    headline: "Run every department with a single AI OS, and grow without hiring to keep up",
    subhead: "One connected AI system works across sales, HR, finance and operations, inside the tools your team already uses, so you take on more work without adding headcount. It brings you only what needs your call. We build it, deploy it and run it.",
    cta: "Book a call",
    underCta: "20 minutes. No pitch. Just a map."
  },
  problem: [
    "Right now, your people are the system.",
    "Someone checks the portal. Someone reconciles the sheet. Someone tells procurement what sales promised, and tells finance what procurement ordered. Your operation runs on people carrying information between departments, and on you for everything that falls in between.",
    "That holds until you grow. Then every new order, site or client needs another hire just to keep the others in sync.",
    "More headcount adds cost. It doesn't add control."
  ],
  whatItIs: {
    headline: "One system. Every department.",
    intro: "Kalvron AI OS runs your day-to-day operations the way a well-run team would. It watches every department, acts on what it finds, and keeps the work moving without waiting to be asked.",
    points: [
      {
        title: "It works the way your people work.",
        body: "Most automation only runs where an integration exists. Kalvron AI OS logs into the portals, ERPs, inboxes and spreadsheets your team already uses and does the work the way a person at a keyboard would. Nothing to rip out. Nothing new for your team to learn."
      },
      {
        title: "It runs as one system.",
        body: "Separate tools wait for a person to connect them. Here, the departments act on each other. A hot lead changes what collections chases first. A margin slip changes what gets flagged today."
      },
      {
        title: "It brings you decisions, not updates.",
        body: "Routine work gets done. Exceptions reach you with full context, ready for a yes or no."
      }
    ]
  },
  departments: {
    headline: "Everything your business runs on, handled.",
    closing: "Seven departments. One AI OS. Deployed for you.",
    items: [
      { title: "Sales & lead handling", desc: "Every lead answered fast, qualified, followed up and routed. Nothing goes cold." },
      { title: "Finance & collections", desc: "Invoices raised on time, payments chased, books reconciled. The ledger drives the list, not memory." },
      { title: "HR & workforce", desc: "Attendance, replacements, onboarding and payroll inputs kept moving across every site and team." },
      { title: "Procurement & supply", desc: "Stock checked, shortages caught, vendors followed up before work stalls." },
      { title: "Resource & project management", desc: "Milestones verified, contractors chased, timelines compared against what's actually done." },
      { title: "Customer follow-up & support", desc: "Updates sent, documents collected, approvals chased. Clients stop asking where things stand." },
      { title: "Owner reporting", desc: "One daily view across every department, with only the exceptions flagged." }
    ],
    exampleActivity: [
      "Hot lead flagged: collections priorities updated",
      "Stock shortage found: vendor follow-up started",
      "Payment overdue: reminder sent, owner notified only if unpaid",
      "Attendance gap found: replacement requested"
    ]
  },
  howWeWork: {
    headline: "We build it. We deploy it. We run it.",
    closing: "You make the decisions. We handle everything else.",
    steps: [
      { title: "Map.", body: "We study how your operation actually runs, including the logins, portals, spreadsheets and handoffs nobody wrote down." },
      { title: "Deploy.", body: "We build the system around your workflows and put it live inside your existing tools. Most go live in one to four weeks, depending on complexity." },
      { title: "Run.", body: "We stay on, monitoring, tuning and extending it, so it keeps up as you grow." }
    ]
  },
  team: {
    eyebrow: "The team",
    headline: "A real team behind every deployment.",
    subhead: "Kalvron AI OS isn't software you set up alone. A founder and five AI engineers design it, deploy it and run it with you.",
    founder: { name: "Srihari R", title: "Founder", desc: "Hands-on in every build, from the first call to go-live." },
    team: { name: "Five AI engineers.", desc: "The build team behind every deployment, from workflow mapping to integrations to monitoring." },
    closing: "One founder. Five engineers. One system for your business."
  },
  security: {
    headline: "Built so you stay in control.",
    points: [
      { title: "You set what it can do alone.", body: "Anything outside that range waits for your approval." },
      { title: "Every action is logged.", body: "You can see what the system did, when, and why." },
      { title: "Scoped access.", body: "The system gets only the access each task needs." },
      { title: "Your data stays yours.", body: "Each client's data is isolated from every other client's." },
      { title: "It upgrades only with your approval.", body: "The system can propose improvements to itself, but nothing changes until you approve it." },
      { title: "Humans on the exceptions.", body: "Disputes, unusual cases and judgment calls always come to a person." }
    ]
  },
  logos: {
    heading: "Businesses running on Kalvron",
    items: [
      { type: "image", name: "IIL", src: "/logos/clients/IIL.jpeg", url: "https://www.linkedin.com/company/iilstudyabroad/" },
      { type: "image", name: "Benchmark Group", src: "/logos/partners/benchmark-logo.png", url: "https://www.benchmark.company/" },
      { type: "image", name: "Drootle", src: "/logos/partners/drootle.png", url: "https://www.drootle.com/" },
      { type: "image", name: "Lucent Digital", src: "/logos/partners/lucent-digital-logo.png" }
    ]
  },
  faq: [
    { q: "Does this replace my team?", a: "It takes over the coordination, chasing and checking that fills your team's day, so they can focus on work that needs judgment. Most owners use it to grow without adding headcount." },
    { q: "Do I need to change my tools?", a: "No. It works inside the tools you already use, including ones with no integration." },
    { q: "How is this different from a CRM, chatbot or automation tool?", a: "Those handle one task inside one tool and wait for a person to connect the rest. Kalvron AI OS runs the whole operation as one system and acts on its own within limits you set." },
    { q: "What can it do without asking?", a: "Only what you've approved. Everything else comes to you first." },
    { q: "What if it gets something wrong?", a: "Every action is logged, risky actions need approval, and exceptions reach you with full context. The system also learns from its own work. It reviews its own steps and takes feedback from your team the way a new employee would. It then prepares an upgrade plan and asks the decision maker for permission. Only after you approve does it upgrade itself." },
    { q: "Who works on my system?", a: "Our team of five AI engineers and the founder. The people on your first call are the people who build and run it." },
    { q: "How quickly does it go live?", a: "Between one and four weeks, depending on complexity: how many departments, tools and portals we connect." },
    { q: "What does it cost?", a: "It depends on the complexity of what we build and the load the system has to handle, meaning how many departments it runs and how much work flows through it. We scope it on the call." }
  ],
  cta: {
    headline: "Find out what your business can stop doing by hand.",
    body: "In 20 minutes, we map your workflow and show you where an AI OS fits. No pitch. Just the diagnosis.",
    button: "Book a call",
    success: "Got it. We'll be in touch shortly to schedule your 20 minutes.",
    options: [
      "Sales & lead handling",
      "Finance & collections",
      "HR & workforce",
      "Procurement & supply",
      "Resource & project management",
      "Customer follow-up & support",
      "Owner reporting",
      "Everything: one AI OS for the whole business",
      "Not sure yet"
    ]
  },
  footerText: "Kalvron AI OS: every department, one system, deployed for you.",
  cookieBanner: {
    text: "We use cookies to understand how this site is used. You can accept or reject. The site works either way.",
    accept: "Accept",
    reject: "Reject"
  },
  notFound: {
    headline: "Page not found.",
    text: "The page you're looking for doesn't exist or has moved.",
    button: "Back to home"
  },
  partners: {
    eyebrow: "For agency partners",
    headline: "You bring the clients. We handle everything else.",
    subhead: "Add Kalvron AI OS to your service. We build, deploy and run it for every client you bring, and you earn recurring revenue on each one.",
    benefits: [
      { title: "Zero operational work.", body: "You connect us with your client. We build the system, configure it, test it, launch it and manage it. You don't touch anything technical." },
      { title: "Recurring revenue on every client.", body: "You're not reselling a workflow. You're offering an operating system your clients' businesses run on, one that becomes more valuable the longer it runs." },
      { title: "Your service becomes harder to replace.", body: "You're no longer just the agency that runs ads. You're the agency that makes sure the whole business keeps up with the growth you bring in." },
      { title: "One dashboard for every client.", body: "One login to see all your clients' systems in one place, so you know exactly which client is getting results." }
    ],
    howItWorks: "Introduce your client → We map, build and deploy → We run it and report back to you.",
    ctaHeadline: "Let's talk about your clients.",
    button: "Book a partner call"
  },
  legal: {
    entityName: "Kalvron AI",
    contactEmail: "sri@kalvronai.com",
    registeredAddress: "",
    jurisdiction: ""
  }
};
