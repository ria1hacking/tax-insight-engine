import ServicePageLayout from "@/components/ServicePageLayout";

const TrademarkApplication = () => (
  <ServicePageLayout
    title="Trademark Application"
    subtitle="Protect Your Brand with Trademark Registration"
    description="A trademark protects your brand name, logo, slogan, or any unique identifier of your business. RapidTax provides end-to-end Trademark Registration services including trademark search, application filing, and objection handling. Secure your brand identity today."
    price="₹3,499/-"
    features={[
      "Trademark Search & Availability Check",
      "Trademark Application Filing",
      "Government Fee Included",
      "Trademark Class Selection Guidance",
      "Application Status Tracking",
      "Objection Reply Assistance",
      "Trademark Registration Certificate",
    ]}
    documents={[
      "Brand Name / Logo to be Trademarked",
      "Applicant's Identity Proof",
      "Address Proof of Applicant",
      "Business Registration Certificate",
      "Description of Goods/Services",
      "Power of Attorney (signed)",
    ]}
    steps={[
      { title: "Trademark Search", desc: "Check availability of your trademark" },
      { title: "Application Filing", desc: "File trademark application with registry" },
      { title: "Examination", desc: "Registrar examines the application" },
      { title: "Registration", desc: "Trademark is registered and certified" },
    ]}
    faqs={[
      { q: "How long does trademark registration take?", a: "The entire process typically takes 8-12 months if there are no objections. The application number is generated within 1-2 days." },
      { q: "How long is a trademark valid?", a: "A registered trademark is valid for 10 years from the date of filing and can be renewed indefinitely for successive 10-year periods." },
      { q: "Can I trademark a logo and name together?", a: "Yes, you can file a combined trademark for both name and logo. However, filing them separately provides broader protection." },
    ]}
  />
);

export default TrademarkApplication;
