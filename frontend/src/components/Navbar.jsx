import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";
import { Card, CardContent } from "@/components/ui/card";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
    { name: "Staff Login", path: "/staff-login" },
  ];

  return (
    <nav className="bg-background/98 backdrop-blur-md border-b border-primary/10 sticky top-0 z-50 shadow-sm">
      <div className="container-max">
        {/* Main Navbar Row */}
        <div className="flex justify-between items-center min-h-[80px] py-3">
          {/* Enhanced Logo with Professional Animations */}
          <Link
            to="/"
            className="flex items-center space-x-3 group relative will-change-transform mr-8 md:mr-12"
          >
            <div className="relative transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 will-change-transform">
              {/* Glow effect on hover */}
              <div className="absolute -inset-2 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10"></div>
              <ImageWithFallback
                src="/Genagogy_Logo.png"
                alt="Genagogy Logo"
                className="h-16 md:h-20 lg:h-24 w-auto object-contain brightness-120 contrast-120 saturate-120 drop-shadow-[0_4px_12px_rgba(59,130,246,0.3)] filter"
                style={{ 
                  imageRendering: 'crisp-edges', 
                  WebkitImageRendering: 'crisp-edges',
                  msInterpolationMode: 'nearest-neighbor',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}
                fallback="/placeholder.svg"
              />
            </div>
            {/* Logo Text Enhancement - Making it readable */}
            <div className="hidden sm:block">
              <div className="text-xs md:text-sm font-bold text-foreground/90 group-hover:text-primary transition-colors duration-300 leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                Professional Skill Development
              </div>
              <div className="text-[10px] md:text-xs text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300 leading-tight">
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
            </div>

            {/* Collaborations Integrated in Navbar - Only on Home */}
            {location.pathname === '/' && (
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
                        imageRendering: 'crisp-edges', 
                        WebkitImageRendering: 'crisp-edges',
                        msInterpolationMode: 'nearest-neighbor'
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
                        imageRendering: 'crisp-edges', 
                        WebkitImageRendering: 'crisp-edges',
                        msInterpolationMode: 'nearest-neighbor'
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
            )}
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
              {/* Mobile Collaborations */}
              {location.pathname === '/' && (
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
                    <span className="text-sm font-medium text-foreground">Technoglobe Partner</span>
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
                    <span className="text-sm font-medium text-foreground">INIFD Design</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
