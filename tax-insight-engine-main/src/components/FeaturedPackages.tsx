import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const packages = [
  { name: "GST Registration", price: "₹1,499", period: "", label: "starts at", path: "/gst-registration" },
  { name: "GST Return Filing", price: "₹649", period: "per month", label: "starts from", path: "/gst-return-filing" },
  { name: "TDS Return Filing", price: "₹1,999", period: "per quarter", label: "starts from", path: "/tds-return-filing" },
  { name: "ITR Filing (Salaried)", price: "₹1,499", period: "", label: "starts at", path: "/itr-salaried" },
  { name: "LLP Registration", price: "₹9,999", period: "", label: "starts from", path: "/llp-registration" },
  { name: "PAN Application", price: "₹999", period: "", label: "starts at", path: "/pan-application" },
  { name: "MSME Registration", price: "₹999", period: "", label: "starts at", path: "/msme-registration" },
  { name: "Trademark Application", price: "₹3,499", period: "", label: "starts at", path: "/trademark-application" },
];

const FeaturedPackages = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
          Our <span className="italic text-secondary">Featured</span> Packages
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-12 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="bg-background border border-border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
              onClick={() => navigate(pkg.path)}
            >
              <div className="bg-primary p-4">
                <h3 className="font-heading text-lg font-bold text-primary-foreground text-center">
                  {pkg.name}
                </h3>
              </div>
              <div className="p-6 text-center">
                <p className="text-muted-foreground font-body text-sm mb-1">{pkg.label}</p>
                <div className="w-12 h-0.5 bg-secondary mx-auto mb-3" />
                <p className="font-heading text-3xl font-bold text-foreground mb-1">
                  {pkg.price}
                  {pkg.period && (
                    <span className="text-base font-normal text-muted-foreground">
                      {" "}{pkg.period}
                    </span>
                  )}
                </p>
                <Button className="mt-4 bg-secondary hover:bg-amber-dark text-secondary-foreground font-heading font-semibold w-full">
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
