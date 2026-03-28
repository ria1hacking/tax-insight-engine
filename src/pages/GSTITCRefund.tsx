import ServicePageLayout from "@/components/ServicePageLayout";

const GSTITCRefund = () => (
  <ServicePageLayout
    title="GST ITC Refund"
    subtitle="Claim Your Input Tax Credit Refund"
    description="If you have accumulated excess Input Tax Credit (ITC) due to exports, inverted duty structure, or other reasons, you are entitled to claim a refund. RapidTax assists with the entire GST refund process ensuring maximum claim with proper documentation."
    price="₹2,999/-"
    features={["ITC Refund Application Filing", "Export Refund (with/without payment)", "Inverted Duty Structure Refund", "Excess Balance Refund", "Documentation Support", "Refund Tracking"]}
    steps={[
      { title: "Assessment", desc: "Evaluate refund eligibility and amount" },
      { title: "Documentation", desc: "Prepare supporting documents" },
      { title: "Application", desc: "File refund application on GST portal" },
      { title: "Processing", desc: "Track and follow up on refund" },
    ]}
    faqs={[
      { q: "When can I claim GST refund?", a: "GST refund can be claimed for exports (zero-rated supplies), inverted duty structure, excess payment, or provisional assessment." },
    ]}
  />
);

export default GSTITCRefund;
