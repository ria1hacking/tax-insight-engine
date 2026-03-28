import ServicePageLayout from "@/components/ServicePageLayout";

const ITRSalaried = () => (
  <ServicePageLayout
    title="ITR Filing (Salaried)"
    subtitle="File Your Income Tax Return Now!"
    description="Filing Income Tax Returns is mandatory for salaried individuals whose income exceeds the basic exemption limit. RapidTax simplifies the ITR filing process for salaried employees, ensuring maximum tax savings through proper deductions and exemptions under Section 80C, 80D, HRA, and more."
    price="₹1,499/-"
    features={[
      "ITR-1 / ITR-2 Filing for Salaried Individuals",
      "Tax Computation & Planning",
      "Deductions under 80C, 80D, 80G, etc.",
      "HRA & LTA Exemption Calculation",
      "Capital Gains Tax Computation",
      "Expert Tax Advisory",
      "E-verification & Acknowledgment",
    ]}
    documents={[
      "Form 16 from Employer",
      "PAN Card & Aadhaar Card",
      "Bank Statements (All Accounts)",
      "Investment Proofs (80C, 80D, etc.)",
      "Home Loan Interest Certificate (if applicable)",
      "Capital Gains Statement (if applicable)",
      "Form 26AS / AIS",
    ]}
    steps={[
      { title: "Share Documents", desc: "Provide Form 16 and investment proofs" },
      { title: "Tax Computation", desc: "We compute your tax with max deductions" },
      { title: "ITR Filing", desc: "Return is filed on the IT portal" },
      { title: "E-Verification", desc: "Return verified and acknowledgment sent" },
    ]}
    faqs={[
      { q: "Which ITR form should salaried employees file?", a: "Most salaried individuals file ITR-1 (Sahaj) if total income is up to ₹50 lakhs. ITR-2 is used for income above ₹50 lakhs or if there are capital gains." },
      { q: "What is the due date for filing ITR?", a: "The due date for salaried individuals is 31st July of the assessment year. Late filing attracts a penalty of up to ₹5,000." },
      { q: "Can I claim refund through ITR?", a: "Yes, if excess tax has been deducted (TDS), you can claim a refund by filing your ITR. The refund is processed directly to your bank account." },
    ]}
  />
);

export default ITRSalaried;
