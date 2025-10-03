import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Opposite Pohru Crossing Nowgam Bypass, NH 1, Srinagar, J&K-190015",
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["9103997281"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["contactgenagogy@gmail.com"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM", "Sun: Closed"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-subtle section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our courses? Want to speak with an advisor? 
              We're here to help you start your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="course">Course of Interest</Label>
                        <Input
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          placeholder="Which course interests you?"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us more about your goals and how we can help..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Contact Card */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Need Immediate Help?</h3>
                  <p className="text-primary-foreground/90 mb-4">
                    Speak directly with our admissions team
                  </p>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="text-primary bg-primary-foreground hover:bg-primary-foreground/90"
                  >
                    Call Now: 9103997281
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Find Us</h2>
            <p className="text-muted-foreground">Visit our campus and experience our learning environment</p>
          </div>
          
          <div className="bg-card rounded-lg shadow-medium overflow-hidden animate-fade-in">
            <div className="aspect-video bg-gradient-to-br from-primary-light to-accent">
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    Opposite Pohru Crossing Nowgam Bypass, NH 1, Srinagar, J&K-190015
                  </p>
                  <Button variant="outline" className="mt-4">
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our courses and enrollment process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="animate-fade-in">
                <h3 className="font-semibold text-foreground mb-2">How do I enroll in a course?</h3>
                <p className="text-muted-foreground text-sm">
                  You can enroll online through our website, visit our campus, or call our admissions team. 
                  We'll guide you through the entire process.
                </p>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <h3 className="font-semibold text-foreground mb-2">Do you offer flexible scheduling?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! We offer evening, weekend, and online classes to accommodate working professionals 
                  and students with busy schedules.
                </p>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h3 className="font-semibold text-foreground mb-2">What support do you provide after completion?</h3>
                <p className="text-muted-foreground text-sm">
                  We offer job placement assistance, career counseling, alumni network access, 
                  and continued learning opportunities.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <h3 className="font-semibold text-foreground mb-2">Are there any prerequisites?</h3>
                <p className="text-muted-foreground text-sm">
                  Prerequisites vary by course. Most of our beginner courses require only basic computer 
                  literacy and enthusiasm to learn.
                </p>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <h3 className="font-semibold text-foreground mb-2">Do you offer payment plans?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we offer flexible payment plans and financing options to make our courses 
                  accessible to everyone.
                </p>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <h3 className="font-semibold text-foreground mb-2">Can I get a refund if I'm not satisfied?</h3>
                <p className="text-muted-foreground text-sm">
                  We offer a 30-day money-back guarantee. If you're not satisfied with your course, 
                  we'll provide a full refund.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
