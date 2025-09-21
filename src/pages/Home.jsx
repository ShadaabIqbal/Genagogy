import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, BookOpen, Target, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const highlights = [
    {
      icon: Users,
      number: "500+",
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

  const partners = [
    "TechCorp", "InnovateLab", "FutureWorks", "SkillForge", "LearnHub", "ProTech",
    "DataFlow", "CloudSync", "DevCraft", "CodeForge", "TechNest", "InnovateHub"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Full Stack Developer",
      text: "Genagogy transformed my career. The practical approach and industry connections helped me land my dream job.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Data Analyst",
      text: "The instructors are exceptional and the curriculum is always up-to-date with industry standards.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "UI/UX Designer",
      text: "Best investment in my career. The hands-on projects prepared me for real-world challenges.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Students learning"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative container-max section-padding">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Shape Your Future with
              <span className="block text-primary-light">Genagogy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Master industry-relevant skills with expert instructors and hands-on projects. 
              Your journey to professional success starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-4">
                <Link to="/courses">
                  Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-primary-light">
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
                <div className="text-3xl font-bold text-primary mb-2">{item.number}</div>
                <div className="text-muted-foreground font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Trusted by Industry Leaders
          </h2>
          <div className="relative overflow-hidden">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
            
            {/* Infinite scrolling container */}
            <div className="flex animate-infinite-scroll space-x-8 items-center">
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="bg-card border border-border rounded-xl px-8 py-6 shadow-soft flex-shrink-0 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <span className="text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">{partner}</span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="bg-card border border-border rounded-xl px-8 py-6 shadow-soft flex-shrink-0 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <span className="text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What Our Students Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of successful professionals who started their journey at Genagogy.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-4">
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
