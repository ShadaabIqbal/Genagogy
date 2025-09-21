import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/logo.svg" 
                alt="Genagogy Logo" 
                className="h-14 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering students with industry-relevant skills and knowledge to succeed in their careers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/staff-login" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Staff Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Popular Courses</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80 text-sm">Web Development</li>
              <li className="text-primary-foreground/80 text-sm">Data Science</li>
              <li className="text-primary-foreground/80 text-sm">Digital Marketing</li>
              <li className="text-primary-foreground/80 text-sm">UI/UX Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Education Street<br />
                  Learning District<br />
                  City, State 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">info@genagogy.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Genagogy Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
