import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "GST",
    children: [
      { name: "GST Registration", path: "/gst-registration" },
      { name: "GST Return Filing", path: "/gst-return-filing" },
      { name: "GST Amendment", path: "/gst-amendment" },
      { name: "GST Cancellation", path: "/gst-cancellation" },
      { name: "GST ITC Refund", path: "/gst-itc-refund" },
      { name: "GST Reconciliation", path: "/gst-reconciliation" },
      { name: "GSTR-9 Return Filing", path: "/gstr-9-filing" },
      { name: "LUT Application for GST", path: "/lut-application" },
    ],
  },
  {
    label: "Income Tax",
    children: [
      { name: "ITR Filing (Salaried)", path: "/itr-salaried" },
      { name: "ITR Filing (Business)", path: "/itr-business" },
      { name: "TDS Return Filing", path: "/tds-return-filing" },
      { name: "Tax Audit", path: "/tax-audit" },
      { name: "PAN Application", path: "/pan-application" },
      { name: "TAN Registration", path: "/tan-registration" },
    ],
  },
  {
    label: "Trademark",
    children: [
      { name: "Trademark Application", path: "/trademark-application" },
      { name: "Trademark Objection Reply", path: "/trademark-objection" },
    ],
  },
  {
    label: "Start a Business",
    children: [
      { name: "Proprietorship Firm", path: "/proprietorship-firm" },
      { name: "Partnership Firm", path: "/partnership-firm" },
      { name: "One Person Company (OPC)", path: "/opc-registration" },
      { name: "LLP Registration", path: "/llp-registration" },
      { name: "Private Limited Company", path: "/private-limited" },
    ],
  },
  {
    label: "Other Services",
    children: [
      { name: "MSME Registration", path: "/msme-registration" },
      { name: "ROC Compliance", path: "/roc-services" },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <nav className="bg-background shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-1">
          <span className="font-heading text-2xl font-bold text-primary">
            Rapid<span className="text-secondary">Tax</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 font-body text-sm font-medium text-foreground hover:text-secondary transition-colors">
                  {item.label} <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-background shadow-lg rounded-md py-2 min-w-[220px] border border-border">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href!}
                className="font-body text-sm font-medium text-foreground hover:text-secondary transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className="w-full flex justify-between items-center py-2 text-sm font-medium text-foreground"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="block py-1.5 text-sm text-muted-foreground hover:text-secondary"
                          onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href!}
                  className="block py-2 text-sm font-medium text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
