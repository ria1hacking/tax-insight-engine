import { ShieldCheck, Clock, Lock, Zap, MessageCircle, GraduationCap } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, label: "Recognized by Govt. of India" },
  { icon: Clock, label: "On Time Service" },
  { icon: Lock, label: "Data Security & Trust" },
  { icon: Zap, label: "Super Fast Service" },
  { icon: MessageCircle, label: "Quick Response Team" },
  { icon: GraduationCap, label: "Trained & Professional Experts" },
];

const WhyRapidTax = () => (
  <section className="py-8 md:py-16 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-xl md:text-4xl font-bold text-center text-foreground mb-4 md:mb-12">
        Why <span className="text-secondary">SMART GST AND INCOME TAX SOLUTIONS</span>?
      </h2>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
        {reasons.map((r) => (
          <div key={r.label} className="flex flex-col items-center text-center gap-1.5 md:gap-3 p-2 md:p-4 rounded-xl hover:bg-muted transition-colors">
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-secondary/15 flex items-center justify-center">
              <r.icon className="w-5 h-5 md:w-8 md:h-8 text-secondary" />
            </div>
            <p className="font-heading text-[10px] md:text-sm font-semibold text-foreground leading-tight">{r.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyRapidTax;
