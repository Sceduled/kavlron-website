import { siteContent } from "../../content/site";

export const metadata = {
  title: "Privacy Policy | Kalvron",
  description: "Privacy Policy for Kalvron AI OS.",
};

export default function PrivacyPage() {
  const content = siteContent.legal;
  return (
    <div className="pt-32 pb-24 px-6 lg:px-10 max-w-3xl mx-auto min-h-screen">
      {/* DRAFT: needs review by a lawyer before launch. */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12">Privacy Policy</h1>
      
      <div className="prose prose-invert max-w-none text-text-muted leading-relaxed">
        <p>This Privacy Policy describes how {content.entityName} ("we", "us", "our") collects, uses, and shares your personal information when you use our website and services.</p>
        
        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">1. Information We Collect</h2>
        <p>We collect information you provide directly to us through forms on our website, including:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Full name</li>
          <li>Work email address</li>
          <li>Phone number</li>
          <li>Company or Agency name</li>
          <li>Automation interests and client details</li>
        </ul>

        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">2. How We Use Information</h2>
        <p>We use the information collected to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Provide, maintain, and improve our services</li>
          <li>Communicate with you to schedule calls and answer inquiries</li>
          <li>Analyze website usage (only after cookie consent is granted)</li>
        </ul>

        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">3. Data Sharing and Transfers</h2>
        <p>Your form submissions are processed securely and sent to our internal CRM systems. We do not sell your personal data to third parties.</p>

        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">4. Your Rights (DPDP Act)</h2>
        <p>In accordance with applicable laws, including India's Digital Personal Data Protection Act, you have the right to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Withdraw your consent at any time</li>
          <li>Request deletion of your data</li>
        </ul>

        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">5. Contact Us</h2>
        <p>For any privacy-related requests or grievances, please contact us at:</p>
        <p className="mt-2">
          Email: {content.contactEmail}<br/>
          Address: {content.registeredAddress}
        </p>
      </div>
    </div>
  );
}
