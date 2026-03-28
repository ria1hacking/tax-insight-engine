import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-8 md:py-16 bg-section-alt">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
        <div className="rounded-xl overflow-hidden shadow-lg hidden md:block">
          <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80" alt="About RapidTax" className="w-full h-80 object-cover" />
        </div>
        <div>
          <h2 className="font-heading text-xl md:text-4xl font-bold text-foreground mb-3 md:mb-6">About Us</h2>
          <p className="font-body text-xs md:text-base text-muted-foreground mb-2 md:mb-4 leading-relaxed">
            <strong className="text-foreground">RapidTax</strong> offers a wide range of services related to GST, Company Compliance, Business requirements and legal matters, helping businesses navigate tax laws and regulations.
          </p>
          <Button size="sm" className="bg-secondary hover:bg-amber-dark text-secondary-foreground font-heading font-semibold px-6 text-xs md:text-sm" onClick={() => navigate("/gst-registration")}>
            Know More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
