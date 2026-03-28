import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Lightbulb, ClipboardList } from "lucide-react";

const categories = [
  {
    icon: Briefcase, title: "Start a Business",
    items: [
      { name: "Proprietorship", path: "/proprietorship-firm" },
      { name: "Partnership Firm", path: "/partnership-firm" },
      { name: "OPC", path: "/opc-registration" },
      { name: "LLP Registration", path: "/llp-registration" },
      { name: "Private Limited", path: "/private-limited" },
    ],
  },
  {
    icon: Lightbulb, title: "Intellectual Property",
    items: [
      { name: "Trademark Application", path: "/trademark-application" },
      { name: "Trademark Objection", path: "/trademark-objection" },
      { name: "Copyright Registration", path: "/trademark-application" },
      { name: "Patent Registration", path: "/trademark-application" },
    ],
  },
  {
    icon: ClipboardList, title: "Other Registrations",
    items: [
      { name: "MSME Registration", path: "/msme-registration" },
      { name: "PAN Application", path: "/pan-application" },
      { name: "TAN Registration", path: "/tan-registration" },
      { name: "ROC Compliance", path: "/roc-services" },
      { name: "GST for Foreigners", path: "/gst-registration" },
    ],
  },
];

const RegistrationsSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-8 md:py-16 bg-section-alt">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-xl md:text-4xl font-bold text-center text-foreground mb-1 md:mb-2">
          Business Registration & IP
        </h2>
        <div className="w-16 md:w-20 h-1 bg-secondary mx-auto mb-4 md:mb-12 rounded-full" />
        <div className="grid md:grid-cols-3 gap-3 md:gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-background rounded-lg md:rounded-xl shadow-md border border-border overflow-hidden">
              <div className="bg-primary p-3 md:p-5 flex items-center gap-2">
                <cat.icon className="w-4 h-4 md:w-6 md:h-6 text-secondary" />
                <h3 className="font-heading text-sm md:text-lg font-bold text-primary-foreground">{cat.title}</h3>
              </div>
              <div className="p-3 md:p-6">
                <ul className="space-y-1 md:space-y-2 mb-3 md:mb-6">
                  {cat.items.map((item) => (
                    <li key={item.name} className="font-body text-xs md:text-sm text-muted-foreground flex items-center gap-1.5 cursor-pointer hover:text-secondary transition-colors" onClick={() => navigate(item.path)}>
                      <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-secondary rounded-full flex-shrink-0" />
                      {item.name}
                    </li>
                  ))}
                </ul>
                <Button size="sm" className="w-full bg-secondary hover:bg-amber-dark text-secondary-foreground font-heading font-semibold text-xs md:text-sm h-7 md:h-10" onClick={() => navigate(cat.items[0].path)}>
                  Start Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegistrationsSection;
