import { FileText, Cog, Award, Building2 } from "lucide-react";

const steps = [
  { icon: FileText, step: "Step 1", desc: "Gather & validate documents" },
  { icon: Cog, step: "Step 2", desc: "Initiate Incorporation" },
  { icon: Award, step: "Step 3", desc: "Get Certificate" },
  { icon: Building2, step: "Step 4", desc: "Open Bank Account" },
];

const HowItWorks = () => (
  <section className="py-8 md:py-16 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-xl md:text-4xl font-bold text-center mb-4 md:mb-12">
        Incorporate your company in just <span className="text-secondary">1 week</span>
      </h2>
      <div className="grid grid-cols-4 gap-2 md:gap-8">
        {steps.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-1.5 md:gap-4">
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-primary-foreground/10 border-2 border-secondary flex items-center justify-center">
              <s.icon className="w-5 h-5 md:w-9 md:h-9 text-secondary" />
            </div>
            <h3 className="font-heading text-xs md:text-lg font-bold">{s.step}</h3>
            <p className="font-body text-primary-foreground/80 text-[10px] md:text-sm leading-tight">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
