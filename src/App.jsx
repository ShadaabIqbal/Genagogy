// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Courses from "./pages/Courses";
// import CourseDetails from "./pages/CourseDetails";
// import Contact from "./pages/Contact";
// import StaffLogin from "./pages/StaffLogin";
// import StaffDashboard from "./pages/StaffDashboard";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <div className="min-h-screen flex flex-col">
//           <Navbar />
//           <main className="flex-1">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/courses" element={<Courses />} />
//               <Route path="/courses/:id" element={<CourseDetails />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/staff-login" element={<StaffLogin />} />
//               <Route path="/staff-dashboard" element={<StaffDashboard />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;

import { useEffect } from "react"; // <-- add this
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Contact from "./pages/Contact";
import StaffLogin from "./pages/StaffLogin";
import StaffDashboard from "./pages/StaffDashboard";
import NotFound from "./pages/NotFound";

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
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:id" element={<CourseDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/staff-login" element={<StaffLogin />} />
                <Route path="/staff-dashboard" element={<StaffDashboard />} />
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
