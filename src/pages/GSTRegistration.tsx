import ServicePageLayout from "@/components/ServicePageLayout";

const GSTRegistration = () => (
  <ServicePageLayout
    title="GST Registration"
    subtitle="Quick, Easy and Hassle-Free GST Registration"
    description="RapidTax provides GST Registration services to individuals and businesses in India. With expert knowledge of the Goods and Services Tax (GST) laws, we make the GST Registration process quick, easy, and hassle-free. GST Registration is mandatory for businesses whose turnover exceeds ₹40 lakhs (₹20 lakhs for service providers)."
    price="₹1,499/-"
    features={[
      "Complete GST Registration Application",
      "GSTIN Number Generation",
      "Expert Consultation on GST Applicability",
      "ARN Generation & Tracking",
      "Document Verification & Submission",
      "Post-Registration Compliance Guidance",
    ]}
    documents={[
      "PAN Card of the Business / Applicant",
      "Aadhaar Card of the Proprietor / Partners / Directors",
      "Proof of Business Registration",
      "Address Proof of Business (Electricity Bill / Rent Agreement)",
      "Bank Account Statement / Cancelled Cheque",
      "Passport-size Photograph",
      "Digital Signature (for Companies/LLPs)",
    ]}
    steps={[
      { title: "Submit Documents", desc: "Provide required documents for verification" },
      { title: "Application Filing", desc: "We file your GST application on the portal" },
      { title: "ARN Generation", desc: "Application Reference Number is generated" },
      { title: "GSTIN Allotted", desc: "Your GST number is issued by the government" },
    ]}
    faqs={[
      { q: "Who needs GST Registration?", a: "Any business with annual turnover exceeding ₹40 lakhs (₹20 lakhs for service providers and NE states) must register for GST. E-commerce sellers need mandatory registration regardless of turnover." },
      { q: "How long does GST Registration take?", a: "Typically, GST Registration is completed within 3-7 working days after submission of all required documents." },
      { q: "What is GSTIN?", a: "GSTIN (Goods and Services Tax Identification Number) is a unique 15-digit number assigned to every registered taxpayer." },
      { q: "Can I register for GST voluntarily?", a: "Yes, any business can register for GST voluntarily, even if the turnover is below the threshold limit." },
    ]}
  />
);

export default GSTRegistration;
