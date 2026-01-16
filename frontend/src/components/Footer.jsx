import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";

const Footer = () => {
  // Preload footer logo for instant loading on navigation
  useEffect(() => {
    const img = new Image();
    img.src = "/affliations/technoglobe_srinagar_logo.png";
    img.loading = "eager";
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand - Enhanced Logo Section */}
          <div className="space-y-4">
            <Link to="/" className="block group">
              <div className="relative inline-block">
                {/* Enhanced container with subtle background and border */}
                <div className="relative h-[90px] w-auto min-w-[140px] flex-shrink-0 bg-primary rounded-lg p-3 border border-primary-foreground/10 shadow-lg group-hover:shadow-xl group-hover:border-primary-foreground/20 transition-all duration-300 overflow-hidden">
                  {/* Background gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/5 via-transparent to-primary-foreground/5 opacity-50"></div>

                  <div className="relative h-full w-full flex items-center justify-center">
                    <ImageWithFallback
                      src="/affliations/technoglobe_srinagar_logo.png"
                      alt="Technoglobe Logo"
                      className="h-full w-auto max-h-[140px] object-contain filter brightness-0 invert transition-transform duration-300 group-hover:scale-105"
                      style={{
                        display: "block",
                        imageRendering: "auto",
                        WebkitImageRendering: "auto",
                      }}
                      fallback="/placeholder.svg"
                      loading="eager"
                      fetchpriority="high"
                      decoding="sync"
                    />
                  </div>

                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 rounded-lg bg-primary-foreground/0 group-hover:bg-primary-foreground/5 transition-colors duration-300 pointer-events-none"></div>
                </div>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering students with industry-relevant skills and knowledge to
              succeed in their careers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/groups/370387843069813/?ref=share&mibextid=NSMWBT"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                target="_blank"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/genagogy_srinagar?igsh=MXUxdTEzZG9pd2JpZQ=="
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                target="_blank"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Our Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/staff-login"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Staff Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Popular Courses</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80 text-sm">
                Digital Marketing
              </li>
              <li className="text-primary-foreground/80 text-sm">
                Video Editing
              </li>
              <li className="text-primary-foreground/80 text-sm">
                Web Development
              </li>
              <li className="text-primary-foreground/80 text-sm">
                Data Science
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Behind Unacademy centre, Parraypora, Srinagar.
                  <a
                    href="https://www.google.com/maps/search/Behind+Unacademy+centre,+Parraypora,+Srinagar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-primary-foreground hover:underline text-xs"
                  >
                    (Get Directions)
                  </a>
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  9103997281
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  contactgenagogy@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Technoglobe Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
