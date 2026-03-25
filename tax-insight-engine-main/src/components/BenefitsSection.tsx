import { Clock, Headphones, IndianRupee, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Timely Submission",
    desc: "We will file your returns/applications within the deadline. There is no chance of penalties in the future.",
  },
  {
    icon: Headphones,
    title: "Year-Round Expert Consultation",
    desc: "Get consultation for any service on call. There is no limit on the number of questions or time.",
  },
  {
    icon: IndianRupee,
    title: "Save Money",
    desc: "We offer trusted and professional services at affordable prices when compared to market standards.",
  },
  {
    icon: Users,
    title: "In-House Team of Professionals",
    desc: "A relationship manager with sector experience will guide you through the Return Filing process.",
  },
];

const BenefitsSection = () => (
  <section className="py-16 bg-section-alt">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
        Benefits of Compliance Services from <span className="text-secondary">RapidTax</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-background rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-border"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <b.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">{b.title}</h3>
            <p className="font-body text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
