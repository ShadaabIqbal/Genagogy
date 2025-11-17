import { useEffect } from "react"; // <-- add this
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/omfdpa5auykadz8sxebi3tgbkgfl6jaj.js"; // your Tidio ID
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
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
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
