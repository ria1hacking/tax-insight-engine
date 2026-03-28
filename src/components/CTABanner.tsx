import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading text-2xl md:text-3xl text-primary-foreground font-bold mb-2">
          "Maximize your profits and minimize your headaches with
        </p>
        <p className="font-heading text-2xl md:text-3xl text-secondary font-bold mb-8">
          our expert accounting services."
        </p>
        <Button
          size="lg"
          className="bg-secondary hover:bg-amber-dark text-secondary-foreground font-heading font-semibold px-10 text-lg"
          onClick={() => navigate("/gst-registration")}
        >
          GET NOW
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;
