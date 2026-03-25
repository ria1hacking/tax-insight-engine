import ServicePageLayout from "@/components/ServicePageLayout";

const TANRegistration = () => (
  <ServicePageLayout
    title="TAN Registration"
    subtitle="Apply for Tax Deduction Account Number"
    description="TAN (Tax Deduction and Collection Account Number) is a 10-digit alphanumeric number required by all persons responsible for deducting or collecting tax at source. RapidTax provides quick TAN registration services."
    price="₹999/-"
    features={["TAN Application Filing (Form 49B)", "Quick Processing", "TAN Number Generation", "Status Tracking", "Expert Assistance"]}
    documents={["PAN Card of Applicant/Entity", "Identity Proof", "Address Proof", "Business Registration Certificate"]}
    steps={[
      { title: "Submit Details", desc: "Provide entity and personal details" },
      { title: "Application", desc: "We file Form 49B online" },
      { title: "Processing", desc: "Application processed by NSDL" },
      { title: "TAN Allotted", desc: "TAN number is issued" },
    ]}
    faqs={[
      { q: "Who needs TAN?", a: "Any person/entity responsible for deducting TDS (employers, businesses making payments) must have TAN." },
    ]}
  />
);

export default TANRegistration;
