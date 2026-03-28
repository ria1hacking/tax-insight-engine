import ServicePageLayout from "@/components/ServicePageLayout";

const PANApplication = () => (
  <ServicePageLayout
    title="PAN Application"
    subtitle="Apply for PAN Card Online"
    description="Permanent Account Number (PAN) is a unique 10-digit alphanumeric identity allotted by the Income Tax Department. PAN is mandatory for financial transactions, tax filing, opening bank accounts, and more. RapidTax assists with new PAN applications and corrections."
    price="₹999/-"
    features={[
      "New PAN Card Application",
      "PAN Correction / Update",
      "Instant e-PAN Generation",
      "Physical PAN Card Delivery",
      "PAN-Aadhaar Linking Assistance",
      "Status Tracking",
    ]}
    documents={[
      "Aadhaar Card",
      "Passport-size Photograph",
      "Proof of Date of Birth",
      "Address Proof",
      "Identity Proof",
    ]}
    steps={[
      { title: "Submit Details", desc: "Provide your personal information" },
      { title: "Document Upload", desc: "Upload required documents" },
      { title: "Application Filing", desc: "We file your PAN application" },
      { title: "PAN Delivered", desc: "Receive your PAN card" },
    ]}
    faqs={[
      { q: "How long does it take to get PAN?", a: "e-PAN is generated within 48 hours. Physical PAN card is delivered within 15-20 working days." },
      { q: "Is PAN mandatory?", a: "PAN is mandatory for filing income tax returns, opening bank accounts, transactions above ₹50,000, and many other financial activities." },
    ]}
  />
);

export default PANApplication;
