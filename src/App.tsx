import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import SingleService from "./pages/SingleService";
import OurWork from "./pages/OurWork";
import SingleWork from "./pages/SingleWork";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
<Route path="/services/:slug" element={<SingleService />} />

    <Route path="/work" element={<OurWork />} />
    <Route path="/work/:workId" element={<SingleWork />} />
    <Route path="/insights" element={<Insights />} />
    <Route path="/contact" element={<Contact />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>

      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
