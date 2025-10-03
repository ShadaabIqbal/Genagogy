import { Link } from "react-router-dom";
import { Clock, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ImageWithFallback from "@/components/ImageWithFallback";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Digital Marketing",
      duration: "4 months",
      students: 58,
      level: "All Levels",
      description: "Learn end-to-end digital marketing: SEO, SEM, social media, content, and analytics.",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Content"],
      image: "/course-placeholder.svg",
      syllabus: [
        { module: "Module 1: Marketing Foundations", topics: ["Digital landscape", "Buyer personas", "Customer journey", "Brand positioning"] },
        { module: "Module 2: SEO", topics: ["Keyword research", "On-page SEO", "Technical SEO", "Link building"] },
        { module: "Module 3: Paid Advertising", topics: ["Google Ads", "Facebook/Instagram Ads", "Campaign structure", "A/B testing"] },
        { module: "Module 4: Content & Social", topics: ["Content strategy", "Editorial calendars", "Social media management", "Influencer marketing"] },
        { module: "Module 5: Analytics & Reporting", topics: ["Google Analytics", "UTM tracking", "Dashboards", "Attribution basics"] }
      ]
    },
    {
      id: 2,
      title: "Video Editing",
      duration: "3 months",
      students: 40,
      level: "Beginner to Intermediate",
      description: "Edit compelling videos with professional workflows, audio, motion, and color grading.",
      skills: ["Editing", "Color", "Audio", "Motion Graphics", "Storytelling"],
      image: "/course-placeholder.svg",
      syllabus: [
        { module: "Module 1: Editing Basics", topics: ["Non-linear editing", "Timelines", "Cuts & transitions", "Project setup"] },
        { module: "Module 2: Audio & Music", topics: ["Voice cleanup", "Noise reduction", "Sound design", "Music licensing"] },
        { module: "Module 3: Motion & Titles", topics: ["Keyframing", "Text animation", "Lower thirds", "Intro/outro"] },
        { module: "Module 4: Color", topics: ["Color correction", "Color grading", "Scopes", "LUTs"] },
        { module: "Module 5: Delivery", topics: ["Export settings", "Codecs", "Delivery formats", "Publishing workflows"] }
      ]
    },
    {
      id: 3,
      title: "Graphic Designing",
      duration: "4 months",
      students: 44,
      level: "All Levels",
      description: "Master design fundamentals, branding, and modern tools for print and digital.",
      skills: ["Typography", "Layout", "Branding", "Illustration", "Figma/Adobe"],
      image: "/course-placeholder.svg",
      syllabus: [
        { module: "Module 1: Design Principles", topics: ["Color theory", "Typography", "Composition", "Hierarchy"] },
        { module: "Module 2: Tools & Workflows", topics: ["Figma", "Photoshop", "Illustrator", "Asset management"] },
        { module: "Module 3: Branding", topics: ["Brand strategy", "Logos", "Design systems", "Style guides"] },
        { module: "Module 4: Print & Digital", topics: ["Layouts", "Mockups", "Responsive design", "Export specs"] },
        { module: "Module 5: Portfolio", topics: ["Case studies", "Presentation", "Feedback loops", "Polishing"] }
      ]
    },
    {
      id: 4,
      title: "Web Development (MERN)",
      duration: "6 months",
      students: 45,
      level: "Beginner to Advanced",
      description: "Build full-stack web apps with MongoDB, Express, React, and Node.js.",
      skills: ["React", "Node.js", "MongoDB", "Express", "Git"],
      image: "/course-placeholder.svg",
      syllabus: [
        { module: "Module 1: Frontend Fundamentals", topics: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive design"] },
        { module: "Module 2: React", topics: ["Components", "State & props", "Hooks", "Routing"] },
        { module: "Module 3: Backend with Node.js", topics: ["Express APIs", "Auth basics", "Validation", "Error handling"] },
        { module: "Module 4: Database & Deployment", topics: ["MongoDB", "Mongoose", "Env & config", "Deployment"] }
      ]
    },
    {
      id: 5,
      title: "Data Science",
      duration: "6 months",
      students: 36,
      level: "Intermediate",
      description: "Apply statistics, Python, and ML to analyze data and build models.",
      skills: ["Python", "Pandas", "NumPy", "ML", "Visualization"],
      image: "/course-placeholder.svg",
      syllabus: [
        { module: "Module 1: Python for Data", topics: ["Data types", "Pandas", "EDA", "Visualization"] },
        { module: "Module 2: Statistics", topics: ["Probability", "Hypothesis testing", "Regression", "Sampling"] },
        { module: "Module 3: Machine Learning", topics: ["Supervised", "Unsupervised", "Model evaluation", "Pipelines"] },
        { module: "Module 4: Projects", topics: ["Feature engineering", "Model tuning", "Reporting", "Best practices"] }
      ]
    },
    {
      id: 6,
      title: "Data Analytics",
      duration: "5 months",
      students: 38,
      level: "Beginner to Intermediate",
      description: "Turn raw data into insights using SQL, BI tools, and dashboards.",
      skills: ["SQL", "Excel", "Tableau/Power BI", "ETL", "Dashboards"],
      image: "/course-placeholder.svg",
      syllabus: [
        { module: "Module 1: Foundations", topics: ["Analytical thinking", "KPIs", "Data sources", "Data quality"] },
        { module: "Module 2: SQL", topics: ["Joins", "Aggregations", "Window functions", "CTEs"] },
        { module: "Module 3: BI & Visualization", topics: ["Tableau/Power BI", "Dashboards", "Storytelling", "Sharing"] },
        { module: "Module 4: Analytics in Practice", topics: ["ETL basics", "Spreadsheets", "Reporting", "Case studies"] }
      ]
    },
    {
      id: 7,
      title: "Professional Accounting",
      duration: "6 months",
      students: 30,
      level: "All Levels",
      description: "Core accounting principles, taxation, and tools for modern finance roles.",
      skills: ["Bookkeeping", "Financial statements", "Tax basics", "Tally/Excel", "Audit"] ,
      image: "/course-placeholder.svg",
      syllabus: [
        { module: "Module 1: Fundamentals", topics: ["Accounting cycle", "Double-entry", "Ledgers", "Trial balance"] },
        { module: "Module 2: Financial Statements", topics: ["Income statement", "Balance sheet", "Cash flows", "Ratios"] },
        { module: "Module 3: Tax & Compliance", topics: ["GST basics", "TDS", "Compliance", "Documentation"] },
        { module: "Module 4: Tools & Audit", topics: ["Tally/Excel", "Bank reconciliation", "Payroll basics", "Internal audit"] }
      ]
    },
    {
      id: 8,
      title: "Ethical Hacking and Cyber Security",
      duration: "6 months",
      students: 34,
      level: "Beginner to Intermediate",
      description: "Security fundamentals, network defense, and ethical hacking methodologies.",
      skills: ["Networking", "Linux", "Security", "OWASP", "Tools"],
      image: "/course-placeholder.svg",
      syllabus: [
        { module: "Module 1: Security Basics", topics: ["CIA triad", "Threats", "Vulnerabilities", "Risk"] },
        { module: "Module 2: Networks & Linux", topics: ["TCP/IP", "Wireshark", "Linux essentials", "Permissions"] },
        { module: "Module 3: Web Security", topics: ["OWASP Top 10", "Recon", "Scanning", "Exploitation basics"] },
        { module: "Module 4: Defense & Practice", topics: ["Hardening", "Monitoring", "Reporting", "Responsible disclosure"] }
      ]
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
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="pt-4">
                    <Button asChild size="sm" className="w-full sm:w-auto">
                      <Link to={`/courses/${course.id}`}>View Details</Link>
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
