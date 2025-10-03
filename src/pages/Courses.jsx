import { Link } from "react-router-dom";
import { Clock, Users, Award, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ImageWithFallback from "@/components/ImageWithFallback";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      duration: "6 months",
      students: 45,
      level: "Beginner to Advanced",
      description: "Master modern web development with React, Node.js, and databases. Build real-world projects from scratch.",
      skills: ["React", "Node.js", "MongoDB", "JavaScript", "HTML/CSS"],
      fee: "$1,299",
      image: "/course-placeholder.svg"
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      duration: "8 months",
      students: 32,
      level: "Intermediate",
      description: "Learn data analysis, machine learning, and visualization with Python and industry tools.",
      skills: ["Python", "Pandas", "Machine Learning", "Tableau", "SQL"],
      fee: "$1,599",
      image: "/course-placeholder.svg"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      duration: "4 months",
      students: 58,
      level: "All Levels",
      description: "Complete digital marketing course covering SEO, social media, PPC, and analytics.",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Content Marketing"],
      fee: "$899",
      image: "/course-placeholder.svg"
    },
    {
      id: 4,
      title: "UI/UX Design Professional",
      duration: "5 months",
      students: 28,
      level: "Beginner to Intermediate",
      description: "Design beautiful, user-friendly interfaces with industry-standard tools and methodologies.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
      fee: "$1,199",
      image: "/course-placeholder.svg"
    },
    {
      id: 5,
      title: "Cloud Computing & DevOps",
      duration: "6 months",
      students: 24,
      level: "Intermediate to Advanced",
      description: "Master cloud platforms, containerization, and DevOps practices for modern infrastructure.",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"],
      fee: "$1,399",
      image: "/course-placeholder.svg"
    },
    {
      id: 6,
      title: "Mobile App Development",
      duration: "7 months",
      students: 35,
      level: "Intermediate",
      description: "Build native and cross-platform mobile applications for iOS and Android.",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      fee: "$1,499",
      image: "/course-placeholder.svg"
    }
  ];

  const getLevelColor = (level) => {
    if (level.includes("Beginner")) return "bg-green-100 text-green-800";
    if (level.includes("Intermediate")) return "bg-yellow-100 text-yellow-800";
    if (level.includes("Advanced")) return "bg-red-100 text-red-800";
    return "bg-primary-light text-primary";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-subtle section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Courses
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Choose from our comprehensive range of industry-focused courses designed to 
              accelerate your career growth and transform your professional journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-primary" />
                Industry Certified
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary" />
                Expert Instructors
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                Flexible Scheduling
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card 
                key={course.id} 
                className="card-hover overflow-hidden animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    fallback="/placeholder.svg"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{course.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students} enrolled
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {course.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-primary">{course.fee}</div>
                    <Button asChild size="sm">
                      <Link to={`/courses/${course.id}`}>
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
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
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            We offer customized training programs for corporate clients and specialized skill development courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link to="/contact">
                Request Custom Training
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link to="/contact">
                Speak with Advisor
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
