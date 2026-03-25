import { FileText, Cog, Award, Building2 } from "lucide-react";

const steps = [
  { icon: FileText, step: "Step 1", desc: "Gather & validate all required documents" },
  { icon: Cog, step: "Step 2", desc: "Initiate the Incorporation process" },
  { icon: Award, step: "Step 3", desc: "Get Certificate of Incorporation" },
  { icon: Building2, step: "Step 4", desc: "Open a Current bank Account" },
];

const HowItWorks = () => (
  <section className="py-16 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
        Incorporate your company with our experts in just{" "}
        <span className="text-secondary">1 week</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-4">
            <div className="w-20 h-20 rounded-full bg-primary-foreground/10 border-2 border-secondary flex items-center justify-center">
              <s.icon className="w-9 h-9 text-secondary" />
            </div>
            <h3 className="font-heading text-lg font-bold">{s.step}</h3>
            <p className="font-body text-primary-foreground/80 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
