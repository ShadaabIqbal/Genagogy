import { useParams, Link } from "react-router-dom";
import { Clock, Users, Award, CheckCircle, Calendar, ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageWithFallback from "@/components/ImageWithFallback";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const CourseDetails = () => {
  const { id } = useParams();

  // Mock course data - in a real app, this would come from an API
  const courses = {
    "1": {
      id: 1,
      title: "Digital Marketing",
      duration: "4 months",
      students: 58,
      level: "All Levels",
      description: "Learn end-to-end digital marketing: SEO, SEM, social media, content, and analytics.",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Content"],
      image: "/course-placeholder.svg",
      highlights: [
        "Hands-on campaign practice",
        "Case studies and dashboards",
        "Google Analytics fundamentals",
        "Portfolio-ready projects"
      ],
      curriculum: [
        { module: "Module 1: Marketing Foundations", topics: ["Digital landscape", "Buyer personas", "Customer journey", "Brand positioning"] },
        { module: "Module 2: SEO", topics: ["Keyword research", "On-page SEO", "Technical SEO", "Link building"] },
        { module: "Module 3: Paid Advertising", topics: ["Google Ads", "Facebook/Instagram Ads", "Campaign structure", "A/B testing"] },
        { module: "Module 4: Content & Social", topics: ["Content strategy", "Editorial calendars", "Social media management", "Influencer marketing"] },
        { module: "Module 5: Analytics & Reporting", topics: ["Google Analytics", "UTM tracking", "Dashboards", "Attribution basics"] }
      ],
      prerequisites: ["Basic computer literacy"],
      schedule: "Mon, Wed, Fri - 7:00 PM to 9:00 PM",
      nextBatch: "November 15, 2025",
      instructor: "To be announced"
    },
    "2": {
      id: 2,
      title: "Video Editing",
      duration: "3 months",
      students: 40,
      level: "Beginner to Intermediate",
      description: "Edit compelling videos with professional workflows, audio, motion, and color grading.",
      skills: ["Editing", "Color", "Audio", "Motion Graphics", "Storytelling"],
      image: "/course-placeholder.svg",
      highlights: ["Practical editing labs", "Audio and color workflows", "Story-first approach"],
      curriculum: [
        { module: "Module 1: Editing Basics", topics: ["Non-linear editing", "Timelines", "Cuts & transitions", "Project setup"] },
        { module: "Module 2: Audio & Music", topics: ["Voice cleanup", "Noise reduction", "Sound design", "Music licensing"] },
        { module: "Module 3: Motion & Titles", topics: ["Keyframing", "Text animation", "Lower thirds", "Intro/outro"] },
        { module: "Module 4: Color", topics: ["Color correction", "Color grading", "Scopes", "LUTs"] },
        { module: "Module 5: Delivery", topics: ["Export settings", "Codecs", "Delivery formats", "Publishing workflows"] }
      ],
      prerequisites: ["Basic computer literacy"],
      schedule: "Tue, Thu - 6:00 PM to 8:00 PM",
      nextBatch: "November 25, 2025",
      instructor: "To be announced"
    },
    "3": {
      id: 3,
      title: "Graphic Designing",
      duration: "4 months",
      students: 44,
      level: "All Levels",
      description: "Master design fundamentals, branding, and modern tools for print and digital.",
      skills: ["Typography", "Layout", "Branding", "Illustration", "Figma/Adobe"],
      image: "/course-placeholder.svg",
      highlights: ["Real-world briefs", "Branding systems", "Portfolio development"],
      curriculum: [
        { module: "Module 1: Design Principles", topics: ["Color theory", "Typography", "Composition", "Hierarchy"] },
        { module: "Module 2: Tools & Workflows", topics: ["Figma", "Photoshop", "Illustrator", "Asset management"] },
        { module: "Module 3: Branding", topics: ["Brand strategy", "Logos", "Design systems", "Style guides"] },
        { module: "Module 4: Print & Digital", topics: ["Layouts", "Mockups", "Responsive design", "Export specs"] },
        { module: "Module 5: Portfolio", topics: ["Case studies", "Presentation", "Feedback loops", "Polishing"] }
      ],
      prerequisites: ["Basic computer literacy"],
      schedule: "Weekend batches",
      nextBatch: "December 10, 2025",
      instructor: "To be announced"
    },
    "4": {
      id: 4,
      title: "Web Development (MERN)",
      duration: "6 months",
      students: 45,
      level: "Beginner to Advanced",
      description: "Build full-stack web apps with MongoDB, Express, React, and Node.js.",
      skills: ["React", "Node.js", "MongoDB", "Express", "Git"],
      image: "/course-placeholder.svg",
      highlights: ["Hands-on projects", "Modern tooling", "Deployment workflows"],
      curriculum: [
        { module: "Module 1: Frontend Fundamentals", topics: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive design"] },
        { module: "Module 2: React", topics: ["Components", "State & props", "Hooks", "Routing"] },
        { module: "Module 3: Backend with Node.js", topics: ["Express APIs", "Auth basics", "Validation", "Error handling"] },
        { module: "Module 4: Database & Deployment", topics: ["MongoDB", "Mongoose", "Env & config", "Deployment"] }
      ],
      prerequisites: ["Basic computer literacy"],
      schedule: "Mon, Wed, Fri - 7:00 PM to 9:00 PM",
      nextBatch: "November 20, 2025",
      instructor: "To be announced"
    },
    "5": {
      id: 5,
      title: "Data Science",
      duration: "6 months",
      students: 36,
      level: "Intermediate",
      description: "Apply statistics, Python, and ML to analyze data and build models.",
      skills: ["Python", "Pandas", "NumPy", "ML", "Visualization"],
      image: "/course-placeholder.svg",
      highlights: ["Model building", "EDA projects", "Best practices"],
      curriculum: [
        { module: "Module 1: Python for Data", topics: ["Data types", "Pandas", "EDA", "Visualization"] },
        { module: "Module 2: Statistics", topics: ["Probability", "Hypothesis testing", "Regression", "Sampling"] },
        { module: "Module 3: Machine Learning", topics: ["Supervised", "Unsupervised", "Model evaluation", "Pipelines"] },
        { module: "Module 4: Projects", topics: ["Feature engineering", "Model tuning", "Reporting", "Best practices"] }
      ],
      prerequisites: ["Basic Python familiarity"],
      schedule: "Tue, Thu - 7:00 PM to 9:00 PM",
      nextBatch: "December 1, 2025",
      instructor: "To be announced"
    },
    "6": {
      id: 6,
      title: "Data Analytics",
      duration: "5 months",
      students: 38,
      level: "Beginner to Intermediate",
      description: "Turn raw data into insights using SQL, BI tools, and dashboards.",
      skills: ["SQL", "Excel", "Tableau/Power BI", "ETL", "Dashboards"],
      image: "/course-placeholder.svg",
      highlights: ["Business-focused analysis", "Dashboarding", "Case studies"],
      curriculum: [
        { module: "Module 1: Foundations", topics: ["Analytical thinking", "KPIs", "Data sources", "Data quality"] },
        { module: "Module 2: SQL", topics: ["Joins", "Aggregations", "Window functions", "CTEs"] },
        { module: "Module 3: BI & Visualization", topics: ["Tableau/Power BI", "Dashboards", "Storytelling", "Sharing"] },
        { module: "Module 4: Analytics in Practice", topics: ["ETL basics", "Spreadsheets", "Reporting", "Case studies"] }
      ],
      prerequisites: ["Basic computer literacy"],
      schedule: "Weekend batches",
      nextBatch: "December 12, 2025",
      instructor: "To be announced"
    },
    "7": {
      id: 7,
      title: "Professional Accounting",
      duration: "6 months",
      students: 30,
      level: "All Levels",
      description: "Core accounting principles, taxation, and tools for modern finance roles.",
      skills: ["Bookkeeping", "Financial statements", "Tax basics", "Tally/Excel", "Audit"],
      image: "/course-placeholder.svg",
      highlights: ["Practical ledger work", "Compliance basics", "Tools training"],
      curriculum: [
        { module: "Module 1: Fundamentals", topics: ["Accounting cycle", "Double-entry", "Ledgers", "Trial balance"] },
        { module: "Module 2: Financial Statements", topics: ["Income statement", "Balance sheet", "Cash flows", "Ratios"] },
        { module: "Module 3: Tax & Compliance", topics: ["GST basics", "TDS", "Compliance", "Documentation"] },
        { module: "Module 4: Tools & Audit", topics: ["Tally/Excel", "Bank reconciliation", "Payroll basics", "Internal audit"] }
      ],
      prerequisites: ["Basic math"],
      schedule: "Mon, Wed - 6:00 PM to 8:00 PM",
      nextBatch: "December 5, 2025",
      instructor: "To be announced"
    },
    "8": {
      id: 8,
      title: "Ethical Hacking & Cyber Security",
      duration: "6 months",
      students: 34,
      level: "Beginner to Intermediate",
      description: "Security fundamentals, network defense, and ethical hacking methodologies.",
      skills: ["Networking", "Linux", "Security", "OWASP", "Tools"],
      image: "/course-placeholder.svg",
      highlights: ["Lab-based practice", "OWASP coverage", "Defensive hardening"],
      curriculum: [
        { module: "Module 1: Security Basics", topics: ["CIA triad", "Threats", "Vulnerabilities", "Risk"] },
        { module: "Module 2: Networks & Linux", topics: ["TCP/IP", "Wireshark", "Linux essentials", "Permissions"] },
        { module: "Module 3: Web Security", topics: ["OWASP Top 10", "Recon", "Scanning", "Exploitation basics"] },
        { module: "Module 4: Defense & Practice", topics: ["Hardening", "Monitoring", "Reporting", "Responsible disclosure"] }
      ],
      prerequisites: ["Basic computer literacy"],
      schedule: "Tue, Thu - 6:00 PM to 8:00 PM",
      nextBatch: "December 15, 2025",
      instructor: "To be announced"
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
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">{course.duration}</div>
                  <div className="text-xs text-muted-foreground">Duration</div>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">Hands-on Projects</div>
                  <div className="text-xs text-muted-foreground">Practical Labs</div>
                </div>
                <div className="text-center">
                  <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">Certificate</div>
                  <div className="text-xs text-muted-foreground">Included</div>
                </div>
              </div>

              <Button size="lg" className="mr-4">
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.print()}>
                <Download className="mr-2 h-4 w-4" />
                Download Syllabus
              </Button>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <ImageWithFallback
                src={course.image}
                alt={course.title}
                className="w-full rounded-lg shadow-large"
                fallback="/course-placeholder.svg"
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
                  <CardTitle className="text-center">Course Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="text-muted-foreground">
                      Classes run Monday–Saturday with flexible timings as per student availability.
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
                    <Button className="w-full" variant="outline" onClick={() => window.print()}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Syllabus
                    </Button>
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
