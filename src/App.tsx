import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

// Service Pages
import GSTRegistration from "./pages/GSTRegistration";
import GSTReturnFiling from "./pages/GSTReturnFiling";
import GSTAmendment from "./pages/GSTAmendment";
import GSTCancellation from "./pages/GSTCancellation";
import GSTITCRefund from "./pages/GSTITCRefund";
import GSTReconciliation from "./pages/GSTReconciliation";
import GSTR9Filing from "./pages/GSTR9Filing";
import LUTApplication from "./pages/LUTApplication";
import ITRSalaried from "./pages/ITRSalaried";
import ITRBusiness from "./pages/ITRBusiness";
import TDSReturnFiling from "./pages/TDSReturnFiling";
import TaxAudit from "./pages/TaxAudit";
import PANApplication from "./pages/PANApplication";
import TANRegistration from "./pages/TANRegistration";
import TrademarkApplication from "./pages/TrademarkApplication";
import TrademarkObjection from "./pages/TrademarkObjection";
import ProprietorshipFirm from "./pages/ProprietorshipFirm";
import PartnershipFirm from "./pages/PartnershipFirm";
import OPCRegistration from "./pages/OPCRegistration";
import LLPRegistration from "./pages/LLPRegistration";
import PrivateLimited from "./pages/PrivateLimited";
import MSMERegistration from "./pages/MSMERegistration";
import ROCServices from "./pages/ROCServices";
import CareersPage from "./pages/CareersPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* GST Services */}
          <Route path="/gst-registration" element={<GSTRegistration />} />
          <Route path="/gst-return-filing" element={<GSTReturnFiling />} />
          <Route path="/gst-amendment" element={<GSTAmendment />} />
          <Route path="/gst-cancellation" element={<GSTCancellation />} />
          <Route path="/gst-itc-refund" element={<GSTITCRefund />} />
          <Route path="/gst-reconciliation" element={<GSTReconciliation />} />
          <Route path="/gstr-9-filing" element={<GSTR9Filing />} />
          <Route path="/lut-application" element={<LUTApplication />} />
          
          {/* Income Tax */}
          <Route path="/itr-salaried" element={<ITRSalaried />} />
          <Route path="/itr-business" element={<ITRBusiness />} />
          <Route path="/tds-return-filing" element={<TDSReturnFiling />} />
          <Route path="/tax-audit" element={<TaxAudit />} />
          <Route path="/pan-application" element={<PANApplication />} />
          <Route path="/tan-registration" element={<TANRegistration />} />
          
          {/* Trademark */}
          <Route path="/trademark-application" element={<TrademarkApplication />} />
          <Route path="/trademark-objection" element={<TrademarkObjection />} />
          
          {/* Start a Business */}
          <Route path="/proprietorship-firm" element={<ProprietorshipFirm />} />
          <Route path="/partnership-firm" element={<PartnershipFirm />} />
          <Route path="/opc-registration" element={<OPCRegistration />} />
          <Route path="/llp-registration" element={<LLPRegistration />} />
          <Route path="/private-limited" element={<PrivateLimited />} />
          
          {/* Other */}
          <Route path="/msme-registration" element={<MSMERegistration />} />
          <Route path="/roc-services" element={<ROCServices />} />
          <Route path="/careers" element={<CareersPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
