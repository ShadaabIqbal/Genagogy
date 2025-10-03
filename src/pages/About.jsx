import { Target, Eye, Users, Award, BookOpen, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ImageWithFallback from "@/components/ImageWithFallback";

const About = () => {
  const faculty = [
    {
      name: "Dr. Sarah Johnson",
      role: "Director & Lead Instructor",
      specialization: "Full Stack Development",
      experience: "15+ years in software development",
      image: "/faculty-placeholder.svg"
    },
    {
      name: "Prof. Michael Chen",
      role: "Senior Data Science Instructor",
      specialization: "Machine Learning & AI",
      experience: "12+ years in data analytics",
      image: "/faculty-placeholder.svg"
    },
    {
      name: "Emma Davis",
      role: "UI/UX Design Lead",
      specialization: "Product Design",
      experience: "10+ years in design thinking",
      image: "/faculty-placeholder.svg"
    },
    {
      name: "James Wilson",
      role: "Digital Marketing Expert",
      specialization: "Growth Marketing",
      experience: "8+ years in digital strategy",
      image: "/faculty-placeholder.svg"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in education and student outcomes."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest, transparent relationships with students, faculty, and industry partners."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Learning together, growing together, succeeding together."
    },
    {
      icon: BookOpen,
      title: "Innovation",
      description: "Continuously updating our curriculum with the latest industry trends."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-subtle section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Genagogy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded with a mission to bridge the gap between academic learning and industry requirements, 
              Genagogy has been at the forefront of skill development education for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="animate-fade-in">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower individuals with practical, industry-relevant skills that enable them to thrive 
                  in today's dynamic professional landscape. We believe in learning by doing, mentoring by experts, 
                  and growing through real-world challenges.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the leading skill development institute that transforms lives through education, 
                  creating a future where every individual has the opportunity to achieve their professional dreams 
                  and contribute meaningfully to society.
                </p>
              </div>
            </div>

            <StatsSection />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary-light">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Genagogy?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're not just another training institute. We're your partners in professional transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-hover text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Director's Profile */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Message from Our Director</h2>
          </div>

          <div className="flex justify-center">
            <Card className="card-hover w-full max-w-5xl animate-fade-in">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center">
                    <ImageWithFallback
                      src="/gaurav_batra.webp"
                      alt="Center Director"
                      className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-lg object-cover shadow-medium"
                      fallback="/placeholder.svg"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">Center Director</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      "As the Center Director of Genagogy Institute, I would like to express my sincere gratitude to our partner, Technoglobe, for their constant support, expert guidance, and valuable resources. Through their structured training programs, updated curriculum, and strong placement support, we at Genagogy have been able to deliver quality education and instill confidence in our students. Together, we have created a positive learning environment that focuses on skill development and career readiness. It is a privilege to be part of the Technoglobe network, and at Genagogy, we remain committed to empowering youth in Srinagar with industry-relevant training and career opportunities."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join our community of learners and transform your career with industry-relevant skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses"
              className="btn-secondary text-primary bg-primary-foreground hover:bg-primary-foreground/90"
            >
              View Our Courses
            </a>
            <a
              href="/contact"
              className="border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors duration-200 px-6 py-3 rounded-lg font-medium bg-transparent"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
 
// Animated stats section
const StatsSection = () => {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [values, setValues] = useState({
    years: 0,
    courses: 0,
    companies: 0,
    students: 0,
    locations: 0
  });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const target = {
      years: 25,
      courses: 300,
      companies: 500,
      students: 200000,
      locations: 100
    };

    const durationMs = 1200; // quick professional count-up
    const frameMs = 20;
    const steps = Math.ceil(durationMs / frameMs);

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep += 1;
      const progress = Math.min(currentStep / steps, 1);

      setValues({
        years: Math.floor(target.years * progress),
        courses: Math.floor(target.courses * progress),
        companies: Math.floor(target.companies * progress),
        students: Math.floor(target.students * progress),
        locations: Math.floor(target.locations * progress)
      });

      if (progress === 1) clearInterval(interval);
    }, frameMs);

    return () => clearInterval(interval);
  }, [hasAnimated]);

  const formatNumber = (n) => {
    return n.toLocaleString();
  };

  return (
    <div ref={containerRef} className="grid grid-cols-2 gap-6">
      <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <div className="text-3xl font-bold mb-2">{values.years}+ </div>
        <div className="text-sm">Years Of Excellence</div>
      </div>
      <div className="bg-success text-success-foreground p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <div className="text-3xl font-bold mb-2">{formatNumber(values.courses)}+ </div>
        <div className="text-sm">Available Career Courses with AI Integration</div>
      </div>
      <div className="bg-accent text-accent-foreground p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <div className="text-3xl font-bold mb-2">{formatNumber(values.companies)}+ </div>
        <div className="text-sm">Tie-Up Companies For Placement</div>
      </div>
      <div className="bg-secondary text-secondary-foreground p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <div className="text-3xl font-bold mb-2">{formatNumber(values.students)}+ </div>
        <div className="text-sm">Trained & Placed Students</div>
      </div>
      <div className="bg-muted text-foreground p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
        <div className="text-3xl font-bold mb-2">{values.locations}+ </div>
        <div className="text-sm">Global Locations</div>
      </div>
    </div>
  );
};