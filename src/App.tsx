import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseNavian from "./pages/CaseNavian";
import CaseStayte from "./pages/CaseStayte";
import CaseFlowHealth from "./pages/CaseFlowHealth";
import CaseDatox from "./pages/CaseDatox";
import Method from "./pages/Method";
import PageTransition from "./components/PageTransition";
import Analytics from "./components/Analytics";

/* Routes live in their own component so they can read the location that
   AnimatePresence keys on. `location` is passed to Routes explicitly: without it
   the outgoing copy would re-resolve against the new URL and render the incoming
   page twice instead of cross-fading. */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      {/* A sibling of PageTransition, not a child of it — AnimatePresence swaps
          the page content on every route change, and Analytics has to survive
          that swap rather than remount alongside it. */}
      <Analytics />
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
    </>
  );
};

/* Where a route change leaves the scroll is decided inside PageTransition, next to
   the reveal it has to stay in step with — not by a separate component racing it.

   No gate here any more. It used to wrap this tree, which meant the check ran inside
   a bundle the server had already handed over — the code and every case study were
   readable in it without ever answering the prompt. The gate now lives in
   middleware.ts and runs at the edge, so nothing reaches the browser until it has
   been passed. By the time this renders, the visitor is already through. */
const App = () => (
  <BrowserRouter>
    <AnimatedRoutes />
  </BrowserRouter>
);

export default App;
