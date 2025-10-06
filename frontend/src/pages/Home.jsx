import { Link } from "react-router-dom";
import FranchiseBadge from "@/components/FranchiseBadge";
import { useState, useEffect } from "react";
import { ArrowRight, Users, Award, BookOpen, Target, Star } from "lucide-react";
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
      image: "../../public/studentTestimonials/yash.webp", // replace with your images
    },
    {
      name: "Harsh Garg",
      role: "Digital Marketing",
      text: "I joined Digital Marketing program with list many if and buts running in my mind. But the counselor here in Technoglobe supported throughout my program journey. As well in my PD & PI sessions. Finally I’m placed in a good MNC with smart package. I really recommend my friend and colleague to join Technoglobe for career transformation.",
      rating: 5,
      image: "../../public/studentTestimonials/harsh.webp",
    },
    {
      name: "Mula Ram",
      role: "Data Analyst",
      text: "The progress my son has made using this platform has been incredible. He no longer feels stressed about learning new material, and he's tackling challenges with a positive attitude.",
      rating: 5,
      image: "../../public/studentTestimonials/mula.webp",
    },
    {
      name: "Tanushree",
      role: "Graphic Designer",
      text: "The progress my son has made using this platform has been incredible. He no longer feels stressed about learning new material, and he's tackling challenges with a positive attitude.",
      rating: 5,
      image: "../../public/studentTestimonials/tanushree.webp",
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
      {/* Hero Section */}
      <section className="relative hero-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/hero-image.jpg"
            alt="Students learning"
            className="w-full h-full object-cover mix-blend-overlay"
            fallback="/placeholder.svg"
          />
        </div>
        <div className="relative container-max section-padding">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Shape Your Future with
              <span className="block text-primary-light">Genagogy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Master industry-relevant skills with expert instructors and
              hands-on projects. Your journey to professional success starts
              here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-lg px-8 py-4"
              >
                <Link to="/courses">
                  Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}

      <section className="section-padding bg-primary-light">
        <FranchiseBadge />
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {item.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Affiliations />

      {/* Testimonials */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What Our Students Say
          </h2>

          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-card/50 backdrop-blur-sm border-border/50 rounded-xl p-6 mx-auto max-w-2xl shadow-lg flex flex-col items-center min-h-[400px]">
                  <p className="text-muted-foreground mb-6 italic text-center flex-1">
                    "{testimonial.text}"
                  </p>

                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mb-4 border-2 border-primary"
                  />

                  <div className="text-center">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {testimonial.role}
                    </div>
                    <div className="flex justify-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Custom small dots styling */}
        <style jsx>{`
          .slick-dots {
            bottom: -15px;
          }
          .slick-dots li button:before {
            font-size: 8px;
            color: black;
            opacity: 1;
          }
          .slick-dots li.slick-active button:before {
            color: black;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of successful professionals who started their journey
            at Genagogy.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="text-lg px-8 py-4"
          >
            <Link to="/contact">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
