import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  const navigate = useNavigate();
  return (
    <section className="py-8 md:py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading text-lg md:text-3xl text-primary-foreground font-bold mb-1 md:mb-2">
          "Maximize your profits and minimize your headaches with
        </p>
        <p className="font-heading text-lg md:text-3xl text-secondary font-bold mb-4 md:mb-8">
          our expert accounting services."
        </p>
        <Button size="sm" className="bg-secondary hover:bg-amber-dark text-secondary-foreground font-heading font-semibold px-6 md:px-10 text-sm md:text-lg h-8 md:h-12" onClick={() => navigate("/gst-registration")}>
          GET NOW
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;
