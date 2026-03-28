import ServicePageLayout from "@/components/ServicePageLayout";

const LUTApplication = () => (
  <ServicePageLayout
    title="LUT Application for GST"
    subtitle="Letter of Undertaking for Export Without Payment of GST"
    description="A Letter of Undertaking (LUT) allows exporters to make exports without paying IGST. Instead of paying tax and claiming refund later, LUT enables zero-rated exports. RapidTax assists with LUT application filing on the GST portal."
    price="₹999/-"
    features={["LUT Application Filing", "Annual LUT Renewal", "Export Compliance Guidance", "Zero-rated Supply Advisory", "Status Tracking"]}
    steps={[
      { title: "Eligibility Check", desc: "Verify LUT eligibility" },
      { title: "Application", desc: "File LUT on GST portal" },
      { title: "Approval", desc: "LUT approved by officer" },
      { title: "Export Ready", desc: "Start exporting without IGST" },
    ]}
    faqs={[
      { q: "Who can file LUT?", a: "Any registered taxpayer making zero-rated supplies (exports) can file LUT, except those prosecuted for tax evasion exceeding ₹2.5 crores." },
    ]}
  />
);

export default LUTApplication;
