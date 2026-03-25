import ServicePageLayout from "@/components/ServicePageLayout";

const TrademarkObjection = () => (
  <ServicePageLayout
    title="Trademark Objection Reply"
    subtitle="Respond to Trademark Examination Objections"
    description="After filing a trademark application, the examiner may raise objections. A well-drafted objection reply is crucial for successful registration. RapidTax provides expert trademark objection reply drafting services."
    price="₹2,999/-"
    features={["Objection Analysis", "Legal Research", "Reply Drafting by IP Expert", "Filing on TM Portal", "Hearing Representation", "Follow-up Support"]}
    steps={[
      { title: "Review Objection", desc: "Analyze the examination report" },
      { title: "Draft Reply", desc: "Prepare legal arguments" },
      { title: "File Reply", desc: "Submit reply on TM portal" },
      { title: "Follow Up", desc: "Track application progress" },
    ]}
    faqs={[
      { q: "What if I don't reply to objection?", a: "If no reply is filed within 30 days, the trademark application will be abandoned/refused." },
    ]}
  />
);

export default TrademarkObjection;
