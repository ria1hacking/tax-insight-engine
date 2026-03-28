import ServicePageLayout from "@/components/ServicePageLayout";

const TDSReturnFiling = () => (
  <ServicePageLayout
    title="TDS Return Filing"
    subtitle="Accurate and Timely TDS Return Filing Services"
    description="Tax Deducted at Source (TDS) is a mechanism where the payer deducts tax at the time of making certain payments. RapidTax provides comprehensive TDS Return Filing services ensuring all your TDS returns are filed accurately and within due dates. We handle Form 24Q, 26Q, 27Q, and 27EQ."
    price="₹1,999/quarter"
    priceLabel="starts from"
    features={[
      "TDS Return Preparation (24Q, 26Q, 27Q, 27EQ)",
      "Form 16 / 16A Generation",
      "TDS Challan Verification",
      "Correction Statements Filing",
      "Lower Deduction Certificate Assistance",
      "TDS Compliance Advisory",
    ]}
    documents={[
      "TAN Number Details",
      "Challan Details of TDS Deposited",
      "Details of TDS Deducted (Party-wise)",
      "PAN of Deductees",
      "Previous Quarter Return (if any)",
    ]}
    steps={[
      { title: "Collect Data", desc: "Gather TDS deduction and challan details" },
      { title: "Prepare Return", desc: "Compute and prepare TDS return forms" },
      { title: "File Return", desc: "Upload return on TRACES portal" },
      { title: "Generate Forms", desc: "Issue Form 16/16A to deductees" },
    ]}
    faqs={[
      { q: "What is TDS Return?", a: "TDS Return is a quarterly statement submitted to the Income Tax Department containing details of TDS deducted and deposited during the quarter." },
      { q: "When are TDS returns due?", a: "TDS returns are due on 31st July (Q1), 31st October (Q2), 31st January (Q3), and 31st May (Q4) of each financial year." },
      { q: "What is Form 16?", a: "Form 16 is a TDS certificate issued by employers to employees showing the total salary and TDS deducted during the financial year." },
    ]}
  />
);

export default TDSReturnFiling;
