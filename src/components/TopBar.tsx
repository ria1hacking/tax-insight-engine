import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => (
  <div className="bg-primary text-primary-foreground py-2 text-sm">
    <div className="container mx-auto flex justify-between items-center px-4">
      <div className="flex items-center gap-4">
        <a href="tel:18008890137" className="flex items-center gap-1 hover:text-secondary transition-colors">
          <Phone className="w-3.5 h-3.5" /> 1800 889 0137
        </a>
        <a href="mailto:info@rapidtax.in" className="hidden sm:flex items-center gap-1 hover:text-secondary transition-colors">
          <Mail className="w-3.5 h-3.5" /> info@rapidtax.in
        </a>
      </div>
      <Link to="/careers" className="hover:text-secondary transition-colors">Careers</Link>
    </div>
  </div>
);

export default TopBar;
