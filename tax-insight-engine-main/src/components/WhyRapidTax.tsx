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
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
        Why <span className="text-secondary">RapidTax</span>?
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {reasons.map((r) => (
          <div
            key={r.label}
            className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-muted transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/15 flex items-center justify-center">
              <r.icon className="w-8 h-8 text-secondary" />
            </div>
            <p className="font-heading text-sm font-semibold text-foreground">{r.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyRapidTax;
