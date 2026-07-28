import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseNavian from "./pages/CaseNavian";
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
      <Route path="/case/flowhealth" element={<CaseFlowHealth />} />
      <Route path="/case/datox" element={<CaseDatox />} />
      <Route path="/method" element={<Method />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
