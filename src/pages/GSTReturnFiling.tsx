import ServicePageLayout from "@/components/ServicePageLayout";

const GSTReturnFiling = () => (
  <ServicePageLayout
    title="GST Return Filing"
    subtitle="Quick, Easy and Timely GST Return Filing"
    description="RapidTax offers hassle-free GST Return Filing services to help businesses meet their GST compliance requirements with ease. Our team of experts take care of all the technicalities involved in the process, ensuring that the returns are filed accurately and on time. We handle GSTR-1, GSTR-3B, and all other return types."
    price="₹649/month"
    priceLabel="starts from"
    features={[
      "GSTR-1 Filing (Outward Supplies)",
      "GSTR-3B Filing (Summary Return)",
      "Input Tax Credit Reconciliation",
      "Invoice Matching & Verification",
      "Timely Filing Before Deadlines",
      "Expert Support for GST Queries",
      "Monthly Compliance Reports",
    ]}
    steps={[
      { title: "Share Invoices", desc: "Provide your purchase and sales invoices" },
      { title: "Data Processing", desc: "We process and verify all invoice data" },
      { title: "Return Preparation", desc: "GST returns are prepared accurately" },
      { title: "Filing & Confirmation", desc: "Returns filed and acknowledgment shared" },
    ]}
    faqs={[
      { q: "What GST returns do I need to file?", a: "Regular taxpayers need to file GSTR-1 (outward supplies) and GSTR-3B (summary return) monthly or quarterly based on turnover. Annual return GSTR-9 is also required." },
      { q: "What happens if I miss the filing deadline?", a: "Late filing attracts a penalty of ₹50 per day (₹20 for NIL returns) and interest at 18% per annum on the tax payable." },
      { q: "Can you file NIL GST returns?", a: "Yes, even if there are no transactions in a month, NIL returns must be filed and we handle those as well." },
    ]}
  />
);

export default GSTReturnFiling;
