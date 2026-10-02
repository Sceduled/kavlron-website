import { siteContent } from "../../content/site";

export const metadata = {
  title: "Terms and Conditions | Kalvron",
  description: "Terms and Conditions for Kalvron AI OS.",
};

export default function TermsPage() {
  const content = siteContent.legal;
  return (
    <div className="pt-32 pb-24 px-6 lg:px-10 max-w-3xl mx-auto min-h-screen">
      {/* DRAFT: needs review by a lawyer before launch. */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12">Terms and Conditions</h1>
      
      <div className="prose prose-invert max-w-none text-text-muted leading-relaxed">
        <p>These Terms and Conditions govern your use of the website operated by {content.entityName}.</p>
        
        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">1. Use of Site</h2>
        <p>By accessing this website, you agree to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>

        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">2. Disclaimer</h2>
        <p>The materials on Kalvron's website are provided on an 'as is' basis. {content.entityName} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">3. Limitations</h2>
        <p>In no event shall {content.entityName} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Kalvron's website.</p>

        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">4. Governing Law</h2>
        <p>Any claim relating to Kalvron's website shall be governed by applicable laws without regard to its conflict of law provisions.</p>

        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">5. Contact Us</h2>
        <p>For any questions regarding these terms, contact us at {content.contactEmail}.</p>
      </div>
    </div>
  );
}
