import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
      <div>
        <Link to="/" className="font-heading text-xl font-bold mb-4 block">
          Rapid<span className="text-secondary">Tax</span>
        </Link>
        <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
          India's largest online Business and Tax compliance platform helping entrepreneurs and
          individuals with registrations, tax filing, and compliance services.
        </p>
      </div>

      <div>
        <h4 className="font-heading font-bold mb-4 text-secondary">GST Services</h4>
        <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
          <li><Link to="/gst-registration" className="hover:text-secondary transition-colors">GST Registration</Link></li>
          <li><Link to="/gst-return-filing" className="hover:text-secondary transition-colors">GST Return Filing</Link></li>
          <li><Link to="/gst-amendment" className="hover:text-secondary transition-colors">GST Amendment</Link></li>
          <li><Link to="/gst-cancellation" className="hover:text-secondary transition-colors">GST Cancellation</Link></li>
          <li><Link to="/gst-reconciliation" className="hover:text-secondary transition-colors">GST Reconciliation</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-heading font-bold mb-4 text-secondary">Tax Services</h4>
        <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
          <li><Link to="/itr-salaried" className="hover:text-secondary transition-colors">ITR Filing (Salaried)</Link></li>
          <li><Link to="/itr-business" className="hover:text-secondary transition-colors">ITR Filing (Business)</Link></li>
          <li><Link to="/tds-return-filing" className="hover:text-secondary transition-colors">TDS Return Filing</Link></li>
          <li><Link to="/tax-audit" className="hover:text-secondary transition-colors">Tax Audit</Link></li>
          <li><Link to="/pan-application" className="hover:text-secondary transition-colors">PAN Application</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-heading font-bold mb-4 text-secondary">Contact Us</h4>
        <div className="space-y-3 font-body text-sm text-primary-foreground/70">
          <a href="tel:18008890137" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Phone className="w-4 h-4 text-secondary" /> 1800 889 0137
          </a>
          <a href="mailto:info@rapidtax.in" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Mail className="w-4 h-4 text-secondary" /> info@rapidtax.in
          </a>
          <p className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-secondary mt-0.5" /> New Delhi, India
          </p>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 mt-8 pt-6 border-t border-primary-foreground/10">
      <p className="font-body text-xs text-primary-foreground/50 text-center">
        © {new Date().getFullYear()} RapidTax. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
