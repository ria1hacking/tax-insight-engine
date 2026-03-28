import ServicePageLayout from "@/components/ServicePageLayout";

const CareersPage = () => (
  <ServicePageLayout
    title="Careers at RapidTax"
    subtitle="Join India's Leading Tax Compliance Platform"
    description="RapidTax is always looking for talented individuals who are passionate about tax compliance, technology, and customer service. We offer a dynamic work environment, competitive compensation, and opportunities for growth. If you're looking to make a difference in the tax compliance industry, we'd love to hear from you."
    price="Apply Now"
    priceLabel=""
    features={[
      "Competitive Salary & Benefits",
      "Work with Industry Experts",
      "Professional Growth & Training",
      "Dynamic Work Environment",
      "Performance-based Incentives",
      "Work-Life Balance",
    ]}
    faqs={[
      { q: "How do I apply?", a: "Fill out the form on this page with your details and we'll get back to you within 48 hours." },
      { q: "What positions are available?", a: "We regularly hire for CA/Tax professionals, accountants, customer support, marketing, and technology roles." },
      { q: "Do you offer internships?", a: "Yes, we offer internship programs for CA students, law students, and management graduates." },
    ]}
  />
);

export default CareersPage;
