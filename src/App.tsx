import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseNavian from "./pages/CaseNavian";
import CaseReviero from "./pages/CaseReviero";
import CaseStayte from "./pages/CaseStayte";
import CaseFlowHealth from "./pages/CaseFlowHealth";
import CaseDatox from "./pages/CaseDatox";
import Method from "./pages/Method";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/case/navian" element={<CaseNavian />} />
      <Route path="/case/stayte" element={<CaseStayte />} />
      {/* Kept reachable by direct link, but no longer listed in Work — Stayte
          is the same system under its current name. */}
      <Route path="/case/reviero" element={<CaseReviero />} />
      <Route path="/case/flowhealth" element={<CaseFlowHealth />} />
      <Route path="/case/datox" element={<CaseDatox />} />
      <Route path="/method" element={<Method />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
