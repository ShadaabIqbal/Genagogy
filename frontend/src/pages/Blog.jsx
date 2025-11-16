import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ImageWithFallback from "@/components/ImageWithFallback";

const Blog = () => {
  const { slug } = useParams();

  // Blog articles data
  const blogArticles = {
    "ai-education": {
      title: "The Future of AI in Education & Learning",
      category: "AI & Machine Learning",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=90",
      author: "Dr. Sarah Johnson",
      date: "January 15, 2025",
      readTime: "8 min read",
      content: `
        <p class="text-lg text-muted-foreground mb-6">Artificial intelligence is revolutionizing the way we learn and teach, creating personalized educational experiences that adapt to each student's unique needs.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Personalized Learning Paths</h2>
        <p class="mb-4">AI-powered platforms can analyze individual learning patterns, strengths, and weaknesses to create customized curricula. This adaptive learning approach ensures that students progress at their own pace, focusing on areas that need more attention while accelerating through concepts they grasp quickly.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Intelligent Tutoring Systems</h2>
        <p class="mb-4">Modern AI tutors provide 24/7 support, answering questions, explaining complex concepts, and offering practice exercises. These systems use natural language processing to understand student queries and provide contextual, helpful responses.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Automated Assessment and Feedback</h2>
        <p class="mb-4">AI can instantly grade assignments, provide detailed feedback, and identify areas for improvement. This allows educators to focus on higher-level teaching tasks while ensuring students receive immediate, actionable feedback.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">The Future Landscape</h2>
        <p class="mb-4">As AI continues to evolve, we can expect even more sophisticated educational tools that will transform how knowledge is delivered and absorbed. The key is to integrate these technologies thoughtfully, ensuring they enhance rather than replace the human element in education.</p>
      `
    },
    "digital-marketing-2025": {
      title: "Digital Marketing Strategies for 2025",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=90",
      author: "Michael Chen",
      date: "January 12, 2025",
      readTime: "10 min read",
      content: `
        <p class="text-lg text-muted-foreground mb-6">The digital marketing landscape continues to evolve rapidly. Here are the key strategies that will dominate 2025.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">AI-Powered Content Creation</h2>
        <p class="mb-4">Artificial intelligence is transforming content creation, enabling marketers to produce personalized content at scale. AI tools can analyze audience data to create targeted messaging that resonates with specific customer segments.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Voice Search Optimization</h2>
        <p class="mb-4">With the rise of smart speakers and voice assistants, optimizing for voice search is crucial. Focus on conversational keywords and featured snippets to capture voice search traffic.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Video-First Strategy</h2>
        <p class="mb-4">Video content continues to dominate social media and search results. Short-form videos, live streaming, and interactive video experiences are essential for engaging modern audiences.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Privacy-First Marketing</h2>
        <p class="mb-4">With increasing privacy regulations, marketers must focus on first-party data collection and building direct relationships with customers. Email marketing and owned media channels are becoming more valuable.</p>
      `
    },
    "graphic-design-trends": {
      title: "Modern Graphic Design Trends & Tools",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=90",
      author: "Emma Rodriguez",
      date: "January 10, 2025",
      readTime: "7 min read",
      content: `
        <p class="text-lg text-muted-foreground mb-6">Graphic design is constantly evolving. Discover the trends and tools shaping visual communication in 2025.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Bold Typography</h2>
        <p class="mb-4">Large, expressive typography is making a comeback. Designers are using bold fonts as the primary visual element, creating impactful designs that communicate messages instantly.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Sustainable Design</h2>
        <p class="mb-4">Eco-conscious design practices are gaining traction. Designers are considering the environmental impact of their work, from digital optimization to sustainable printing methods.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">3D and Immersive Elements</h2>
        <p class="mb-4">Three-dimensional graphics and immersive design elements are creating more engaging visual experiences. Tools like Blender and Figma are making 3D design more accessible.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Minimalism with Purpose</h2>
        <p class="mb-4">Clean, minimal designs that focus on essential elements are trending. This approach improves usability while creating visually appealing interfaces.</p>
      `
    },
    "data-science-analytics": {
      title: "Big Data Analytics & Business Intelligence",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=90",
      author: "Dr. James Wilson",
      date: "January 8, 2025",
      readTime: "12 min read",
      content: `
        <p class="text-lg text-muted-foreground mb-6">Data science and analytics are transforming how businesses make decisions and gain competitive advantages.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Real-Time Analytics</h2>
        <p class="mb-4">Modern businesses require real-time insights to make quick decisions. Streaming analytics platforms enable organizations to process and analyze data as it's generated.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Predictive Analytics</h2>
        <p class="mb-4">Machine learning models can predict future trends, customer behavior, and market changes. These predictions help businesses prepare and adapt proactively.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Data Visualization</h2>
        <p class="mb-4">Effective data visualization makes complex information accessible. Interactive dashboards and visual analytics tools help stakeholders understand insights quickly.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Ethical Data Practices</h2>
        <p class="mb-4">As data becomes more valuable, ethical considerations are crucial. Responsible data collection, privacy protection, and transparent algorithms are essential for trust.</p>
      `
    },
    "web-development-frameworks": {
      title: "Next-Gen Web Development Frameworks",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&q=90",
      author: "Alex Thompson",
      date: "January 5, 2025",
      readTime: "9 min read",
      content: `
        <p class="text-lg text-muted-foreground mb-6">The web development ecosystem is evolving rapidly. Explore the frameworks and technologies shaping modern web applications.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">React 19 and Server Components</h2>
        <p class="mb-4">React 19 introduces server components that enable better performance and SEO. This approach reduces client-side JavaScript while maintaining interactivity.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Next.js 15 Features</h2>
        <p class="mb-4">Next.js continues to lead in full-stack React development with improved routing, better performance, and enhanced developer experience.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">WebAssembly for Performance</h2>
        <p class="mb-4">WebAssembly enables near-native performance in browsers, opening new possibilities for complex applications like video editing, gaming, and data processing.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Progressive Web Apps</h2>
        <p class="mb-4">PWAs combine the best of web and mobile apps, offering offline functionality, push notifications, and app-like experiences without app store distribution.</p>
      `
    },
    "cloud-computing": {
      title: "Cloud Infrastructure & Scalability",
      category: "Cloud Computing",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=90",
      author: "Priya Sharma",
      date: "January 3, 2025",
      readTime: "11 min read",
      content: `
        <p class="text-lg text-muted-foreground mb-6">Cloud computing has become the foundation of modern digital infrastructure. Learn how to leverage cloud platforms effectively.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Multi-Cloud Strategies</h2>
        <p class="mb-4">Organizations are adopting multi-cloud approaches to avoid vendor lock-in and optimize costs. This strategy distributes workloads across different cloud providers.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Serverless Architecture</h2>
        <p class="mb-4">Serverless computing eliminates infrastructure management, allowing developers to focus on code. Functions-as-a-Service (FaaS) platforms scale automatically with demand.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Edge Computing</h2>
        <p class="mb-4">Edge computing brings computation closer to users, reducing latency and improving performance. This is crucial for real-time applications and IoT devices.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Cost Optimization</h2>
        <p class="mb-4">Effective cloud cost management requires monitoring, right-sizing resources, and using reserved instances. Automation tools help optimize spending without sacrificing performance.</p>
      `
    },
    "cybersecurity-practices": {
      title: "Essential Cybersecurity Practices",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&q=90",
      author: "David Kim",
      date: "December 28, 2024",
      readTime: "10 min read",
      content: `
        <p class="text-lg text-muted-foreground mb-6">Cybersecurity is more critical than ever. Implement these essential practices to protect your digital assets.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Multi-Factor Authentication</h2>
        <p class="mb-4">MFA adds an extra layer of security beyond passwords. Require multiple verification methods to significantly reduce unauthorized access risks.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Regular Security Updates</h2>
        <p class="mb-4">Keep all software, operating systems, and applications updated. Security patches address vulnerabilities that attackers exploit.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Employee Training</h2>
        <p class="mb-4">Human error is a major security risk. Regular training on phishing, social engineering, and safe browsing practices is essential.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Incident Response Planning</h2>
        <p class="mb-4">Have a clear plan for security incidents. Quick response can minimize damage and help recover from attacks more effectively.</p>
      `
    },
    "mobile-app-development": {
      title: "Mobile App Development Mastery",
      category: "Mobile App Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=90",
      author: "Sophie Martin",
      date: "December 25, 2024",
      readTime: "8 min read",
      content: `
        <p class="text-lg text-muted-foreground mb-6">Master the art of mobile app development with modern frameworks and best practices.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Cross-Platform Development</h2>
        <p class="mb-4">Frameworks like React Native, Flutter, and Xamarin enable building apps for multiple platforms with a single codebase, reducing development time and costs.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Native vs Hybrid</h2>
        <p class="mb-4">Choose between native and hybrid approaches based on performance requirements, development resources, and target platforms. Native apps offer better performance, while hybrid apps provide faster development.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">App Store Optimization</h2>
        <p class="mb-4">ASO is crucial for app discoverability. Optimize titles, descriptions, keywords, and visuals to improve rankings in app stores.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Performance Optimization</h2>
        <p class="mb-4">Mobile apps must be fast and responsive. Optimize images, minimize API calls, implement caching, and use lazy loading to improve performance.</p>
      `
    },
    "ui-ux-design": {
      title: "User Experience Design Excellence",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop&q=90",
      author: "Rachel Green",
      date: "December 22, 2024",
      readTime: "9 min read",
      content: `
        <p class="text-lg text-muted-foreground mb-6">Create exceptional user experiences through thoughtful design and user-centered approaches.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">User Research</h2>
        <p class="mb-4">Understanding users is the foundation of great UX. Conduct interviews, surveys, and usability testing to gain insights into user needs and behaviors.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Information Architecture</h2>
        <p class="mb-4">Organize content logically to help users find information easily. Clear navigation and intuitive structure improve usability significantly.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Accessibility First</h2>
        <p class="mb-4">Design for everyone. Ensure your interfaces are accessible to users with disabilities by following WCAG guidelines and testing with assistive technologies.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Iterative Design</h2>
        <p class="mb-4">Great UX is achieved through iteration. Prototype, test, gather feedback, and refine continuously to improve the user experience.</p>
      `
    }
  };

  const article = blogArticles[slug];

  if (!article) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden pt-20">
        <div className="container-max py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden pt-20">
      <article className="section-padding bg-background">
        <div className="container-max max-w-4xl">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          {/* Article Header */}
          <div className="mb-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-sm font-semibold text-primary">{article.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{article.title}</h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12">
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              fallback="/placeholder.svg"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/90 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* CTA Section */}
          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Learn More?</h2>
              <p className="text-muted-foreground mb-6">
                Explore our courses and start your journey in {article.category}
              </p>
              <Button size="lg" asChild>
                <Link to="/courses">View Courses</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  );
};

export default Blog;

