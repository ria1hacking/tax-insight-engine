import ServicePageLayout from "@/components/ServicePageLayout";

const ProprietorshipFirm = () => (
  <ServicePageLayout
    title="Proprietorship Firm Registration"
    subtitle="Start Your Business as a Sole Proprietor"
    description="A Sole Proprietorship is the simplest form of business entity where a single individual owns and manages the business. RapidTax helps you set up your proprietorship with all necessary registrations including GST, MSME, and bank account opening."
    price="₹2,499/-"
    features={["GST Registration", "MSME/Udyam Registration", "Current Account Opening Assistance", "Business PAN Usage Guidance", "Compliance Advisory", "Shop & Establishment Registration Guidance"]}
    documents={["PAN Card of Proprietor", "Aadhaar Card", "Address Proof of Business", "Bank Statement", "Passport-size Photograph"]}
    steps={[
      { title: "Documentation", desc: "Gather all required documents" },
      { title: "Registration", desc: "Complete GST and MSME registration" },
      { title: "Bank Account", desc: "Open current bank account" },
      { title: "Start Business", desc: "Begin your business operations" },
    ]}
    faqs={[
      { q: "Is proprietorship registration mandatory?", a: "There is no separate registration for proprietorship. It is established through other registrations like GST, MSME, Shop Act, etc." },
    ]}
  />
);

export default ProprietorshipFirm;
