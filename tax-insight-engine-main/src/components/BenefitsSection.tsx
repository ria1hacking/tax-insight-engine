import { Clock, Headphones, IndianRupee, Users } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Timely Submission", desc: "We file returns within deadline. No penalties." },
  { icon: Headphones, title: "Year-Round Consultation", desc: "Get consultation on call. No limits." },
  { icon: IndianRupee, title: "Save Money", desc: "Professional services at affordable prices." },
  { icon: Users, title: "In-House Professionals", desc: "A relationship manager guides you through." },
];

const BenefitsSection = () => (
  <section className="py-8 md:py-16 bg-section-alt">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-xl md:text-4xl font-bold text-center text-foreground mb-4 md:mb-12">
        Benefits of Compliance from <span className="text-secondary">RapidTax</span>
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
        {benefits.map((b) => (
          <div key={b.title} className="bg-background rounded-lg md:rounded-xl p-3 md:p-6 text-center shadow-md border border-border">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
              <b.icon className="w-5 h-5 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="font-heading text-xs md:text-lg font-bold text-foreground mb-1 md:mb-2">{b.title}</h3>
            <p className="font-body text-[10px] md:text-sm text-muted-foreground leading-tight">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
