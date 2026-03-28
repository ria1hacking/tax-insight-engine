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
    navigate(selected ? selected.path : "/gst-registration");
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--hero-gradient)] opacity-95" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />

      <div className="relative container mx-auto px-4 py-8 md:py-16 lg:py-20">
        <div className="text-center mb-4 md:mb-8">
          <div className="inline-block bg-secondary text-secondary-foreground px-4 md:px-6 py-1.5 md:py-2 rounded-full font-heading font-semibold text-xs md:text-sm mb-2">
            India's leading Compliance Platform
          </div>
          <p className="text-primary-foreground/90 font-body text-sm md:text-lg">We Provide the Best Compliance Services</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-10 items-start">
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-3 md:mb-6">
              India's largest Online Business and Tax Compliance Platform
            </h1>
            <p className="font-body text-primary-foreground/80 text-xs md:text-lg mb-4 md:mb-8 max-w-2xl">
              <strong className="text-primary-foreground">RapidTax</strong> helps Entrepreneurs and Individuals with Registrations, Tax Filing, Accounting and Compliance Services.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-4 md:mb-8">
              {highlights.map((h) => (
                <div key={h.label} className="flex flex-col items-center gap-1 md:gap-2">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-secondary/20 border-2 border-secondary flex items-center justify-center">
                    <h.icon className="w-4 h-4 md:w-6 md:h-6 text-secondary" />
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-bold text-primary-foreground text-xs md:text-sm">{h.label}</p>
                    <p className="text-primary-foreground/70 text-[10px] md:text-xs">{h.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="sm" className="bg-secondary hover:bg-amber-dark text-secondary-foreground font-heading font-semibold px-6 md:px-8 text-xs md:text-base h-8 md:h-11" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
              Our Services
            </Button>
          </div>

          <div className="lg:col-span-2 bg-background rounded-xl shadow-2xl p-4 md:p-6">
            <h3 className="font-heading text-lg md:text-xl font-bold text-foreground text-center mb-3 md:mb-5">Get Started!</h3>
            <form className="space-y-2.5 md:space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="font-body text-xs md:text-sm font-medium text-foreground mb-0.5 block">Name</label>
                <Input placeholder="Name" className="h-8 md:h-10 text-xs md:text-sm" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div>
                <label className="font-body text-xs md:text-sm font-medium text-foreground mb-0.5 block">Phone</label>
                <div className="flex gap-1.5">
                  <select className="border border-input rounded-md px-1.5 py-1 text-xs md:text-sm bg-background w-20 md:w-24">
                    <option>IN (+91)</option>
                    <option>US (+1)</option>
                  </select>
                  <Input placeholder="Phone" className="h-8 md:h-10 text-xs md:text-sm" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="font-body text-xs md:text-sm font-medium text-foreground mb-0.5 block">Email</label>
                <Input type="email" placeholder="Email" className="h-8 md:h-10 text-xs md:text-sm" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div>
                <label className="font-body text-xs md:text-sm font-medium text-foreground mb-0.5 block">Service</label>
                <select className="w-full border border-input rounded-md px-2 py-1.5 text-xs md:text-sm bg-background" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                  <option value="">Select a Service</option>
                  {services.map((s) => (<option key={s.name} value={s.name}>{s.name}</option>))}
                </select>
              </div>
              <Button type="submit" className="w-full bg-secondary hover:bg-amber-dark text-secondary-foreground font-heading font-semibold text-xs md:text-sm h-8 md:h-10">
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
