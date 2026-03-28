import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-section-alt">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80"
            alt="About RapidTax"
            className="w-full h-80 object-cover"
          />
        </div>
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Us
          </h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            <strong className="text-foreground">RapidTax</strong> is a company that offers a wide
            range of services related to GST, Company Compliance, Business requirements and various
            legal matters. With their expertise in GST, Company and Legal compliance, they help
            businesses navigate the complexities of tax laws and regulations.
          </p>
          <p className="font-body text-muted-foreground mb-6 leading-relaxed">
            Whether it's registering for GST, filing returns, or resolving disputes, RapidTax
            provides practical solutions to ensure clients stay compliant and minimize their tax
            liabilities.
          </p>
          <Button
            className="bg-secondary hover:bg-amber-dark text-secondary-foreground font-heading font-semibold px-8"
            onClick={() => navigate("/gst-registration")}
          >
            Know More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
