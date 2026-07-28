import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseNavian from "./pages/CaseNavian";
import CaseStayte from "./pages/CaseStayte";
import CaseFlowHealth from "./pages/CaseFlowHealth";
import CaseDatox from "./pages/CaseDatox";
import Method from "./pages/Method";
import PageTransition from "./components/PageTransition";
import EntryGate from "./components/EntryGate";

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

/* Where a route change leaves the scroll is decided inside PageTransition, next to
   the reveal it has to stay in step with — not by a separate component racing it.

   The gate is outside the router, so it covers a deep link to a case as well as the
   home page, and inside BrowserRouter is unnecessary — it needs no location. */
const App = () => (
  <BrowserRouter>
    <EntryGate>
      <AnimatedRoutes />
    </EntryGate>
  </BrowserRouter>
);

export default App;
