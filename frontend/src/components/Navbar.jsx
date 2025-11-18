import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";
import { Card, CardContent } from "@/components/ui/card";

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
    img.src = '/Genagogy_Logo.png';
    img.loading = 'eager';
    
    // Force immediate load
    if (img.complete) {
      // Image already cached
    } else {
      img.onload = () => {
        // Image loaded successfully
      };
    }
    
    // Also trigger CSS preload
    const preloadDiv = document.createElement('div');
    preloadDiv.className = 'logo-preload';
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
    { name: "Staff Login", path: "/staff-login" },
  ];

  const courses = [
    {
      id: 1,
      title: "Digital Marketing",
      description: "Learn end-to-end digital marketing: SEO, SEM, social media, content, and analytics.",
      image: "/courses/digital_marketing.jpeg",
      path: "/courses/1",
    },
    {
      id: 2,
      title: "Video Editing",
      description: "Edit compelling videos with professional workflows, audio, motion, and color grading.",
      image: "/courses/video_editing.webp",
      path: "/courses/2",
    },
    {
      id: 3,
      title: "Graphic Designing",
      description: "Master design fundamentals, branding, and modern tools for print and digital.",
      image: "/courses/graphic_designing.webp",
      path: "/courses/3",
    },
    {
      id: 4,
      title: "Web Development (MERN)",
      description: "Build full-stack web apps with MongoDB, Express, React, and Node.js.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&q=80",
      path: "/courses/4",
    },
    {
      id: 5,
      title: "Data Science",
      description: "Apply statistics, Python, and ML to analyze data and build models.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80",
      path: "/courses/5",
    },
    {
      id: 6,
      title: "Data Analytics",
      description: "Turn raw data into insights using SQL, BI tools, and dashboards.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80",
      path: "/courses/6",
    },
    {
      id: 7,
      title: "Professional Accounting",
      description: "Core accounting principles, taxation, and tools for modern finance roles.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&q=80",
      path: "/courses/7",
    },
    {
      id: 8,
      title: "Ethical Hacking & Cyber Security",
      description: "Security fundamentals, network defense, and ethical hacking methodologies.",
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
        <div className="flex justify-between items-center min-h-[80px] py-3">
          {/* Enhanced Logo - Optimized Loading with Layout Shift Prevention */}
          <Link to="/" className="flex items-center space-x-3 mr-8 md:mr-12">
            <div className="relative h-16 md:h-20 lg:h-24 w-auto min-w-[64px] md:min-w-[80px] lg:min-w-[96px] flex-shrink-0">
              <ImageWithFallback
                src="/Genagogy_Logo.png"
                alt="Genagogy Logo"
                className="h-16 md:h-20 lg:h-24 w-auto object-contain brightness-120 contrast-120 saturate-120 drop-shadow-[0_4px_12px_rgba(59,130,246,0.3)] filter"
                style={{
                  imageRendering: "crisp-edges",
                  WebkitImageRendering: "crisp-edges",
                  msInterpolationMode: "nearest-neighbor",
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
                  className={`font-medium transition-all duration-300 will-change-[color,transform] transform hover:scale-105 ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
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
                    className="absolute top-full right-0 mt-2 w-[920px] max-w-[95vw] max-h-[520px] overflow-y-auto p-5 bg-background border border-border/60 shadow-2xl rounded-2xl
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

            {/* Collaborations Integrated in Navbar - Always Visible */}
            <div className="flex items-center gap-2 ml-6 pl-6 border-l border-primary/20">
              {/* Technoglobe Badge - HD with Hover Animations */}
              <a
                href="https://technoglobe.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-primary/25 bg-primary/8 hover:bg-primary/15 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg will-change-transform backdrop-blur-sm overflow-visible"
              >
                {/* Glow Effect - Only on Hover */}
                <div className="absolute -inset-1 bg-primary/30 rounded-md opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></div>

                {/* HD Logo - Enhanced Visibility */}
                <div className="relative transform transition-all duration-300 group-hover:scale-110 will-change-transform">
                  <ImageWithFallback
                    src="/technoglobe_logo.png"
                    alt="Technoglobe"
                    fallback="/placeholder.svg"
                    className="w-9 h-9 object-contain brightness-115 contrast-115 saturate-115 drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] filter"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitImageRendering: "crisp-edges",
                      msInterpolationMode: "nearest-neighbor",
                    }}
                  />
                </div>
                <div className="hidden xl:block">
                  <div className="text-[10px] font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    Technoglobe
                  </div>
                  <div className="text-[9px] text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300 leading-tight">
                    Partner
                  </div>
                </div>
                <ArrowRight className="h-3 w-3 text-primary/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" />
              </a>

              {/* INIFD Badge - HD with Hover Animations */}
              <a
                href="https://nifd.net.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-primary/25 bg-primary/8 hover:bg-primary/15 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg will-change-transform backdrop-blur-sm overflow-visible"
              >
                {/* Glow Effect - Only on Hover */}
                <div className="absolute -inset-1 bg-primary/30 rounded-md opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></div>

                {/* HD Logo - Enhanced Visibility */}
                <div className="relative transform transition-all duration-300 group-hover:scale-110 will-change-transform">
                  <ImageWithFallback
                    src="/inifd_logo.png"
                    alt="INIFD"
                    fallback="/placeholder.svg"
                    className="w-9 h-9 object-contain brightness-115 contrast-115 saturate-115 drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] filter"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitImageRendering: "crisp-edges",
                      msInterpolationMode: "nearest-neighbor",
                    }}
                  />
                </div>
                <div className="hidden xl:block">
                  <div className="text-[10px] font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    INIFD
                  </div>
                  <div className="text-[9px] text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300 leading-tight">
                    Design
                  </div>
                </div>
                <ArrowRight className="h-3 w-3 text-primary/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" />
              </a>
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
              {/* Mobile Collaborations - Always Visible */}
              <div className="pt-2 space-y-2 border-t border-border mt-2">
                <a
                  href="https://technoglobe.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-primary/5 border border-primary/20"
                >
                  <ImageWithFallback
                    src="/technoglobe_logo.png"
                    alt="Technoglobe"
                    fallback="/placeholder.svg"
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-sm font-medium text-foreground">
                    Technoglobe Partner
                  </span>
                </a>
                <a
                  href="https://nifd.net.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-primary/5 border border-primary/20"
                >
                  <ImageWithFallback
                    src="/inifd_logo.png"
                    alt="INIFD"
                    fallback="/placeholder.svg"
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-sm font-medium text-foreground">
                    INIFD Design
                  </span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
