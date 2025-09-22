import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to transform your digital presence? Let's discuss how we can 
              help your business achieve its goals in the UAE market.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+971 50 123 4567"
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, and how we can help..."
                        required
                        className="w-full min-h-[150px]"
                      />
                    </div>
                    
                    <Button type="submit" className="btn-primary w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Office Location</div>
                      <div className="text-muted-foreground text-sm">
                        Office 201, Dubai Media City<br />
                        United Arab Emirates
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground text-sm">
                        +971 4 123 4567
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground text-sm">
                        info@uaemarketing.com
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Business Hours</div>
                      <div className="text-muted-foreground text-sm">
                        Sun - Thu: 9:00 AM - 6:00 PM<br />
                        Fri - Sat: Closed
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response */}
              <Card className="card-elegant border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Quick Response Guarantee</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    We pride ourselves on fast response times. Expect to hear 
                    back from our team within 24 hours, usually much sooner.
                  </p>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 text-accent mr-2" />
                    <span className="text-accent font-medium">Average response: 4 hours</span>
                  </div>
                </CardContent>
              </Card>

              {/* Free Consultation CTA */}
              <Card className="card-elegant bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Free Consultation</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Not sure where to start? Book a free 30-minute consultation 
                    to discuss your digital marketing needs.
                  </p>
                  <Button className="btn-accent w-full">
                    Book Free Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="font-semibold mb-2">How quickly can you start working on my project?</h3>
                <p className="text-muted-foreground text-sm">
                  We can typically begin working on your project within 1-2 weeks 
                  of signing the agreement, depending on the scope and complexity.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you work with businesses outside Dubai?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we work with clients throughout the UAE and the broader 
                  GCC region, with deep understanding of local markets.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What industries do you specialize in?</h3>
                <p className="text-muted-foreground text-sm">
                  We work across various industries including real estate, technology, 
                  healthcare, F&B, e-commerce, and financial services.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How do you measure success?</h3>
                <p className="text-muted-foreground text-sm">
                  We focus on measurable results like increased traffic, leads, 
                  conversions, and ROI, with regular reporting and transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;