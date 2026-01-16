import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown, Phone, Sparkles, Instagram, Facebook } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Aggressive preload logo image for instant loading
  useEffect(() => {
    // Preload the image directly in browser cache with highest priority
    // This runs immediately when component mounts
    const img = new Image();
    img.src = "/affliations/technoglobe_srinagar_logo.png";
    img.loading = "eager";

    // Force immediate load
    if (img.complete) {
      // Image already cached
    } else {
      img.onload = () => {
        // Image loaded successfully
      };
    }

    // Also trigger CSS preload
    const preloadDiv = document.createElement("div");
    preloadDiv.className = "logo-preload";
    document.body.appendChild(preloadDiv);

    // Cleanup
    return () => {
      if (preloadDiv.parentNode) {
        preloadDiv.parentNode.removeChild(preloadDiv);
      }
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Awards", path: "/awards" },
    { name: "Staff", path: "/staff-login", className: "whitespace-nowrap" },
  ];

  const courses = [
    {
      id: 1,
      title: "Digital Marketing",
      description:
        "Learn end-to-end digital marketing: SEO, SEM, social media, content, and analytics.",
      image: "/courses/digital_marketing.jpeg",
      path: "/courses/1",
    },
    {
      id: 2,
      title: "Video Editing",
      description:
        "Edit compelling videos with professional workflows, audio, motion, and color grading.",
      image: "/courses/video_editing.webp",
      path: "/courses/2",
    },
    {
      id: 3,
      title: "Graphic Designing",
      description:
        "Master design fundamentals, branding, and modern tools for print and digital.",
      image: "/courses/graphic_designing.webp",
      path: "/courses/3",
    },
    {
      id: 4,
      title: "Web Development (MERN)",
      description:
        "Build full-stack web apps with MongoDB, Express, React, and Node.js.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&q=80",
      path: "/courses/4",
    },
    {
      id: 5,
      title: "Data Science",
      description:
        "Apply statistics, Python, and ML to analyze data and build models.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80",
      path: "/courses/5",
    },
    {
      id: 6,
      title: "Data Analytics",
      description:
        "Turn raw data into insights using SQL, BI tools, and dashboards.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80",
      path: "/courses/6",
    },
    {
      id: 7,
      title: "Professional Accounting",
      description:
        "Core accounting principles, taxation, and tools for modern finance roles.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&q=80",
      path: "/courses/7",
    },
    {
      id: 8,
      title: "Ethical Hacking & Cyber Security",
      description:
        "Security fundamentals, network defense, and ethical hacking methodologies.",
      image:
        "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=300&fit=crop&q=80",
      path: "/courses/8",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-background/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container-max">
        {/* Main Navbar Row */}
        <div className="flex justify-between items-center min-h-[65px] py-2">
          {/* Enhanced Logo - Premium HD Technoglobe Logo */}
          <Link to="/" className="flex items-center space-x-2 mr-8 md:mr-12">
            <div className="relative h-10 md:h-12 lg:h-14 w-auto min-w-[90px] md:min-w-[110px] lg:min-w-[130px] flex-shrink-0">
              <ImageWithFallback
                src="/affliations/technoglobe_srinagar_logo.png"
                alt="Technoglobe Logo"
                className="h-10 md:h-12 lg:h-14 w-auto object-contain brightness-110 contrast-110 saturate-110 drop-shadow-[0_2px_6px_rgba(59,130,246,0.22)] filter"
                style={{
                  imageRendering: "auto",
                  WebkitImageRendering: "auto",
                  msInterpolationMode: "bicubic",
                  display: "block",
                }}
                fallback="/placeholder.svg"
                loading="eager"
                fetchpriority="high"
                decoding="sync"
              />
            </div>
            {/* Logo Text Enhancement - Making it readable */}
            <div className="hidden sm:block">
              <div className="text-xs md:text-sm font-bold text-foreground/90 leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                Professional Skill Development
              </div>
              <div className="text-[10px] md:text-xs text-muted-foreground/80 leading-tight">
                Empowering Futures
              </div>
            </div>
          </Link>

          {/* Desktop Navigation with Collaborations */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-all duration-300 will-change-[color,transform] transform hover:scale-105 whitespace-nowrap ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name === "Staff" ? "Staff Login" : item.name}
                </Link>
              ))}

              {/* Courses Dropdown - Hover Effect */}
              <div
                className="relative group"
                onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                onMouseLeave={() => setIsCoursesDropdownOpen(false)}
              >
                <Link
                  to="/courses"
                  className={`font-medium transition-all duration-300 will-change-[color,transform] transform hover:scale-105 flex items-center gap-1 ${
                    location.pathname.startsWith("/courses")
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Courses
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isCoursesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {/* Dropdown Content - Modern Tile Style */}
                {isCoursesDropdownOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 w-[920px] max-w-[50vw] max-h-[520px] overflow-y-auto p-5 bg-background border border-border/60 shadow-2xl rounded-2xl
                               z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2
                               scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
                    onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                    onMouseLeave={() => setIsCoursesDropdownOpen(false)}
                  >
                    <div className="grid grid-cols-2 xl:grid-cols-2 gap-3">
                      {courses.map((course) => (
                        <Link
                          key={course.id}
                          to={course.path}
                          onClick={() => setIsCoursesDropdownOpen(false)}
                          className="group relative flex flex-col p-4 rounded-xl 
                                     bg-background border border-border/50 hover:border-primary/50
                                     hover:bg-primary/8
                                     transition-all duration-200 ease-out
                                     hover:shadow-md hover:shadow-primary/10
                                     transform hover:-translate-y-0.5
                                     will-change-transform"
                        >
                          {/* Subtle hover glow effect */}
                          <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/10 transition-colors duration-200 -z-10"></div>

                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-200 mb-2 line-clamp-1 leading-tight">
                              {course.title}
                            </h3>
                            <p className="text-xs text-foreground/70 line-clamp-2 leading-relaxed group-hover:text-foreground/90 transition-colors duration-200">
                              {course.description}
                            </p>
                          </div>

                          {/* Subtle arrow indicator on hover */}
                          <div className="mt-3 flex items-center gap-1.5 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-medium">
                            <span>Learn more</span>
                            <ArrowRight className="h-3 w-3 transform group-hover:translate-x-0.5 transition-transform duration-200" />
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-5 pt-5 border-t border-border/50">
                      <Link
                        to="/courses"
                        className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg 
                                 bg-primary/10 hover:bg-primary/20 text-primary font-medium 
                                 transition-all duration-200 group border border-primary/30 hover:border-primary/50
                                 hover:shadow-sm"
                        onClick={() => setIsCoursesDropdownOpen(false)}
                      >
                        View All Courses
                        <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Eye-Catching Right Side Elements */}
            <div className="hidden lg:flex items-center gap-3 ml-6 pl-6 border-l border-primary/20">
              {/* Free Consultation Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-pulse">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-semibold whitespace-nowrap">Free Consultation</span>
              </div>

              {/* Call Now Button - Prominent */}
              <a
                href="tel:9103997281"
                className="group relative flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
              >
                <Phone className="h-4 w-4 group-hover:animate-pulse" />
                <span className="text-sm font-semibold whitespace-nowrap">Call Now</span>
              </a>

              {/* Social Media Icons */}
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/groups/370387843069813/?ref=share&mibextid=NSMWBT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/genagogy_srinagar?igsh=MXUxdTEzZG9pd2JpZQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-primary bg-primary-light"
                      : "text-muted-foreground hover:text-primary hover:bg-accent"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Courses Section */}
              <div className="pt-2 border-t border-border mt-2">
                <Link
                  to="/courses"
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname.startsWith("/courses")
                      ? "text-primary bg-primary-light"
                      : "text-muted-foreground hover:text-primary hover:bg-accent"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  All Courses
                </Link>
                <div className="px-3 py-2 space-y-2">
                  {courses.map((course) => (
                    <Link
                      key={course.id}
                      to={course.path}
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={course.image}
                          alt={course.title}
                          fallback="/course-placeholder.jpg"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {course.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Call & Social Section */}
              <div className="pt-4 space-y-3 border-t border-border mt-4">
                {/* Free Consultation Badge - Mobile */}
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm font-semibold">Free Consultation Available</span>
                </div>

                {/* Call Now Button - Mobile */}
                <a
                  href="tel:9103997281"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-md"
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-base font-semibold">Call Now: 9103997281</span>
                </a>

                {/* Social Media - Mobile */}
                <div className="flex items-center justify-center gap-4 pt-2">
                  <a
                    href="https://www.facebook.com/groups/370387843069813/?ref=share&mibextid=NSMWBT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/genagogy_srinagar?igsh=MXUxdTEzZG9pd2JpZQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
