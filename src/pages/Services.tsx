import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Users, PenTool, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: "seo",
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility on search engines and drive organic traffic that converts. Our SEO strategies are tailored for the UAE market.",
      features: ["Keyword Research & Strategy", "On-Page Optimization", "Technical SEO Audits", "Local SEO for UAE Market"]
    },
    {
      id: "social-media",
      icon: Users,
      title: "Social Media Marketing",
      description: "Build engaging brand communities on Instagram, LinkedIn, and X (formerly Twitter). Connect authentically with your UAE audience.",
      features: ["Content Calendar Planning", "Community Management", "Influencer Partnerships", "Social Media Advertising"]
    },
    {
      id: "content-creation",
      icon: PenTool,
      title: "Content Creation & Strategy",
      description: "Create compelling blog posts, videos, and marketing copy that resonates with your audience and drives engagement across all platforms.",
      features: ["Blog Writing & Strategy", "Video Content Production", "Marketing Copy", "Brand Storytelling"]
    },
    {
      id: "ppc-advertising",
      icon: Target,
      title: "Paid Advertising (PPC)",
      description: "Run targeted campaigns on Google and social media platforms to maximize ROI. Every dirham spent is optimized for maximum return.",
      features: ["Google Ads Management", "Social Media Ads", "Campaign Optimization", "Performance Analytics"]
    }
  ];

  return (
    <Layout>
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital marketing solutions designed to accelerate your 
              business growth in the competitive UAE market.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="card-elegant hover:shadow-elegant transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/services/${service.id}`}>
                      <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help your business achieve its digital marketing goals. 
              Schedule a free consultation with our experts today.
            </p>
            <Link to="/contact">
              <Button className="btn-primary text-lg px-8 py-4">
                Schedule Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;