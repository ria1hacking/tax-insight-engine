import ServicePageLayout from "@/components/ServicePageLayout";

const PartnershipFirm = () => (
  <ServicePageLayout
    title="Partnership Firm Registration"
    subtitle="Register Your Partnership Firm"
    description="A Partnership Firm is a business structure where two or more individuals agree to share the profits and losses. RapidTax provides complete partnership firm registration including deed drafting and registrar filing."
    price="₹4,999/-"
    features={["Partnership Deed Drafting", "Firm Registration with Registrar", "PAN Application for Firm", "GST Registration", "Current Account Opening Assistance", "Compliance Guidance"]}
    documents={["PAN Card of All Partners", "Aadhaar Card of All Partners", "Address Proof of Business", "Passport-size Photographs", "Partnership Deed (we can draft)"]}
    steps={[
      { title: "Deed Drafting", desc: "Draft the partnership agreement" },
      { title: "Registration", desc: "Register with Registrar of Firms" },
      { title: "PAN & GST", desc: "Apply for PAN and GST" },
      { title: "Bank Account", desc: "Open partnership bank account" },
    ]}
    faqs={[
      { q: "Is partnership registration mandatory?", a: "Registration is not mandatory but highly recommended as unregistered firms cannot file suits against third parties." },
    ]}
  />
);

export default PartnershipFirm;
