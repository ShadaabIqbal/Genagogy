import { Target, Eye, Users, Award, BookOpen, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const faculty = [
    {
      name: "Dr. Sarah Johnson",
      role: "Director & Lead Instructor",
      specialization: "Full Stack Development",
      experience: "15+ years in software development",
      image: "https://images.unsplash.com/photo-1494790108755-2616c4e1a4f6?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Prof. Michael Chen",
      role: "Senior Data Science Instructor",
      specialization: "Machine Learning & AI",
      experience: "12+ years in data analytics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Emma Davis",
      role: "UI/UX Design Lead",
      specialization: "Product Design",
      experience: "10+ years in design thinking",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      role: "Digital Marketing Expert",
      specialization: "Growth Marketing",
      experience: "8+ years in digital strategy",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
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

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm">Graduates Placed</div>
              </div>
              <div className="bg-success text-success-foreground p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm">Success Rate</div>
              </div>
              <div className="bg-accent text-accent-foreground p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-sm">Expert Mentors</div>
              </div>
              <div className="bg-secondary text-secondary-foreground p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
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

      {/* Faculty Section */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Expert Faculty</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Learn from industry veterans who bring real-world experience into the classroom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((member, index) => (
              <Card key={index} className="card-hover text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover shadow-medium"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-2">{member.specialization}</p>
                  <p className="text-xs text-muted-foreground">{member.experience}</p>
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