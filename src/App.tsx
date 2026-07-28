import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseNavian from "./pages/CaseNavian";
import CaseStayte from "./pages/CaseStayte";
import CaseFlowHealth from "./pages/CaseFlowHealth";
import CaseDatox from "./pages/CaseDatox";
import Method from "./pages/Method";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

/* Routes live in their own component so they can read the location that
   AnimatePresence keys on. `location` is passed to Routes explicitly: without it
   the outgoing copy would re-resolve against the new URL and render the incoming
   page twice instead of cross-fading. */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <PageTransition>
      <Routes location={location}>
      <Route path="/" element={<Index />} />
      <Route path="/case/navian" element={<CaseNavian />} />
      <Route path="/case/stayte" element={<CaseStayte />} />
      <Route path="/case/flowhealth" element={<CaseFlowHealth />} />
      <Route path="/case/datox" element={<CaseDatox />} />
      <Route path="/method" element={<Method />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <AnimatedRoutes />
  </BrowserRouter>
);

export default App;
