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
    <section id="services" className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-center text-foreground mb-1 md:mb-2">
          Our <span className="italic text-secondary">Featured</span> Packages
        </h2>
        <div className="w-16 md:w-20 h-1 bg-secondary mx-auto mb-6 md:mb-12 rounded-full" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="bg-background border border-border rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
              onClick={() => navigate(pkg.path)}
            >
              <div className="bg-primary p-2 md:p-4">
                <h3 className="font-heading text-xs md:text-lg font-bold text-primary-foreground text-center leading-tight">
                  {pkg.name}
                </h3>
              </div>
              <div className="p-3 md:p-6 text-center">
                <p className="text-muted-foreground font-body text-[10px] md:text-sm mb-0.5 md:mb-1">{pkg.label}</p>
                <div className="w-8 md:w-12 h-0.5 bg-secondary mx-auto mb-1.5 md:mb-3" />
                <p className="font-heading text-lg md:text-3xl font-bold text-foreground mb-0.5 md:mb-1">
                  {pkg.price}
                  {pkg.period && (
                    <span className="text-[9px] md:text-base font-normal text-muted-foreground block md:inline">
                      {" "}{pkg.period}
                    </span>
                  )}
                </p>
                <Button className="mt-2 md:mt-4 bg-secondary hover:bg-amber-dark text-secondary-foreground font-heading font-semibold w-full text-xs md:text-sm h-7 md:h-10">
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
