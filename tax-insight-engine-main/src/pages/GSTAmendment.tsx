import ServicePageLayout from "@/components/ServicePageLayout";

const GSTAmendment = () => (
  <ServicePageLayout
    title="GST Amendment"
    subtitle="Amend Your GST Registration Details"
    description="If there are any changes in your business details such as address, contact information, business constitution, or addition/deletion of partners/directors, you need to amend your GST registration. RapidTax handles all types of core and non-core GST amendments."
    price="₹999/-"
    features={["Core Field Amendment", "Non-Core Field Amendment", "Address Change", "Business Constitution Change", "Partner/Director Addition or Removal", "Expert Consultation"]}
    steps={[
      { title: "Identify Changes", desc: "Determine what needs to be amended" },
      { title: "Document Collection", desc: "Gather supporting documents" },
      { title: "File Amendment", desc: "Submit amendment on GST portal" },
      { title: "Approval", desc: "Amendment approved by officer" },
    ]}
    faqs={[
      { q: "What are core vs non-core amendments?", a: "Core amendments (business name, address, partners) require officer approval. Non-core amendments (email, phone, bank details) are auto-approved." },
    ]}
  />
);

export default GSTAmendment;
