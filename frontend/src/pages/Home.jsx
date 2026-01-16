import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Award,
  BookOpen,
  Target,
  Star,
  TrendingUp,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Instagram,
  ExternalLink,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ImageWithFallback from "@/components/ImageWithFallback";
import Affiliations from "@/components/Affiliations";
import INIFDBanner from "@/components/INIFDBanner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import AwardVideoCard from "../components/AwardVideoCard";

const videos = [
  {
    src: "https://technoglobe.co.in/video/vidhya.mp4?v1",
    title: "Vidhya",
    desc: "",
  },
  {
    src: "https://technoglobe.co.in/video/arjun.mp4?v1",
    title: "Arjun",
    desc: "",
  },
  {
    src: "https://technoglobe.co.in/video/kiku.mp4?v1",
    title: "Kiku",
    desc: "",
  },
  {
    src: "https://technoglobe.co.in/video/delnaz.mp4?v1",
    title: "Delnaz",
    desc: "",
  },
];

const Home = () => {
  // Custom Arrow Components for Testimonials
  const PrevArrow = ({ onClick, className, style }) => {
    if (className?.includes("slick-disabled")) {
      return null;
    }
    return (
      <button
        type="button"
        onClick={onClick}
        className={`testimonial-arrow testimonial-arrow-prev ${
          className || ""
        }`}
        style={style}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
    );
  };

  const NextArrow = ({ onClick, className, style }) => {
    if (className?.includes("slick-disabled")) {
      return null;
    }
    return (
      <button
        type="button"
        onClick={onClick}
        className={`testimonial-arrow testimonial-arrow-next ${
          className || ""
        }`}
        style={style}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    );
  };

  const highlights = [
    {
      icon: Users,
      number: "200,000+",
      label: "Students Trained",
    },
    {
      icon: Award,
      number: "95%",
      label: "Placement Rate",
    },
    {
      icon: BookOpen,
      number: "20+",
      label: "Industry Courses",
    },
    {
      icon: Target,
      number: "100%",
      label: "Practical Learning",
    },
  ];

  const testimonials = [
    {
      name: "Snober",
      role: "Data Science",
      text: "Learning Data Science at Technoglobe has been a fantastic experience. The instructors explain concepts clearly and help us apply them through real-world projects. I feel my skills growing steadily every day.",
      rating: 5,
      image: "../../public/studentTestimonials/Student-2.jpg",
    },
    {
      name: "Nizam-ur-Rehman",
      role: "Web Development",
      text: "I am currently taking the Web Development course at Technoglobe. The faculty are very knowledgeable and guide us through every concept. The hands-on projects make the learning experience practical and fun.",
      rating: 5,
      image: "../../public/studentTestimonials/Student-1.jpg",
    },
    {
      name: "Faizan-ul-Haq",
      role: "Graphic Designing",
      text: "I am currently pursuing Graphic Designing at Technoglobe. The faculty are very encouraging and help me enhance my creativity. The assignments and feedback make learning practical and enjoyable.",
      rating: 5,
      image: "../../public/studentTestimonials/Student-3.jpg",
    },
    {
      name: "Yash Hemrajani",
      role: "Accounting Professional",
      text: "I have completed my Accounting Professional Program from Technoglobe Gopalpura Branch. The faculty supported me well and guided me in my doubts. Provide me best subject guidance and help me out in my interview preparation.",
      rating: 5,
      image: "../../public/studentTestimonials/yash.webp",
    },
    {
      name: "Harsh Garg",
      role: "Digital Marketing",
      text: "I joined the Digital Marketing program with many doubts, but the faculty at Technoglobe have been incredibly supportive throughout. The sessions are engaging, and I feel my skills improving every day.",
      rating: 5,
      image: "../../public/studentTestimonials/harsh.webp",
    },
    {
      name: "Mula Ram",
      role: "Data Analyst",
      text: "I am currently learning Data Analysis at Technoglobe, and the experience has been amazing. The instructors are patient and always ready to help. The practical approach makes learning enjoyable and effective.",
      rating: 5,
      image: "../../public/studentTestimonials/mula.webp",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    adaptiveHeight: true,
    pauseOnHover: false,
    appendDots: (dots) => (
      <div style={{ marginTop: "15px" }}>
        {" "}
        {/* space from stars */}
        <ul
          style={{
            margin: 0,
            padding: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "6px", // smaller
          height: "6px", // smaller
          borderRadius: "50%",
          backgroundColor: "#000", // black
          margin: "0 4px",
        }}
      />
    ),
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section with Enhanced Animations & UI */}
      <section className="relative hero-gradient text-primary-foreground overflow-hidden">
        {/* Enhanced Background with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/hero-image.jpg"
            alt="Students learning"
            className="w-full h-full object-cover mix-blend-overlay"
            fallback="/placeholder.svg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent"></div>
        </div>


        <div className="relative container-max section-padding">
          <div className="max-w-3xl animate-fade-in will-change-[opacity,transform]">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
              style={{ animationDelay: "0.1s" }}
            >
              Shape Your Future with
              <span className="block text-primary-light transform transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_6px_20px_rgba(255,255,255,0.4)] inline-block will-change-transform">
                Technoglobe
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 text-primary-foreground/95 leading-relaxed animate-fade-in drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
              style={{ animationDelay: "0.2s" }}
            >
              Master industry-relevant skills with expert instructors and
              hands-on projects. Your journey to professional success starts
              here.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-lg px-8 py-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 will-change-transform group backdrop-blur-sm"
              >
                <Link to="/courses" className="flex items-center">
                  Explore Courses{" "}
                  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-4 border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent/50 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg will-change-transform"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section with Enhanced Animations */}
      <section className="section-padding bg-primary-light relative overflow-hidden">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center animate-fade-in group will-change-[opacity,transform]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg will-change-transform">
                  <item.icon className="h-8 w-8 transform transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2 transform transition-transform duration-300 group-hover:scale-105 will-change-transform">
                  {item.number}
                </div>
                <div className="text-muted-foreground font-medium transform transition-colors duration-300 group-hover:text-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INIFD Banner Section */}
      <INIFDBanner />

      <Affiliations />

      {/* Testimonials - Modern Premium Design */}
      <section className="section-padding bg-gradient-to-b from-background via-primary-light/5 to-background relative py-20 md:py-24">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-max relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Star className="h-4 w-4 text-primary fill-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Student Reviews
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              What Our Students Say
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Real experiences from students who transformed their careers with
              us
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto px-12 md:px-16 lg:px-20">
            <Slider
              {...{
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 6000,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: <PrevArrow />,
                nextArrow: <NextArrow />,
                pauseOnHover: true,
                cssEase: "ease-in-out",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4 md:px-6">
                  <div className="relative bg-gradient-to-br from-card via-card to-primary-light/5 backdrop-blur-sm border border-border/50 rounded-3xl p-10 md:p-12 mx-auto max-w-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    {/* Decorative Top Accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-t-3xl"></div>

                    {/* Quote Icon - Elegant */}
                    <div className="absolute top-6 right-6 opacity-5">
                      <svg
                        className="w-16 h-16 text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Rating Stars - Top */}
                    <div className="flex justify-center mb-6">
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-foreground/90 mb-10 text-center leading-relaxed text-lg md:text-xl font-light relative z-10 px-2 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Student Info */}
                    <div className="flex flex-col items-center space-y-4 relative z-10 pt-6 border-t border-border/50">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full blur-xl"></div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="relative w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-4 ring-primary/10 ring-offset-2 ring-offset-background"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-2 shadow-lg">
                          <Star className="h-3.5 w-3.5 fill-current" />
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="font-bold text-xl md:text-2xl text-foreground mb-1.5">
                          {testimonial.name}
                        </div>
                        <div className="text-sm md:text-base text-primary font-semibold">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Modern arrow and dot styles */}
        <style jsx>{`
          .slick-dots {
            bottom: -50px;
            display: flex !important;
            justify-content: center;
            align-items: center;
            gap: 10px;
          }

          .slick-dots li {
            width: 10px;
            height: 10px;
            margin: 0;
          }

          .slick-dots li button {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: hsl(var(--muted));
            border: 2px solid transparent;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            padding: 0;
          }

          .slick-dots li.slick-active button {
            background: hsl(var(--primary));
            border-color: hsl(var(--primary));
            width: 32px;
            border-radius: 6px;
            box-shadow: 0 2px 8px hsl(var(--primary) / 0.3);
          }

          .slick-dots li button:hover {
            background: hsl(var(--primary) / 0.5);
            transform: scale(1.1);
          }

          .slick-dots li button:before {
            content: "";
          }

          /* Arrow styling - Modern and Elegant */
          .testimonial-arrow {
            position: absolute !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            z-index: 30 !important;
            width: 48px !important;
            height: 48px !important;
            background: hsl(var(--background)) !important;
            border: 2px solid hsl(var(--border)) !important;
            border-radius: 50% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            cursor: pointer !important;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;
            color: hsl(var(--foreground)) !important;
            backdrop-filter: blur(8px) !important;
          }

          .testimonial-arrow:hover {
            background: hsl(var(--primary)) !important;
            border-color: hsl(var(--primary)) !important;
            color: hsl(var(--primary-foreground)) !important;
            box-shadow: 0 4px 16px hsl(var(--primary) / 0.3) !important;
            transform: translateY(-50%) scale(1.05) !important;
          }

          .testimonial-arrow:active {
            transform: translateY(-50%) scale(0.95) !important;
          }

          .testimonial-arrow-prev {
            left: -12px !important;
          }

          .testimonial-arrow-next {
            right: -12px !important;
          }

          .testimonial-arrow.slick-disabled {
            opacity: 0.3 !important;
            cursor: not-allowed !important;
          }

          .testimonial-arrow:focus {
            outline: 2px solid hsl(var(--primary)) !important;
            outline-offset: 2px !important;
          }

          /* Ensure slider container is properly contained */
          .slick-slider {
            position: relative;
          }

          .slick-list {
            margin: 0;
            padding: 0;
          }

          /* Tablet and mobile arrow positioning */
          @media (max-width: 1024px) {
            .testimonial-arrow-prev {
              left: 4px !important;
            }
            .testimonial-arrow-next {
              right: 4px !important;
            }
          }

          @media (max-width: 640px) {
            .testimonial-arrow {
              width: 36px !important;
              height: 36px !important;
            }
            .testimonial-arrow svg {
              width: 18px !important;
              height: 18px !important;
            }import Reveal from './../components/Reveal';
import FloatingDecor from './../components/FloatingDecor';

          }
        `}</style>
      </section>

      {/* Instagram Feed Section */}
      <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 backdrop-blur-sm">
              <Instagram className="h-4 w-4 text-pink-600" />
              <span className="text-xs font-semibold text-pink-600 uppercase tracking-wider">
                Follow Our Journey
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Latest From Instagram
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay connected with our community and latest updates
            </p>
          </div>

          {/* Instagram Feed Embed Box */}
          <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-white/5 backdrop-blur-md p-0">
            {/* LightWidget Script */}
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>

            <iframe
              src="//lightwidget.com/widgets/318ae46a2bea5de9a3c4887e0c1d7cf7.html"
              className="w-full h-[500px] border-none lightwidget-widget"
              scrolling="no"
              allowTransparency={true}
            ></iframe>
          </div>

          {/* Follow Button */}
          <div className="text-center mt-10">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a
                href="https://www.instagram.com/genagogy_srinagar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="h-5 w-5" />
                Follow @genagogy_srinagar
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-light/5 to-background"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"></div>
      </div>

      {/* Homepage Video Section */}
      <section className="container-max my-8 px-4 sm:px-6">
        <h4 className="text-xl md:text-2xl font-bold mb-6 text-foreground text-center">
          Video Highlights
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {videos.map((v, idx) => (
            <AwardVideoCard
              key={idx}
              src={v.src}
              title={v.title}
              description={v.desc}
            />
          ))}
        </div>
      </section>

      {/* Premium Tech Blogs Section - After Testimonials */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        {/* Decorative Background Elements - More Subtle */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="container-max relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Trending Insights
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Latest Tech Insights & Industry Trends
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with cutting-edge technology insights,
              industry trends, and expert knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Blog 1 - AI & Machine Learning */}
            <Card
              className="group relative rounded-2xl border border-border/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01] hover:-translate-y-0.5 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden animate-fade-in will-change-transform"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/8 transition-all duration-500 rounded-2xl"></div>
              <CardContent className="relative p-0">
                {/* HD Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=90"
                    alt="AI & Machine Learning"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold">
                      AI & ML
                    </span>
                  </div>
                  <Sparkles className="absolute top-4 right-4 h-5 w-5 text-primary-foreground drop-shadow-lg" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>Artificial Intelligence</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    The Future of AI in Education & Learning
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    Discover how artificial intelligence is revolutionizing
                    learning experiences, personalizing education, and shaping
                    the future of educational technology.
                  </p>
                  <Link
                    to="/blog/ai-education"
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all duration-300"
                  >
                    Read Article{" "}
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Blog 2 - Digital Marketing */}
            <Card
              className="group relative rounded-2xl border border-border/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01] hover:-translate-y-0.5 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden animate-fade-in will-change-transform"
              style={{ animationDelay: "0.15s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/8 transition-all duration-500 rounded-2xl"></div>
              <CardContent className="relative p-0">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=90"
                    alt="Digital Marketing"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold">
                      Marketing
                    </span>
                  </div>
                  <Sparkles className="absolute top-4 right-4 h-5 w-5 text-primary-foreground drop-shadow-lg" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>Digital Marketing</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    Digital Marketing Strategies for 2025
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    Master the latest digital marketing trends, SEO techniques,
                    social media strategies, and content marketing approaches
                    that drive results.
                  </p>
                  <Link
                    to="/blog/digital-marketing-2025"
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all duration-300"
                  >
                    Read Article{" "}
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Blog 3 - Graphic Designing */}
            <Card
              className="group relative rounded-2xl border border-border/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01] hover:-translate-y-0.5 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden animate-fade-in will-change-transform"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/8 transition-all duration-500 rounded-2xl"></div>
              <CardContent className="relative p-0">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=90"
                    alt="Graphic Designing"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold">
                      Design
                    </span>
                  </div>
                  <Sparkles className="absolute top-4 right-4 h-5 w-5 text-primary-foreground drop-shadow-lg" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>Graphic Design</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    Modern Graphic Design Trends & Tools
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    Explore cutting-edge design trends, creative techniques, and
                    powerful tools that are shaping the future of visual
                    communication and branding.
                  </p>
                  <Link
                    to="/blog/graphic-design-trends"
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all duration-300"
                  >
                    Read Article{" "}
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Blog 4 - Data Science */}
            <Card
              className="group relative rounded-2xl border border-border/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01] hover:-translate-y-0.5 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden animate-fade-in will-change-transform"
              style={{ animationDelay: "0.25s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/8 transition-all duration-500 rounded-2xl"></div>
              <CardContent className="relative p-0">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=90"
                    alt="Data Science"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold">
                      Analytics
                    </span>
                  </div>
                  <Sparkles className="absolute top-4 right-4 h-5 w-5 text-primary-foreground drop-shadow-lg" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>Data Science</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    Big Data Analytics & Business Intelligence
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    Learn how data science and analytics are transforming
                    businesses, driving decisions, and creating competitive
                    advantages in the digital economy.
                  </p>
                  <Link
                    to="/blog/data-science-analytics"
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all duration-300"
                  >
                    Read Article{" "}
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Blog 5 - Web Development */}
            <Card
              className="group relative rounded-2xl border border-border/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01] hover:-translate-y-0.5 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden animate-fade-in will-change-transform"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/8 transition-all duration-500 rounded-2xl"></div>
              <CardContent className="relative p-0">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&q=90"
                    alt="Web Development"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold">
                      Web Dev
                    </span>
                  </div>
                  <Sparkles className="absolute top-4 right-4 h-5 w-5 text-primary-foreground drop-shadow-lg" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>Web Development</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    Next-Gen Web Development Frameworks
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    Discover the latest frameworks, libraries, and technologies
                    that are revolutionizing web development and creating
                    exceptional user experiences.
                  </p>
                  <Link
                    to="/blog/web-development-frameworks"
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all duration-300"
                  >
                    Read Article{" "}
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Blog 6 - Cloud Computing */}
            <Card
              className="group relative rounded-2xl border border-border/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01] hover:-translate-y-0.5 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden animate-fade-in will-change-transform"
              style={{ animationDelay: "0.35s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/8 transition-all duration-500 rounded-2xl"></div>
              <CardContent className="relative p-0">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=90"
                    alt="Cloud Computing"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold">
                      Cloud
                    </span>
                  </div>
                  <Sparkles className="absolute top-4 right-4 h-5 w-5 text-primary-foreground drop-shadow-lg" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>Cloud Computing</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    Cloud Infrastructure & Scalability
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    Understand cloud computing platforms, serverless
                    architecture, and scalable solutions that power modern
                    applications and businesses.
                  </p>
                  <Link
                    to="/blog/cloud-computing"
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all duration-300"
                  >
                    Read Article{" "}
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second Row of Blogs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
            {/* Blog 7 - Cybersecurity */}
            <Card
              className="group relative rounded-2xl border border-border/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01] hover:-translate-y-0.5 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden animate-fade-in will-change-transform"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/8 transition-all duration-500 rounded-2xl"></div>
              <CardContent className="relative p-0">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&q=90"
                    alt="Cybersecurity"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold">
                      Security
                    </span>
                  </div>
                  <Sparkles className="absolute top-4 right-4 h-5 w-5 text-primary-foreground drop-shadow-lg" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>Cybersecurity</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    Essential Cybersecurity Practices
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    Learn critical cybersecurity strategies, threat prevention,
                    and best practices to protect digital assets and maintain
                    secure systems.
                  </p>
                  <Link
                    to="/blog/cybersecurity-practices"
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all duration-300"
                  >
                    Read Article{" "}
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Blog 8 - Mobile App Development */}
            <Card
              className="group relative rounded-2xl border border-border/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01] hover:-translate-y-0.5 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden animate-fade-in will-change-transform"
              style={{ animationDelay: "0.45s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/8 transition-all duration-500 rounded-2xl"></div>
              <CardContent className="relative p-0">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=90"
                    alt="Mobile App Development"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold">
                      Mobile
                    </span>
                  </div>
                  <Sparkles className="absolute top-4 right-4 h-5 w-5 text-primary-foreground drop-shadow-lg" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>App Development</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    Mobile App Development Mastery
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    Master iOS and Android development, cross-platform
                    frameworks, and modern mobile app design principles for
                    creating exceptional user experiences.
                  </p>
                  <Link
                    to="/blog/mobile-app-development"
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all duration-300"
                  >
                    Read Article{" "}
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Blog 9 - UI/UX Design */}
            <Card
              className="group relative rounded-2xl border border-border/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01] hover:-translate-y-0.5 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden animate-fade-in will-change-transform"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/8 transition-all duration-500 rounded-2xl"></div>
              <CardContent className="relative p-0">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop&q=90"
                    alt="UI/UX Design"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold">
                      UI/UX
                    </span>
                  </div>
                  <Sparkles className="absolute top-4 right-4 h-5 w-5 text-primary-foreground drop-shadow-lg" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>UI/UX Design</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    User Experience Design Excellence
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    Explore user-centered design principles, interaction
                    patterns, and UX research methods that create intuitive and
                    engaging digital experiences.
                  </p>
                  <Link
                    to="/blog/ui-ux-design"
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all duration-300"
                  >
                    Read Article{" "}
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Animations */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in will-change-[opacity,transform]"
            style={{ animationDelay: "0.1s" }}
          >
            Ready to Transform Your Career?
          </h2>
          <p
            className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in will-change-[opacity,transform]"
            style={{ animationDelay: "0.2s" }}
          >
            Join thousands of successful professionals who started their journey
            at Technoglobe.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="text-lg px-8 py-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl will-change-transform group animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Link to="/contact" className="flex items-center">
              Get Started Today{" "}
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
