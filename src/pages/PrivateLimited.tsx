import ServicePageLayout from "@/components/ServicePageLayout";

const PrivateLimited = () => (
  <ServicePageLayout
    title="Private Limited Company Registration"
    subtitle="Incorporate Your Private Limited Company"
    description="A Private Limited Company is the most popular business structure in India for startups and growing businesses. It offers limited liability protection, easy access to funding, and perpetual succession. RapidTax provides complete incorporation services with expert guidance."
    price="₹12,999/-"
    features={["Name Reservation (RUN)", "Digital Signature Certificate (DSC)", "Director Identification Number (DIN)", "SPICe+ Form Filing", "MOA & AOA Drafting", "PAN & TAN Application", "Certificate of Incorporation", "Bank Account Opening Assistance"]}
    documents={["PAN Card of All Directors", "Aadhaar Card of All Directors", "Passport-size Photographs", "Address Proof of Directors", "Registered Office Address Proof", "NOC from Property Owner", "Utility Bill (not older than 2 months)"]}
    steps={[
      { title: "Name Approval", desc: "Reserve your company name with MCA" },
      { title: "DSC & DIN", desc: "Obtain digital signatures for directors" },
      { title: "Incorporation", desc: "File SPICe+ for company registration" },
      { title: "Post-Incorp", desc: "PAN, TAN & bank account setup" },
    ]}
    faqs={[
      { q: "Minimum requirements for Pvt Ltd?", a: "Minimum 2 directors, 2 shareholders, ₹1 lakh authorized capital, and a registered office address in India." },
      { q: "How long does it take?", a: "Company incorporation typically takes 7-15 working days after document submission." },
    ]}
  />
);

export default PrivateLimited;
