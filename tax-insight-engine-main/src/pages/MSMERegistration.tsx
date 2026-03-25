import ServicePageLayout from "@/components/ServicePageLayout";

const MSMERegistration = () => (
  <ServicePageLayout
    title="MSME Registration"
    subtitle="Register Your Business Under MSME / Udyam"
    description="MSME (Micro, Small and Medium Enterprises) Registration, now known as Udyam Registration, is a government certification for small and medium businesses. It provides access to various benefits including priority sector lending, lower interest rates, tax exemptions, and government tenders."
    price="₹999/-"
    features={[
      "Udyam Registration Certificate",
      "Access to Government Subsidies",
      "Priority Sector Lending Benefits",
      "Lower Interest Rates on Loans",
      "Protection Against Delayed Payments",
      "Tax Exemption Benefits",
    ]}
    documents={[
      "Aadhaar Card of Proprietor/Partner/Director",
      "PAN Card of Business",
      "Business Address Proof",
      "Bank Account Details",
      "Details of Business Activities",
    ]}
    steps={[
      { title: "Provide Details", desc: "Share business and personal information" },
      { title: "Application", desc: "We file Udyam Registration online" },
      { title: "Verification", desc: "Government verifies the application" },
      { title: "Certificate", desc: "MSME/Udyam certificate is issued" },
    ]}
    faqs={[
      { q: "What is Udyam Registration?", a: "Udyam Registration is the new process for MSME Registration introduced by the Government of India. It is completely online and based on self-declaration." },
      { q: "Is MSME Registration free?", a: "Government registration is free. Our service fee covers assistance with accurate filing and ensuring all benefits are availed." },
    ]}
  />
);

export default MSMERegistration;
