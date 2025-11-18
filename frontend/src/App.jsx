import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Contact from "./pages/Contact";
import StaffLogin from "./pages/StaffLogin";
import StaffDashboard from "./pages/StaffDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import AwardsRecognition from "./pages/AwardsRecognition";
import Loader from "./components/Loader";

const queryClient = new QueryClient();

// Component to handle initial page load and route transitions
const AppContent = () => {
  const location = useLocation();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isRouteLoading, setIsRouteLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/omfdpa5auykadz8sxebi3tgbkgfl6jaj.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Handle initial page load - show loader until page is ready
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsInitialLoad(false);
      }, 600);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Handle route changes - show loader briefly on navigation
  useEffect(() => {
    if (!isInitialLoad) {
      setIsRouteLoading(true);
      // Wait for images and content to start loading
      const timer = setTimeout(() => {
        setIsRouteLoading(false);
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, isInitialLoad]);

  return (
    <>
      {isInitialLoad && <Loader fullScreen={true} />}
      {isRouteLoading && <Loader fullScreen={true} />}
      <div
        className={`min-h-screen flex flex-col overflow-x-hidden w-full transition-opacity duration-700 ${
          isInitialLoad || isRouteLoading
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        <Navbar />
        <main className="flex-1 w-full overflow-x-hidden pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/awards" element={<AwardsRecognition />} />
            <Route path="/staff-login" element={<StaffLogin />} />
            <Route path="/staff-dashboard" element={<StaffDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
