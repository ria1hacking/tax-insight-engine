import ServicePageLayout from "@/components/ServicePageLayout";

const GSTReconciliation = () => (
  <ServicePageLayout
    title="GST Reconciliation"
    subtitle="Reconcile Your GST Data Accurately"
    description="GST Reconciliation involves matching your purchase data with supplier-uploaded data on the GST portal to ensure correct Input Tax Credit claims. RapidTax provides thorough reconciliation services to prevent ITC mismatches and compliance issues."
    price="₹1,499/-"
    features={["GSTR-2A/2B Reconciliation", "Purchase Register Matching", "ITC Mismatch Identification", "Vendor Communication Support", "Monthly Reconciliation Reports", "Expert Advisory"]}
    steps={[
      { title: "Data Collection", desc: "Collect purchase and GSTR-2B data" },
      { title: "Matching", desc: "Match invoices with portal data" },
      { title: "Mismatch Report", desc: "Identify and report mismatches" },
      { title: "Resolution", desc: "Help resolve discrepancies" },
    ]}
    faqs={[
      { q: "Why is GST reconciliation important?", a: "It ensures you claim correct ITC, avoids notices from the department, and prevents excess or short claiming of credits." },
    ]}
  />
);

export default GSTReconciliation;
