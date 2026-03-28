import ServicePageLayout from "@/components/ServicePageLayout";

const ITRBusiness = () => (
  <ServicePageLayout
    title="ITR Filing (Business)"
    subtitle="Expert Business Income Tax Return Filing"
    description="Filing Business Tax Returns is the process by which a business reports its income and expenditure to the Income Tax Department. All businesses operating in India, whether small or big, must file Income Tax Returns every year. RapidTax ensures accurate filing with maximum deductions."
    price="₹2,999/-"
    features={[
      "ITR-3 / ITR-4 Filing for Businesses",
      "Presumptive Taxation (Section 44AD/44ADA)",
      "Business Income Computation",
      "Depreciation Calculation",
      "Tax Audit Coordination (if applicable)",
      "Capital Gains & Other Income",
      "Expert CA Consultation",
    ]}
    documents={[
      "Profit & Loss Statement",
      "Balance Sheet",
      "Bank Statements (All Accounts)",
      "GST Returns (if registered)",
      "TDS Certificates (Form 16A)",
      "Investment Proofs",
      "Form 26AS / AIS",
    ]}
    steps={[
      { title: "Share Financials", desc: "Provide P&L, balance sheet & bank details" },
      { title: "Income Computation", desc: "We compute business income accurately" },
      { title: "Tax Filing", desc: "ITR is prepared and filed" },
      { title: "Acknowledgment", desc: "E-verified and acknowledgment shared" },
    ]}
    faqs={[
      { q: "Which ITR form for business income?", a: "ITR-3 for partnership/proprietorship with books of accounts, ITR-4 (Sugam) for presumptive income under Section 44AD/44ADA." },
      { q: "Is tax audit mandatory?", a: "Tax audit under Section 44AB is mandatory if business turnover exceeds ₹1 crore (₹10 crore for digital transactions) or professional receipts exceed ₹50 lakhs." },
    ]}
  />
);

export default ITRBusiness;
