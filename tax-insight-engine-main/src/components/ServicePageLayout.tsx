import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Phone, Mail, ArrowLeft } from "lucide-react";
import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  priceLabel?: string;
  features: string[];
  documents?: string[];
  steps?: { title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
}

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  price,
  priceLabel = "starts at",
  features,
  documents,
  steps,
  faqs,
}: ServicePageLayoutProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen font-body">
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-[image:var(--hero-gradient)] py-14">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1 text-primary-foreground/70 hover:text-secondary mb-6 font-body text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
                {title}
              </h1>
              <p className="font-body text-lg text-primary-foreground/80 mb-6">{subtitle}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                {["Happy Clients", "On Time Delivery", "Data Security", "100% Satisfaction"].map(
                  (item) => (
                    <span
                      key={item}
                      className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-xs px-3 py-1.5 rounded-full font-heading font-medium"
                    >
                      ✓ {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-background rounded-xl shadow-2xl p-6">
              <h3 className="font-heading text-xl font-bold text-foreground text-center mb-1">
                Get Started!
              </h3>
              <p className="text-center text-muted-foreground text-sm mb-5">
                {priceLabel}: <span className="font-heading font-bold text-secondary text-xl">{price}</span>
              </p>
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <p className="font-heading font-bold text-foreground">Thank you!</p>
                  <p className="text-sm text-muted-foreground">Our team will contact you shortly.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1 block">Name</label>
                    <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1 block">Phone Number</label>
                    <div className="flex gap-2">
                      <select className="border border-input rounded-md px-2 py-2 text-sm bg-background w-24">
                        <option>IN (+91)</option>
                        <option>US (+1)</option>
                        <option>GB (+44)</option>
                      </select>
                      <Input placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1 block">Email ID</label>
                    <Input type="email" placeholder="Email ID" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                  </div>
                  <Button className="w-full bg-secondary hover:bg-amber-dark text-secondary-foreground font-heading font-semibold">
                    Get Started
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Description & Features */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">About this Service</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">{description}</p>
            {documents && (
              <>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">Documents Required</h3>
                <ul className="space-y-2">
                  {documents.map((doc) => (
                    <li key={doc} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What's Included</h2>
            <div className="space-y-3">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-3 rounded-lg bg-muted border border-border">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      {steps && (
        <section className="py-14 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl font-bold text-center mb-10">How It Works</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mx-auto mb-3 font-heading font-bold text-lg">
                    {i + 1}
                  </div>
                  <h3 className="font-heading font-bold mb-1">{s.title}</h3>
                  <p className="font-body text-sm text-primary-foreground/80">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs && (
        <section className="py-14 bg-section-alt">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-center text-foreground mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-background border border-border rounded-lg p-4 group">
                  <summary className="font-heading font-semibold text-foreground cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-secondary group-open:rotate-45 transition-transform text-xl">+</span>
                  </summary>
                  <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-2">Need Help? Contact Us</h2>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <a href="tel:18008890137" className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors">
              <Phone className="w-5 h-5" /> 1800 889 0137
            </a>
            <a href="mailto:info@rapidtax.in" className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors">
              <Mail className="w-5 h-5" /> info@rapidtax.in
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageLayout;
