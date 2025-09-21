import { useParams, Link } from "react-router-dom";
import { Clock, Users, Award, CheckCircle, Calendar, DollarSign, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const CourseDetails = () => {
  const { id } = useParams();

  // Mock course data - in a real app, this would come from an API
  const courses = {
    "1": {
      id: 1,
      title: "Full Stack Web Development",
      duration: "6 months",
      students: 45,
      level: "Beginner to Advanced",
      description: "Master modern web development with React, Node.js, and databases. Build real-world projects from scratch and become a complete full-stack developer ready for the industry.",
      skills: ["React", "Node.js", "MongoDB", "JavaScript", "HTML/CSS", "Express.js", "Git", "REST APIs"],
      fee: "$1,299",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop",
      highlights: [
        "Build 5+ real-world projects",
        "1-on-1 mentorship sessions",
        "Industry-recognized certificate",
        "Job placement assistance",
        "Lifetime community access"
      ],
      curriculum: [
        {
          module: "Module 1: Frontend Fundamentals",
          topics: ["HTML5 & CSS3", "JavaScript ES6+", "Responsive Design", "Bootstrap"]
        },
        {
          module: "Module 2: React Development",
          topics: ["React Components", "State Management", "React Router", "Hooks"]
        },
        {
          module: "Module 3: Backend Development",
          topics: ["Node.js", "Express.js", "RESTful APIs", "Authentication"]
        },
        {
          module: "Module 4: Database & Deployment",
          topics: ["MongoDB", "Deployment", "Version Control", "Testing"]
        }
      ],
      prerequisites: [
        "Basic computer literacy",
        "High school diploma or equivalent",
        "Enthusiasm to learn programming"
      ],
      schedule: "Mon, Wed, Fri - 7:00 PM to 9:00 PM",
      nextBatch: "January 15, 2024",
      instructor: "Dr. Sarah Johnson"
    }
  };

  const course = courses[id];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h1>
          <Link to="/courses" className="text-primary hover:underline">
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const getLevelColor = (level) => {
    if (level.includes("Beginner")) return "bg-green-100 text-green-800";
    if (level.includes("Intermediate")) return "bg-yellow-100 text-yellow-800";
    if (level.includes("Advanced")) return "bg-red-100 text-red-800";
    return "bg-primary-light text-primary";
  };

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <div className="bg-background border-b border-border py-4">
        <div className="container-max">
          <Link 
            to="/courses" 
            className="flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-subtle section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className={getLevelColor(course.level)} variant="secondary">
                {course.level}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                {course.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {course.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">{course.duration}</div>
                  <div className="text-xs text-muted-foreground">Duration</div>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">{course.students}</div>
                  <div className="text-xs text-muted-foreground">Enrolled</div>
                </div>
                <div className="text-center">
                  <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">Certificate</div>
                  <div className="text-xs text-muted-foreground">Included</div>
                </div>
                <div className="text-center">
                  <DollarSign className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">{course.fee}</div>
                  <div className="text-xs text-muted-foreground">Total Fee</div>
                </div>
              </div>

              <Button size="lg" className="mr-4">
                Enroll Now
              </Button>
              <Button size="lg" variant="outline">
                Download Syllabus
              </Button>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src={course.image}
                alt={course.title}
                className="w-full rounded-lg shadow-large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Skills */}
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Skills You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Course Highlights */}
              <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle>Course Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {course.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Curriculum */}
              <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle>Curriculum</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {course.curriculum.map((module, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-foreground mb-3">{module.module}</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {module.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                              {topic}
                            </div>
                          ))}
                        </div>
                        {index < course.curriculum.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <CardHeader>
                  <CardTitle>Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {course.prerequisites.map((prerequisite, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{prerequisite}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Enrollment Card */}
              <Card className="sticky top-24 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <CardHeader>
                  <CardTitle className="text-center">
                    <span className="text-3xl font-bold text-primary">{course.fee}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Schedule:</span>
                      <span className="font-medium text-foreground">{course.schedule}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Next Batch:</span>
                      <span className="font-medium text-foreground">{course.nextBatch}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Instructor:</span>
                      <span className="font-medium text-foreground">{course.instructor}</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      Enroll Now
                    </Button>
                    <Button className="w-full" variant="outline">
                      Request Info
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      30-day money-back guarantee
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
