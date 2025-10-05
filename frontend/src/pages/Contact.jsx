import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
// removed toast import to avoid bottom popups

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorText, setErrorText] = useState("");
  // previewUrl removed; we won't show development previews

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.course) {
      setErrorText("Please fill in all required fields.");
      return;
    }
    try {
      setSubmitting(true);
      setErrorText("");
      const res = await fetch("https://formspree.io/f/mrbylkak", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email, // Formspree will use this as Reply-To
          phone: formData.phone,
          course: formData.course,
          message: formData.message,
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || body?.ok === false) {
        const msg = body?.message || body?.errors?.map?.(e => e.message)?.join?.("; ") || "Failed to send message";
        throw new Error(msg);
      }
      setFormData({ name: "", email: "", phone: "", course: "", message: "" });
      setShowSuccess(true);
    } catch (err) {
      setErrorText(err?.message || "Failed to send message, please try again.");
    }
    finally { setSubmitting(false); }
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

                    {errorText && (
                      <div className="text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded p-2">
                        {errorText}
                      </div>
                    )}
                    <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                      <Send className="mr-2 h-4 w-4" />
                      {submitting ? "Sending..." : "Send Message"}
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
       <div className="container-max grid md:grid-cols-2 gap-8">
        
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Visit Us</h2>
          <p className="text-gray-600">
            Our institute is located inside <strong>Vitasta School of Law and Humanities</strong>, 
            Opposite Pohru Crossing, Nowgam Bypass, Srinagar, J&K - 190015
          </p>
          <a
            href="https://www.google.com/maps/dir//2RGJ%2BVRC+Vitasta+School+of+Law+and+Humanities,+Pohru+Crossing+Nowgam+Bye+Pass,+NH+1,+A,+Nowgam,+Srinagar,+Jammu+and+Kashmir+190015/@34.0272014,74.829342,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x38e18ef48a66c6a5:0x33ccf3bb0e71f387!2m2!1d74.8319608!2d34.0271714!3e0?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Get Directions
          </a>
        </div>

        {/* Google Map Embed */}
        <div className="rounded-lg overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.6497085374785!2d74.82934197454964!3d34.027201419054215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18ef48a66c6a5%3A0x33ccf3bb0e71f387!2sVitasta%20School%20of%20Law%20and%20Humanities!5e0!3m2!1sen!2sin!4v1759567511410!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowSuccess(false)} />
          <div className="relative bg-card text-card-foreground w-full max-w-md rounded-lg shadow-large border border-border p-6 animate-fade-in">
            <h3 className="text-xl font-semibold mb-2">Message sent</h3>
            <p className="text-muted-foreground mb-4">Thank you! We'll get back to you shortly.</p>
            <div className="flex justify-end">
              <Button onClick={() => setShowSuccess(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
