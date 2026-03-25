import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Clock, Lock, ThumbsUp } from "lucide-react";

const highlights = [
  { icon: Shield, label: "Happy", sub: "Clients" },
  { icon: Clock, label: "On Time", sub: "Delivery" },
  { icon: Lock, label: "Data", sub: "Security" },
  { icon: ThumbsUp, label: "100%", sub: "Satisfaction" },
];

const services = [
  { name: "GST Registration", path: "/gst-registration" },
  { name: "GST Return Filing", path: "/gst-return-filing" },
  { name: "GST Amendment", path: "/gst-amendment" },
  { name: "GST Cancellation", path: "/gst-cancellation" },
  { name: "ITR (Salaried)", path: "/itr-salaried" },
  { name: "ITR (Business)", path: "/itr-business" },
  { name: "TDS Return Filing", path: "/tds-return-filing" },
  { name: "LLP Registration", path: "/llp-registration" },
  { name: "Private Limited Company", path: "/private-limited" },
  { name: "Trademark Application", path: "/trademark-application" },
  { name: "PAN Application", path: "/pan-application" },
  { name: "MSME Registration", path: "/msme-registration" },
  { name: "ROC Services", path: "/roc-services" },
  { name: "TAN Registration", path: "/tan-registration" },
  { name: "Tax Audit", path: "/tax-audit" },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selected = services.find((s) => s.name === formData.service);
    if (selected) {
      navigate(selected.path);
    } else {
      navigate("/gst-registration");
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--hero-gradient)] opacity-95" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative container mx-auto px-4 py-16 lg:py-20">
        <div className="text-center mb-8">
          <div className="inline-block bg-secondary text-secondary-foreground px-6 py-2 rounded-full font-heading font-semibold text-sm mb-3">
            India's leading Compliance Platform
          </div>
          <p className="text-primary-foreground/90 font-body text-lg">
            We Provide the Best Compliance Services
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              India's largest Online Business and Tax Compliance Platform
            </h1>
            <p className="font-body text-primary-foreground/80 text-base md:text-lg mb-8 max-w-2xl">
              <strong className="text-primary-foreground">RapidTax</strong> is the largest online
              Business and Tax compliance platform that helps Entrepreneurs and Individuals with
              various Registrations, Tax Filing, Accounting and Compliance Services.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              {highlights.map((h) => (
                <div key={h.label} className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-secondary/20 border-2 border-secondary flex items-center justify-center">
                    <h.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-bold text-primary-foreground text-sm">{h.label}</p>
                    <p className="text-primary-foreground/70 text-xs">{h.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-secondary hover:bg-amber-dark text-secondary-foreground font-heading font-semibold px-8"
              onClick={() => {
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Our Services
            </Button>
          </div>

          {/* Lead form */}
          <div className="lg:col-span-2 bg-background rounded-xl shadow-2xl p-6">
            <h3 className="font-heading text-xl font-bold text-foreground text-center mb-5">
              Get Started!
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1 block">Name</label>
                <Input
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1 block">Phone Number</label>
                <div className="flex gap-2">
                  <select className="border border-input rounded-md px-2 py-2 text-sm bg-background w-24">
                    <option>IN (+91)</option>
                    <option>US (+1)</option>
                    <option>GB (+44)</option>
                    <option>AU (+61)</option>
                  </select>
                  <Input
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1 block">Email ID</label>
                <Input
                  type="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1 block">Service</label>
                <select
                  className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Select a Service</option>
                  {services.map((s) => (
                    <option key={s.name} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
              <Button type="submit" className="w-full bg-secondary hover:bg-amber-dark text-secondary-foreground font-heading font-semibold">
                Get Started
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
