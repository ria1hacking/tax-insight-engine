import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Lightbulb, ClipboardList } from "lucide-react";

const categories = [
  {
    icon: Briefcase,
    title: "Start a Business",
    items: [
      { name: "Proprietorship", path: "/proprietorship-firm" },
      { name: "Partnership Firm", path: "/partnership-firm" },
      { name: "One Person Company (OPC)", path: "/opc-registration" },
      { name: "Limited Liability Partnership (LLP)", path: "/llp-registration" },
      { name: "Private Limited Company", path: "/private-limited" },
    ],
  },
  {
    icon: Lightbulb,
    title: "Intellectual Property",
    items: [
      { name: "Trademark Application", path: "/trademark-application" },
      { name: "Trademark Objection Reply", path: "/trademark-objection" },
      { name: "Copyright Registration", path: "/trademark-application" },
      { name: "Patent Registration", path: "/trademark-application" },
    ],
  },
  {
    icon: ClipboardList,
    title: "Other Registrations",
    items: [
      { name: "MSME Registration", path: "/msme-registration" },
      { name: "PAN Application", path: "/pan-application" },
      { name: "TAN Registration", path: "/tan-registration" },
      { name: "ROC Compliance", path: "/roc-services" },
      { name: "GST Registration for Foreigners", path: "/gst-registration" },
    ],
  },
];

const RegistrationsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-section-alt">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
          Business Registration & Intellectual Property
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-background rounded-xl shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary p-5 flex items-center gap-3">
                <cat.icon className="w-6 h-6 text-secondary" />
                <h3 className="font-heading text-lg font-bold text-primary-foreground">
                  {cat.title}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="font-body text-sm text-muted-foreground flex items-center gap-2 cursor-pointer hover:text-secondary transition-colors"
                      onClick={() => navigate(item.path)}
                    >
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                      {item.name}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-secondary hover:bg-amber-dark text-secondary-foreground font-heading font-semibold"
                  onClick={() => navigate(cat.items[0].path)}
                >
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
