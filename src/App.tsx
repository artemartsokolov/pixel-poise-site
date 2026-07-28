import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseNavian from "./pages/CaseNavian";
import CaseReviero from "./pages/CaseReviero";
import CaseFlowHealth from "./pages/CaseFlowHealth";
import CaseDatox from "./pages/CaseDatox";
import Method from "./pages/Method";
import ScrollToTop from "./components/ScrollToTop";

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
          <Route path="/case/navian" element={<CaseNavian />} />
          <Route path="/case/reviero" element={<CaseReviero />} />
          <Route path="/case/flowhealth" element={<CaseFlowHealth />} />
          <Route path="/case/datox" element={<CaseDatox />} />
          <Route path="/method" element={<Method />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

