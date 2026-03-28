import ServicePageLayout from "@/components/ServicePageLayout";

const LLPRegistration = () => (
  <ServicePageLayout
    title="LLP Registration"
    subtitle="Register Your Limited Liability Partnership"
    description="A Limited Liability Partnership (LLP) combines the benefits of a partnership and a company. It provides limited liability protection to partners while allowing flexibility in management. RapidTax provides end-to-end LLP Registration services with expert guidance."
    price="₹9,999/-"
    features={[
      "Name Reservation (RUN-LLP)",
      "Digital Signature Certificate (DSC)",
      "Designated Partner Identification Number (DPIN)",
      "LLP Incorporation Filing (FiLLiP Form)",
      "LLP Agreement Drafting",
      "PAN & TAN Application",
      "Certificate of Incorporation",
    ]}
    documents={[
      "PAN Card of All Partners",
      "Aadhaar Card of All Partners",
      "Passport-size Photographs",
      "Address Proof (Electricity Bill / Rent Agreement)",
      "NOC from Property Owner",
      "Proof of Registered Office",
    ]}
    steps={[
      { title: "Name Approval", desc: "Reserve your LLP name with MCA" },
      { title: "DSC & DPIN", desc: "Obtain digital signatures and DPIN" },
      { title: "Incorporation", desc: "File FiLLiP form for registration" },
      { title: "LLP Agreement", desc: "Draft and file LLP agreement" },
    ]}
    faqs={[
      { q: "What is the minimum number of partners for LLP?", a: "A minimum of 2 designated partners are required. There is no maximum limit on the number of partners." },
      { q: "What is the cost of LLP Registration?", a: "Our LLP Registration package starts at ₹9,999 which includes government fees, DSC, and professional charges." },
      { q: "Is LLP better than Private Limited Company?", a: "LLP is ideal for small businesses and professionals due to lower compliance costs and flexible management structure. Private Limited is better for businesses seeking funding." },
    ]}
  />
);

export default LLPRegistration;
