import ServicePageLayout from "@/components/ServicePageLayout";

const OPCRegistration = () => (
  <ServicePageLayout
    title="One Person Company (OPC) Registration"
    subtitle="Start a Company with Just One Person"
    description="A One Person Company (OPC) allows a single entrepreneur to operate a corporate entity with limited liability. It combines the benefits of a sole proprietorship with the protection of a private limited company. RapidTax provides complete OPC registration services."
    price="₹8,999/-"
    features={["Name Reservation", "Digital Signature Certificate", "DIN for Director", "SPICe+ Filing", "MOA & AOA Drafting", "PAN & TAN", "Certificate of Incorporation"]}
    documents={["PAN Card of Director", "Aadhaar Card", "Address Proof", "Registered Office Proof", "NOC from Property Owner", "Passport-size Photograph", "Nominee Details"]}
    steps={[
      { title: "Name Approval", desc: "Reserve your company name" },
      { title: "DSC & DIN", desc: "Obtain digital signature" },
      { title: "Incorporation", desc: "File SPICe+ form with MCA" },
      { title: "Post-Setup", desc: "PAN, TAN & bank account" },
    ]}
    faqs={[
      { q: "Who can form an OPC?", a: "Only a natural person who is an Indian citizen and resident can form an OPC. A nominee must also be designated." },
    ]}
  />
);

export default OPCRegistration;
