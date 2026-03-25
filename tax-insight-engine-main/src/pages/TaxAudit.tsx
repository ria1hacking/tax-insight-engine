import ServicePageLayout from "@/components/ServicePageLayout";

const TaxAudit = () => (
  <ServicePageLayout
    title="Tax Audit"
    subtitle="Professional Tax Audit Services Under Section 44AB"
    description="Tax Audit under Section 44AB of the Income Tax Act is mandatory for businesses and professionals exceeding specified turnover limits. RapidTax provides professional tax audit services through experienced Chartered Accountants ensuring complete compliance."
    price="₹4,999/-"
    features={["Tax Audit under Section 44AB", "Form 3CA-3CD / 3CB-3CD Preparation", "Books of Accounts Verification", "Tax Audit Report Filing", "Compliance with Audit Standards", "Expert CA Consultation"]}
    steps={[
      { title: "Document Review", desc: "Review books of accounts and financials" },
      { title: "Audit Process", desc: "CA conducts the tax audit" },
      { title: "Report Preparation", desc: "Tax audit report is prepared" },
      { title: "Filing", desc: "Report filed on IT portal" },
    ]}
    faqs={[
      { q: "Who needs a tax audit?", a: "Businesses with turnover above ₹1 crore (₹10 crore for digital transactions) and professionals with receipts above ₹50 lakhs." },
      { q: "What is the due date?", a: "Tax audit report must be filed by 30th September of the assessment year." },
    ]}
  />
);

export default TaxAudit;
