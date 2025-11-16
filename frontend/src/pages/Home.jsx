import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, BookOpen, Target, Star, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ImageWithFallback from "@/components/ImageWithFallback";
import Affiliations from "@/components/Affiliations";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
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
      name: "Yash Hemrajani",
      role: "Accounting Professional",
      text: "I have completed my Accounting Professional Program from Technoglobe Gopalpura Branch. The faculty supported me well and guided me in my doubts. Provide me best subject guidance and help me out in my interview preparation.",
      rating: 5,
      image: "../../public/studentTestimonials/yash.webp",
    },
    {
      name: "Nizam-ur-Rehman",
      role: "Web Development",
      text: "I am currently taking the Web Development course at Technoglobe. The faculty are very knowledgeable and guide us through every concept. The hands-on projects make the learning experience practical and fun.",
      rating: 5,
      image: "../../public/studentTestimonials/Student-1.jpg",
    },
    {
      name: "Harsh Garg",
      role: "Digital Marketing",
      text: "I joined the Digital Marketing program with many doubts, but the faculty at Technoglobe have been incredibly supportive throughout. The sessions are engaging, and I feel my skills improving every day.",
      rating: 5,
      image: "../../public/studentTestimonials/harsh.webp",
    },
    {
      name: "Faizan-ul-Haq",
      role: "Graphic Designing",
      text: "I am currently pursuing Graphic Designing at Technoglobe. The faculty are very encouraging and help me enhance my creativity. The assignments and feedback make learning practical and enjoyable.",
      rating: 5,
      image: "../../public/studentTestimonials/Student-3.jpg",
    },
    {
      name: "Mula Ram",
      role: "Data Analyst",
      text: "I am currently learning Data Analysis at Technoglobe, and the experience has been amazing. The instructors are patient and always ready to help. The practical approach makes learning enjoyable and effective.",
      rating: 5,
      image: "../../public/studentTestimonials/mula.webp",
    },
    {
      name: "Snober",
      role: "Data Science",
      text: "Learning Data Science at Technoglobe has been a fantastic experience. The instructors explain concepts clearly and help us apply them through real-world projects. I feel my skills growing steadily every day.",
      rating: 5,
      image: "../../public/studentTestimonials/Student-2.jpg",
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
    <div className="min-h-screen">
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]" style={{ animationDelay: '0.1s' }}>
              Shape Your Future with
              <span className="block text-primary-light transform transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_6px_20px_rgba(255,255,255,0.4)] inline-block will-change-transform">
                Genagogy
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/95 leading-relaxed animate-fade-in drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]" style={{ animationDelay: '0.2s' }}>
              Master industry-relevant skills with expert instructors and
              hands-on projects. Your journey to professional success starts
              here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-lg px-8 py-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 will-change-transform group backdrop-blur-sm"
              >
                <Link to="/courses" className="flex items-center">
                  Explore Courses <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
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
      <section className="section-padding bg-primary-light">
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

      <Affiliations />

      {/* Testimonials with Enhanced Animations */}
      <section className="section-padding bg-gradient-subtle relative overflow-hidden">
        <div className="container-max relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground animate-fade-in will-change-[opacity,transform]">
            What Our Students Say
          </h2>

          <Slider
            {...{
              dots: true,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 8500, // enough reading time
              speed: 1500, // silky transition
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              pauseOnHover: false,
              cssEase: "cubic-bezier(0.65, 0, 0.35, 1)", // natural ease
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="relative bg-card/60 backdrop-blur-md border border-border/40 rounded-2xl p-8 mx-auto max-w-2xl shadow-xl flex flex-col items-center min-h-[420px] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl will-change-transform group">
                  <p className="text-muted-foreground mb-6 italic text-center leading-relaxed flex-1 transform transition-all duration-300 group-hover:text-foreground/90">
                    "{testimonial.text}"
                  </p>

                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mb-4 border-2 border-primary shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg will-change-transform"
                  />

                  <div className="text-center">
                    <div className="font-semibold text-lg text-foreground transform transition-transform duration-300 group-hover:scale-105 will-change-transform">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2 transform transition-colors duration-300 group-hover:text-foreground">
                      {testimonial.role}
                    </div>
                    <div className="flex justify-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-primary text-primary drop-shadow-sm transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 will-change-transform"
                          style={{ transitionDelay: `${i * 0.05}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Floating gradient glow for depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary/5 to-transparent blur-3xl pointer-events-none"></div>

        {/* Enhanced animated dots */}
        <style jsx>{`
          .slick-dots {
            bottom: -35px;
            display: flex !important;
            justify-content: center;
            align-items: center;
            gap: 8px;
          }

          .slick-dots li {
            width: 8px;
            height: 8px;
            margin: 0;
          }

          .slick-dots li button {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.4);
            transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
          }

          .slick-dots li.slick-active button {
            background: black;
            animation: stretchDot 0.8s ease forwards;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
          }

          .slick-dots li button:before {
            content: "";
          }

          @keyframes stretchDot {
            0% {
              transform: scaleX(1);
              border-radius: 50%;
            }
            30% {
              transform: scaleX(2) scaleY(0.7);
              border-radius: 9999px;
            }
            60% {
              transform: scaleX(0.9) scaleY(1.1);
            }
            100% {
              transform: scale(1);
              border-radius: 50%;
            }
          }
        `}</style>
      </section>

      {/* Premium Tech Blogs Section - After Testimonials */}
      <section className="section-padding bg-gradient-to-b from-background via-primary-light/10 to-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="container-max relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Trending Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              Latest Tech Insights & Industry Trends
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with cutting-edge technology insights, industry trends, and expert knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Blog 1 - AI & Machine Learning */}
            <Card className="group relative rounded-2xl border border-border/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 bg-gradient-to-br from-background via-background to-primary-light/5 overflow-hidden animate-fade-in will-change-transform" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/8 group-hover:to-primary/12 transition-all duration-500 rounded-2xl"></div>
              <CardContent className="relative p-0">
                {/* HD Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=90"
                    alt="AI & Machine Learning"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold">AI & ML</span>
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
                    Discover how artificial intelligence is revolutionizing learning experiences, personalizing education, and shaping the future of educational technology.
                  </p>
                  <Link to="/courses" className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all duration-300">
                    Read Article <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Blog 2 - Digital Marketing */}
            <Card className="group relative rounded-2xl border border-border/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 bg-gradient-to-br from-background via-background to-primary-light/5 overflow-hidden animate-fade-in will-change-transform" style={{ animationDelay: '0.15s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/8 group-hover:to-primary/12 transition-all duration-500 rounded-2xl"></div>
              <CardContent className="relative p-0">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=90"
                    alt="Digital Marketing"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold">Marketing</span>
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
                    Master the latest digital marketing trends, SEO techniques, social media strategies, and content marketing approaches that drive results.
                  </p>
                  <Link to="/courses" className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all duration-300">
                    Read Article <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Blog 3 - Graphic Designing */}
            <Card className="group relative rounded-2xl border border-border/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 bg-gradient-to-br from-background via-background to-primary-light/5 overflow-hidden animate-fade-in will-change-transform" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/8 group-hover:to-primary/12 transition-all duration-500 rounded-2xl"></div>
              <CardContent className="relative p-0">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=90"
                    alt="Graphic Designing"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold">Design</span>
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
                    Explore cutting-edge design trends, creative techniques, and powerful tools that are shaping the future of visual communication and branding.
                  </p>
                  <Link to="/courses" className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all duration-300">
                    Read Article <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Blog 4 - Data Science */}
            <Card className="group relative rounded-2xl border border-border/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 bg-gradient-to-br from-background via-background to-primary-light/5 overflow-hidden animate-fade-in will-change-transform" style={{ animationDelay: '0.25s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/8 group-hover:to-primary/12 transition-all duration-500 rounded-2xl"></div>
              <CardContent className="relative p-0">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=90"
                    alt="Data Science"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold">Analytics</span>
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
                    Learn how data science and analytics are transforming businesses, driving decisions, and creating competitive advantages in the digital economy.
                  </p>
                  <Link to="/courses" className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all duration-300">
                    Read Article <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Blog 5 - Web Development */}
            <Card className="group relative rounded-2xl border border-border/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 bg-gradient-to-br from-background via-background to-primary-light/5 overflow-hidden animate-fade-in will-change-transform" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/8 group-hover:to-primary/12 transition-all duration-500 rounded-2xl"></div>
              <CardContent className="relative p-0">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&q=90"
                    alt="Web Development"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold">Web Dev</span>
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
                    Discover the latest frameworks, libraries, and technologies that are revolutionizing web development and creating exceptional user experiences.
                  </p>
                  <Link to="/courses" className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all duration-300">
                    Read Article <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Blog 6 - Cloud Computing */}
            <Card className="group relative rounded-2xl border border-border/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 bg-gradient-to-br from-background via-background to-primary-light/5 overflow-hidden animate-fade-in will-change-transform" style={{ animationDelay: '0.35s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/8 group-hover:to-primary/12 transition-all duration-500 rounded-2xl"></div>
              <CardContent className="relative p-0">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=90"
                    alt="Cloud Computing"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold">Cloud</span>
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
                    Understand cloud computing platforms, serverless architecture, and scalable solutions that power modern applications and businesses.
                  </p>
                  <Link to="/courses" className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all duration-300">
                    Read Article <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second Row of Blogs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
            {/* Blog 7 - Cybersecurity */}
            <Card className="group relative rounded-2xl border border-border/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 bg-gradient-to-br from-background via-background to-primary-light/5 overflow-hidden animate-fade-in will-change-transform" style={{ animationDelay: '0.4s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/8 group-hover:to-primary/12 transition-all duration-500 rounded-2xl"></div>
              <CardContent className="relative p-0">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&q=90"
                    alt="Cybersecurity"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold">Security</span>
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
                    Learn critical cybersecurity strategies, threat prevention, and best practices to protect digital assets and maintain secure systems.
                  </p>
                  <Link to="/courses" className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all duration-300">
                    Read Article <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Blog 8 - Mobile App Development */}
            <Card className="group relative rounded-2xl border border-border/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 bg-gradient-to-br from-background via-background to-primary-light/5 overflow-hidden animate-fade-in will-change-transform" style={{ animationDelay: '0.45s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/8 group-hover:to-primary/12 transition-all duration-500 rounded-2xl"></div>
              <CardContent className="relative p-0">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=90"
                    alt="Mobile App Development"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold">Mobile</span>
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
                    Master iOS and Android development, cross-platform frameworks, and modern mobile app design principles for creating exceptional user experiences.
                  </p>
                  <Link to="/courses" className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all duration-300">
                    Read Article <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Blog 9 - UI/UX Design */}
            <Card className="group relative rounded-2xl border border-border/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 bg-gradient-to-br from-background via-background to-primary-light/5 overflow-hidden animate-fade-in will-change-transform" style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/8 group-hover:to-primary/12 transition-all duration-500 rounded-2xl"></div>
              <CardContent className="relative p-0">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop&q=90"
                    alt="UI/UX Design"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold">UI/UX</span>
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
                    Explore user-centered design principles, interaction patterns, and UX research methods that create intuitive and engaging digital experiences.
                  </p>
                  <Link to="/courses" className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all duration-300">
                    Read Article <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in will-change-[opacity,transform]" style={{ animationDelay: '0.1s' }}>
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in will-change-[opacity,transform]" style={{ animationDelay: '0.2s' }}>
            Join thousands of successful professionals who started their journey
            at Genagogy.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="text-lg px-8 py-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl will-change-transform group animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <Link to="/contact" className="flex items-center">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
