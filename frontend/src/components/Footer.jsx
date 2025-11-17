import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/Genagogy_Logo.png"
                alt="Genagogy Logo"
                className="h-[100px] w-auto filter brightness-0"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering students with industry-relevant skills and knowledge to
              succeed in their careers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/groups/370387843069813/?ref=share&mibextid=NSMWBT"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
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
                  Opposite Pohru Crossing Nowgam Bypass, NH 1, Srinagar,
                  J&K-190015
                  <a
                    href="https://www.google.com/maps/dir//2RGJ%2BVRC+Vitasta+School+of+Law+and+Humanities,+Pohru+Crossing+Nowgam+Bye+Pass,+NH+1,+A,+Nowgam,+Srinagar,+Jammu+and+Kashmir+190015/@34.0272014,74.829342,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x38e18ef48a66c6a5:0x33ccf3bb0e71f387!2m2!1d74.8319608!2d34.0271714!3e0?entry=ttu"
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
            © 2025 Genagogy Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
