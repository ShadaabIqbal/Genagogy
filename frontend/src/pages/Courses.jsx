import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Clock, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ImageWithFallback from "@/components/ImageWithFallback";
import CourseCardSkeleton from "@/components/skeletons/CourseCardSkeleton";
import Loader from "@/components/Loader";

const Courses = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [isContentReady, setIsContentReady] = useState(false);
  const imagesLoadedRef = useRef(0);
  const totalImagesRef = useRef(0);

  // Define courses array first
  const courses = [
    {
      id: 1,
      title: "Digital Marketing",
      duration: "4 months",
      students: 58,
      level: "All Levels",
      description:
        "Learn end-to-end digital marketing: SEO, SEM, social media, content, and analytics.",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Content"],
      image: "../../public/courses/digital_marketing.jpeg",
      syllabus: [
        {
          module: "Module 1: Marketing Foundations",
          topics: [
            "Digital landscape",
            "Buyer personas",
            "Customer journey",
            "Brand positioning",
          ],
        },
        {
          module: "Module 2: SEO",
          topics: [
            "Keyword research",
            "On-page SEO",
            "Technical SEO",
            "Link building",
          ],
        },
        {
          module: "Module 3: Paid Advertising",
          topics: [
            "Google Ads",
            "Facebook/Instagram Ads",
            "Campaign structure",
            "A/B testing",
          ],
        },
        {
          module: "Module 4: Content & Social",
          topics: [
            "Content strategy",
            "Editorial calendars",
            "Social media management",
            "Influencer marketing",
          ],
        },
        {
          module: "Module 5: Analytics & Reporting",
          topics: [
            "Google Analytics",
            "UTM tracking",
            "Dashboards",
            "Attribution basics",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Video Editing",
      duration: "3 months",
      students: 40,
      level: "Beginner to Intermediate",
      description:
        "Edit compelling videos with professional workflows, audio, motion, and color grading.",
      skills: ["Editing", "Color", "Audio", "Motion Graphics", "Storytelling"],
      image: "../../public/courses/video_editing.webp",
      syllabus: [
        {
          module: "Module 1: Editing Basics",
          topics: [
            "Non-linear editing",
            "Timelines",
            "Cuts & transitions",
            "Project setup",
          ],
        },
        {
          module: "Module 2: Audio & Music",
          topics: [
            "Voice cleanup",
            "Noise reduction",
            "Sound design",
            "Music licensing",
          ],
        },
        {
          module: "Module 3: Motion & Titles",
          topics: [
            "Keyframing",
            "Text animation",
            "Lower thirds",
            "Intro/outro",
          ],
        },
        {
          module: "Module 4: Color",
          topics: ["Color correction", "Color grading", "Scopes", "LUTs"],
        },
        {
          module: "Module 5: Delivery",
          topics: [
            "Export settings",
            "Codecs",
            "Delivery formats",
            "Publishing workflows",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Graphic Designing",
      duration: "4 months",
      students: 44,
      level: "All Levels",
      description:
        "Master design fundamentals, branding, and modern tools for print and digital.",
      skills: [
        "Typography",
        "Layout",
        "Branding",
        "Illustration",
        "Figma/Adobe",
      ],
      image: "../../public/courses/graphic_designing.webp",
      syllabus: [
        {
          module: "Module 1: Design Principles",
          topics: ["Color theory", "Typography", "Composition", "Hierarchy"],
        },
        {
          module: "Module 2: Tools & Workflows",
          topics: ["Figma", "Photoshop", "Illustrator", "Asset management"],
        },
        {
          module: "Module 3: Branding",
          topics: ["Brand strategy", "Logos", "Design systems", "Style guides"],
        },
        {
          module: "Module 4: Print & Digital",
          topics: ["Layouts", "Mockups", "Responsive design", "Export specs"],
        },
        {
          module: "Module 5: Portfolio",
          topics: [
            "Case studies",
            "Presentation",
            "Feedback loops",
            "Polishing",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Web Development (MERN)",
      duration: "6 months",
      students: 45,
      level: "Beginner to Advanced",
      description:
        "Build full-stack web apps with MongoDB, Express, React, and Node.js.",
      skills: ["React", "Node.js", "MongoDB", "Express", "Git"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      syllabus: [
        {
          module: "Module 1: Frontend Fundamentals",
          topics: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive design"],
        },
        {
          module: "Module 2: React",
          topics: ["Components", "State & props", "Hooks", "Routing"],
        },
        {
          module: "Module 3: Backend with Node.js",
          topics: [
            "Express APIs",
            "Auth basics",
            "Validation",
            "Error handling",
          ],
        },
        {
          module: "Module 4: Database & Deployment",
          topics: ["MongoDB", "Mongoose", "Env & config", "Deployment"],
        },
      ],
    },
    {
      id: 5,
      title: "Data Science",
      duration: "6 months",
      students: 36,
      level: "Intermediate",
      description:
        "Apply statistics, Python, and ML to analyze data and build models.",
      skills: ["Python", "Pandas", "NumPy", "ML", "Visualization"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      syllabus: [
        {
          module: "Module 1: Python for Data",
          topics: ["Data types", "Pandas", "EDA", "Visualization"],
        },
        {
          module: "Module 2: Statistics",
          topics: [
            "Probability",
            "Hypothesis testing",
            "Regression",
            "Sampling",
          ],
        },
        {
          module: "Module 3: Machine Learning",
          topics: [
            "Supervised",
            "Unsupervised",
            "Model evaluation",
            "Pipelines",
          ],
        },
        {
          module: "Module 4: Projects",
          topics: [
            "Feature engineering",
            "Model tuning",
            "Reporting",
            "Best practices",
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Data Analytics",
      duration: "5 months",
      students: 38,
      level: "Beginner to Intermediate",
      description:
        "Turn raw data into insights using SQL, BI tools, and dashboards.",
      skills: ["SQL", "Excel", "Tableau/Power BI", "ETL", "Dashboards"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      syllabus: [
        {
          module: "Module 1: Foundations",
          topics: [
            "Analytical thinking",
            "KPIs",
            "Data sources",
            "Data quality",
          ],
        },
        {
          module: "Module 2: SQL",
          topics: ["Joins", "Aggregations", "Window functions", "CTEs"],
        },
        {
          module: "Module 3: BI & Visualization",
          topics: ["Tableau/Power BI", "Dashboards", "Storytelling", "Sharing"],
        },
        {
          module: "Module 4: Analytics in Practice",
          topics: ["ETL basics", "Spreadsheets", "Reporting", "Case studies"],
        },
      ],
    },
    {
      id: 7,
      title: "Professional Accounting",
      duration: "6 months",
      students: 30,
      level: "All Levels",
      description:
        "Core accounting principles, taxation, and tools for modern finance roles.",
      skills: [
        "Bookkeeping",
        "Financial statements",
        "Tax basics",
        "Tally/Excel",
        "Audit",
      ],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80",
      syllabus: [
        {
          module: "Module 1: Fundamentals",
          topics: [
            "Accounting cycle",
            "Double-entry",
            "Ledgers",
            "Trial balance",
          ],
        },
        {
          module: "Module 2: Financial Statements",
          topics: ["Income statement", "Balance sheet", "Cash flows", "Ratios"],
        },
        {
          module: "Module 3: Tax & Compliance",
          topics: ["GST basics", "TDS", "Compliance", "Documentation"],
        },
        {
          module: "Module 4: Tools & Audit",
          topics: [
            "Tally/Excel",
            "Bank reconciliation",
            "Payroll basics",
            "Internal audit",
          ],
        },
      ],
    },
    {
      id: 8,
      title: "Ethical Hacking and Cyber Security",
      duration: "6 months",
      students: 34,
      level: "Beginner to Intermediate",
      description:
        "Security fundamentals, network defense, and ethical hacking methodologies.",
      skills: ["Networking", "Linux", "Security", "OWASP", "Tools"],
      image:
        "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      syllabus: [
        {
          module: "Module 1: Security Basics",
          topics: ["CIA triad", "Threats", "Vulnerabilities", "Risk"],
        },
        {
          module: "Module 2: Networks & Linux",
          topics: ["TCP/IP", "Wireshark", "Linux essentials", "Permissions"],
        },
        {
          module: "Module 3: Web Security",
          topics: ["OWASP Top 10", "Recon", "Scanning", "Exploitation basics"],
        },
        {
          module: "Module 4: Defense & Practice",
          topics: [
            "Hardening",
            "Monitoring",
            "Reporting",
            "Responsible disclosure",
          ],
        },
      ],
    },
    {
      id: 9,
      title: "CCNA (Cisco Certified Network Associate)",
      duration: "4 months",
      students: 32,
      level: "Beginner to Intermediate",
      description:
        "Master networking fundamentals, routing, switching, security, and automation for Cisco certification.",
      skills: [
        "Networking",
        "Routing",
        "Switching",
        "Security",
        "Troubleshooting",
      ],
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      syllabus: [
        {
          module: "Module 1: Network Fundamentals",
          topics: [
            "Network models (OSI, TCP/IP)",
            "IP addressing & subnetting",
            "Network topologies",
            "Ethernet LANs",
          ],
        },
        {
          module: "Module 2: Network Access",
          topics: [
            "VLANs & trunking",
            "Spanning Tree Protocol",
            "EtherChannel",
            "Wireless LANs basics",
          ],
        },
        {
          module: "Module 3: IP Connectivity",
          topics: [
            "Static & dynamic routing",
            "OSPF configuration",
            "Router setup",
            "IPv4 & IPv6 routing",
          ],
        },
        {
          module: "Module 4: Security & Services",
          topics: [
            "Access control lists (ACLs)",
            "Network security",
            "DHCP & DNS",
            "NAT configuration",
          ],
        },
        {
          module: "Module 5: Automation & Management",
          topics: [
            "Network automation basics",
            "REST APIs",
            "Configuration management",
            "Troubleshooting tools",
          ],
        },
      ],
    },
    {
      id: 10,
      title: "Fashion Designing",
      duration: "5 months",
      students: 42,
      level: "All Levels",
      description:
        "Learn design principles, pattern making, garment construction, and fashion illustration for a creative career.",
      skills: [
        "Sketching",
        "Pattern Making",
        "Textiles",
        "Sewing",
        "Portfolio Development",
      ],
      image:
        "https://images.pexels.com/photos/9218422/pexels-photo-9218422.jpeg",
      syllabus: [
        {
          module: "Module 1: Design Foundations",
          topics: [
            "Elements & principles of design",
            "Color theory",
            "Fashion history",
            "Trend analysis",
          ],
        },
        {
          module: "Module 2: Textiles & Materials",
          topics: [
            "Fabric types & properties",
            "Textile selection",
            "Finishes & treatments",
            "Sustainable materials",
          ],
        },
        {
          module: "Module 3: Fashion Illustration",
          topics: [
            "Sketching techniques",
            "Fashion figures",
            "Digital illustration",
            "Mood boards",
          ],
        },
        {
          module: "Module 4: Pattern Making & Construction",
          topics: [
            "Body measurements",
            "Pattern drafting",
            "Garment construction",
            "Sewing techniques",
          ],
        },
        {
          module: "Module 5: Portfolio & Business",
          topics: [
            "Portfolio development",
            "Brand identity",
            "Fashion marketing",
            "Industry practices",
          ],
        },
      ],
    },
    {
      id: 11,
      title: "Interior Designing",
      duration: "5 months",
      students: 39,
      level: "Beginner to Intermediate",
      description:
        "Design functional and beautiful interior spaces with space planning, color theory, and modern tools.",
      skills: [
        "Space Planning",
        "CAD Software",
        "Color Theory",
        "Lighting",
        "3D Visualization",
      ],
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2100&q=80",
      syllabus: [
        {
          module: "Module 1: Design Principles",
          topics: [
            "Elements of design",
            "Color theory & psychology",
            "Design styles & history",
            "Ergonomics & anthropometry",
          ],
        },
        {
          module: "Module 2: Technical Drawing",
          topics: [
            "Floor plans",
            "Elevations",
            "AutoCAD basics",
            "Drafting standards",
          ],
        },
        {
          module: "Module 3: Materials & Finishes",
          topics: [
            "Material selection",
            "Textiles & fabrics",
            "Flooring & wall finishes",
            "Furniture styles",
          ],
        },
        {
          module: "Module 4: Space Planning & Lighting",
          topics: [
            "Space planning principles",
            "Traffic flow",
            "Lighting design",
            "Furniture layout",
          ],
        },
        {
          module: "Module 5: 3D Visualization & Projects",
          topics: [
            "SketchUp/Revit",
            "3D rendering",
            "Sustainable design",
            "Client presentations",
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    // Step 1: Preload footer logo FIRST before anything else
    const footerLogoPromise = new Promise((resolve) => {
      const footerImg = new Image();
      footerImg.onload = () => resolve();
      footerImg.onerror = () => resolve(); // Continue even if fails
      footerImg.src = '/Genagogy_Logo.png';
    });

    // Step 2: Wait for footer to be fully rendered in DOM with logo
    const waitForFooterReady = () => {
      return new Promise((resolve) => {
        let attempts = 0;
        const maxAttempts = 100; // 100 * 100ms = 10 seconds max
        let consecutiveChecks = 0;
        
        const checkInterval = setInterval(() => {
          attempts++;
          const footer = document.querySelector('footer');
          
          if (footer && footer.offsetHeight > 0) {
            // Check for footer logo image - must be fully loaded
            const footerLogo = footer.querySelector('img[src*="Genagogy_Logo"]') || 
                              footer.querySelector('img[alt*="Genagogy Logo"]') ||
                              footer.querySelector('img[src="/Genagogy_Logo.png"]');
            
            // Check if footer logo is completely loaded (no white background)
            let footerLogoLoaded = false;
            if (footerLogo) {
              const isLoaded = footerLogo.complete && 
                              footerLogo.naturalWidth > 0 && 
                              footerLogo.naturalHeight > 0 &&
                              footerLogo.offsetWidth > 0 &&
                              footerLogo.offsetHeight > 0;
              
              if (isLoaded) {
                footerLogoLoaded = true;
              }
            }
            
            // Check if footer has all content rendered
            const footerContent = footer.querySelector('.container-max');
            const footerGrid = footer.querySelector('.grid');
            const footerLinks = footer.querySelectorAll('a, ul');
            const footerText = footer.querySelector('p');
            
            const footerContentReady = footerContent && 
                                      footerGrid && 
                                      footerLinks.length >= 4 && 
                                      footerText;
            
            // Only resolve when BOTH logo is loaded AND content is ready
            // AND we've had 5 consecutive successful checks (to ensure stability)
            if (footerLogoLoaded && footerContentReady) {
              consecutiveChecks++;
              if (consecutiveChecks >= 5) {
                clearInterval(checkInterval);
                resolve();
                return;
              }
            } else {
              consecutiveChecks = 0; // Reset if check fails
            }
          }
          
          // Fallback: if max attempts reached, resolve anyway
          if (attempts >= maxAttempts) {
            clearInterval(checkInterval);
            resolve();
          }
        }, 100); // Check every 100ms
      });
    };

    // Step 3: Wait for footer logo to load AND footer to be ready
    Promise.all([footerLogoPromise, waitForFooterReady()]).then(() => {
      // Footer is now ready, show skeleton and start loading course images
      setShowLoader(false);
      setShowSkeleton(true);

      // Step 4: Preload all course images
      const imageUrls = courses.map((course) => {
        if (course.image.startsWith("http")) {
          return course.image;
        }
        if (course.image.startsWith("../../public/")) {
          return course.image.replace("../../public/", "/");
        }
        return course.image;
      });

      totalImagesRef.current = imageUrls.length;
      imagesLoadedRef.current = 0;

      const loadPromises = imageUrls.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            imagesLoadedRef.current++;
            resolve();
          };
          img.onerror = () => {
            imagesLoadedRef.current++;
            resolve();
          };
          img.src = url;
        });
      });

      // Step 5: Wait for course images to load with timeout fallback
      const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });

      Promise.race([
        Promise.all(loadPromises),
        timeoutPromise
      ]).then(() => {
        // Additional delay to ensure smooth transition
        setTimeout(() => {
          setShowSkeleton(false);
          setIsContentReady(true);
        }, 400);
      });
    });
  }, []);

  const getLevelColor = (level) => {
    if (level.includes("Beginner")) return "bg-green-100 text-green-800";
    if (level.includes("Intermediate")) return "bg-yellow-100 text-yellow-800";
    if (level.includes("Advanced")) return "bg-red-100 text-red-800";
    return "bg-primary-light text-primary";
  };

  // Show custom loader first
  if (showLoader) {
    return <Loader fullScreen={true} />;
  }

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
              Choose from our comprehensive range of industry-focused courses
              designed to accelerate your career growth and transform your
              professional journey.
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
          {!isContentReady ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(courses.length)].map((_, index) => (
                <CourseCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card
                  key={course.id}
                  className="card-hover overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      fallback="/placeholder.svg"
                      loading="eager"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={getLevelColor(course.level)}>
                        {course.level}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">
                      {course.title}
                    </CardTitle>
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
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            We offer customized training programs for corporate clients and
            specialized skill development courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link to="/contact">Request Custom Training</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link to="/contact">Speak with Advisor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
