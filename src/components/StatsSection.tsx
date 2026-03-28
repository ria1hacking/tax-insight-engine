import { Building2, FileText, Receipt, Calculator } from "lucide-react";

const stats = [
  { icon: Building2, number: "410+", label: "Businesses Registered" },
  { icon: FileText, number: "1155+", label: "ITRs Filed" },
  { icon: Receipt, number: "5885+", label: "GST Returns Filed" },
  { icon: Calculator, number: "150+", label: "Accounting with us" },
];

const StatsSection = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
        Journey of <span className="text-secondary">RapidTax</span>
      </h2>
      <div className="w-20 h-1 bg-secondary mx-auto mb-12 rounded-full" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div
            key={s.label}
            className="text-center p-6 rounded-xl bg-muted border border-border"
          >
            <div className="w-14 h-14 mx-auto mb-4 bg-secondary/15 rounded-full flex items-center justify-center">
              <s.icon className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-heading text-3xl font-bold text-foreground mb-1">{s.number}</h3>
            <p className="font-body text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
