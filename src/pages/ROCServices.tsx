import ServicePageLayout from "@/components/ServicePageLayout";

const ROCServices = () => (
  <ServicePageLayout
    title="ROC Compliance Services"
    subtitle="Stay Compliant with MCA/ROC Requirements"
    description="Every company and LLP registered in India must comply with annual ROC (Registrar of Companies) filing requirements. RapidTax ensures your company stays compliant with all MCA requirements including annual returns, financial statements, and other statutory filings."
    price="₹2,999/-"
    features={["Annual Return Filing (Form MGT-7)", "Financial Statement Filing (Form AOC-4)", "Board Resolution Drafting", "Director KYC (DIR-3 KYC)", "Change in Directors", "Registered Office Change", "Compliance Calendar Management"]}
    steps={[
      { title: "Assessment", desc: "Review pending compliance requirements" },
      { title: "Preparation", desc: "Prepare required forms and documents" },
      { title: "Filing", desc: "File returns with MCA/ROC" },
      { title: "Confirmation", desc: "Filing confirmation and receipts" },
    ]}
    faqs={[
      { q: "What is ROC Compliance?", a: "ROC compliance refers to mandatory annual filings that every registered company/LLP must submit to the Ministry of Corporate Affairs." },
      { q: "What happens if ROC filings are delayed?", a: "Late filing attracts additional fees of ₹100 per day of delay. Continuous non-compliance can lead to company being struck off." },
    ]}
  />
);

export default ROCServices;
