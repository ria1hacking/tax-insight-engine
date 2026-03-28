import ServicePageLayout from "@/components/ServicePageLayout";

const GSTR9Filing = () => (
  <ServicePageLayout
    title="GSTR-9 Annual Return Filing"
    subtitle="File Your GST Annual Return"
    description="GSTR-9 is the annual return that must be filed by all registered GST taxpayers. It is a consolidation of all the monthly/quarterly returns filed during the financial year. RapidTax ensures accurate compilation and timely filing of your annual GST return."
    price="₹2,499/-"
    features={["GSTR-9 Compilation & Filing", "Data Reconciliation with GSTR-1 & 3B", "ITC Reconciliation", "HSN Summary Preparation", "Error Identification & Correction", "Expert Review"]}
    steps={[
      { title: "Data Collection", desc: "Collect all monthly return data" },
      { title: "Reconciliation", desc: "Reconcile all returns and books" },
      { title: "Preparation", desc: "Prepare GSTR-9 annual return" },
      { title: "Filing", desc: "File on GST portal" },
    ]}
    faqs={[
      { q: "Who needs to file GSTR-9?", a: "All registered taxpayers with turnover above ₹2 crores must file GSTR-9. It is optional for taxpayers below ₹2 crores." },
    ]}
  />
);

export default GSTR9Filing;
