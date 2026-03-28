import ServicePageLayout from "@/components/ServicePageLayout";

const GSTCancellation = () => (
  <ServicePageLayout
    title="GST Cancellation"
    subtitle="Cancel Your GST Registration Hassle-Free"
    description="If your business has closed or turnover has fallen below the threshold limit, you can cancel your GST registration. RapidTax handles the complete cancellation process including filing the final return (GSTR-10) to ensure no future liabilities."
    price="₹1,499/-"
    features={["GST Cancellation Application", "Final Return (GSTR-10) Filing", "ITC Reversal Calculation", "Stock Declaration", "Expert Advisory", "Compliance Closure"]}
    steps={[
      { title: "Apply", desc: "Submit cancellation application on portal" },
      { title: "Officer Review", desc: "Tax officer reviews the application" },
      { title: "Final Return", desc: "File GSTR-10 final return" },
      { title: "Cancellation", desc: "GST registration is cancelled" },
    ]}
    faqs={[
      { q: "When can GST be cancelled?", a: "GST can be cancelled if business is closed, turnover falls below threshold, transfer/amalgamation of business, or death of proprietor." },
    ]}
  />
);

export default GSTCancellation;
