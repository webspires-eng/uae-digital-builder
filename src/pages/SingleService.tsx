import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "react-router-dom";
import { Search, Users, PenTool, Target, ArrowLeft, Check } from "lucide-react";

const SingleService = () => {
  const { serviceId } = useParams();

  const services = {
    "seo": {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description: "Comprehensive SEO services designed to improve your website's visibility on search engines and drive high-quality organic traffic that converts into customers.",
      longDescription: "In the competitive UAE digital landscape, appearing at the top of search results is crucial for business success. Our SEO specialists combine technical expertise with deep market knowledge to help your website rank higher for the keywords that matter most to your business.",
      benefits: [
        "Increased organic website traffic",
        "Higher search engine rankings", 
        "Better user experience and site performance",
        "Long-term sustainable growth",
        "Cost-effective marketing solution",
        "Enhanced brand credibility and trust"
      ],
      process: [
        {
          title: "SEO Audit & Analysis",
          description: "Comprehensive analysis of your current website performance, technical issues, and competitive landscape in the UAE market."
        },
        {
          title: "Keyword Research & Strategy",
          description: "In-depth research to identify the most valuable keywords for your business, including local UAE search terms and buyer intent keywords."
        },
        {
          title: "On-Page Optimization",
          description: "Optimize your website's content, meta tags, headers, and internal linking structure to improve search engine visibility."
        },
        {
          title: "Technical SEO Implementation",
          description: "Address technical issues affecting your site's performance, including site speed, mobile optimization, and crawlability."
        },
        {
          title: "Content Strategy & Creation",
          description: "Develop and implement a content strategy that attracts your target audience and establishes your authority in your industry."
        },
        {
          title: "Monitoring & Optimization",
          description: "Continuous monitoring of your SEO performance with regular reporting and strategy adjustments to maintain and improve rankings."
        }
      ],
      packages: ["Basic SEO Package", "Advanced SEO & Content", "Enterprise SEO Solution"]
    },
    "social-media": {
      icon: Users,
      title: "Social Media Marketing",
      description: "Strategic social media marketing services that build authentic connections with your audience across Instagram, LinkedIn, X, and other platforms popular in the UAE.",
      longDescription: "Social media is where conversations happen and relationships are built. Our social media experts create engaging content and community management strategies that turn followers into loyal customers and brand advocates in the UAE market.",
      benefits: [
        "Increased brand awareness and recognition",
        "Enhanced customer engagement and loyalty",
        "Direct communication channel with customers",
        "Cost-effective advertising options",
        "Real-time customer feedback and insights",
        "Community building and brand advocacy"
      ],
      process: [
        {
          title: "Social Media Audit",
          description: "Analyze your current social media presence and identify opportunities for improvement and growth."
        },
        {
          title: "Strategy Development",
          description: "Create a comprehensive social media strategy aligned with your business goals and target audience in the UAE."
        },
        {
          title: "Content Planning & Creation",
          description: "Develop engaging content calendars with high-quality posts, stories, and multimedia content."
        },
        {
          title: "Community Management",
          description: "Active engagement with your audience, responding to comments, messages, and building relationships."
        },
        {
          title: "Paid Social Advertising",
          description: "Strategic paid campaigns to reach new audiences and achieve specific business objectives."
        },
        {
          title: "Analytics & Reporting",
          description: "Regular reporting on social media performance with insights and recommendations for continuous improvement."
        }
      ],
      packages: ["Social Media Starter", "Complete Social Management", "Enterprise Social Suite"]
    },
    "content-creation": {
      icon: PenTool,
      title: "Content Creation & Strategy",
      description: "Professional content creation services including blog posts, videos, marketing copy, and brand storytelling that resonates with UAE audiences.",
      longDescription: "Content is the foundation of all successful digital marketing. Our content creators and strategists develop compelling narratives that not only engage your audience but also drive measurable business results across all digital channels.",
      benefits: [
        "Professional, high-quality content",
        "Improved brand storytelling and messaging",
        "Enhanced SEO through valuable content",
        "Increased audience engagement",
        "Consistent brand voice across all channels",
        "Better conversion rates and lead generation"
      ],
      process: [
        {
          title: "Content Audit & Strategy",
          description: "Evaluate existing content and develop a comprehensive strategy aligned with your business objectives."
        },
        {
          title: "Content Calendar Planning",
          description: "Create detailed content calendars with topics, formats, and publishing schedules across all platforms."
        },
        {
          title: "Content Creation",
          description: "Professional writing, video production, and graphic design tailored to your brand and audience."
        },
        {
          title: "SEO Optimization",
          description: "Optimize all content for search engines while maintaining readability and engagement."
        },
        {
          title: "Distribution & Promotion",
          description: "Strategic distribution across multiple channels to maximize reach and engagement."
        },
        {
          title: "Performance Analysis",
          description: "Track content performance and adjust strategy based on data-driven insights."
        }
      ],
      packages: ["Content Essentials", "Complete Content Solution", "Enterprise Content Hub"]
    },
    "ppc-advertising": {
      icon: Target,
      title: "Paid Advertising (PPC)",
      description: "Strategic paid advertising campaigns on Google Ads and social media platforms, optimized for maximum ROI in the competitive UAE market.",
      longDescription: "Paid advertising provides immediate visibility and measurable results. Our PPC specialists create and manage high-performing campaigns that deliver qualified leads and sales while maximizing your advertising budget efficiency.",
      benefits: [
        "Immediate visibility and traffic",
        "Precise audience targeting",
        "Measurable ROI and performance",
        "Flexible budget control",
        "Quick testing and optimization",
        "Competitive advantage in search results"
      ],
      process: [
        {
          title: "Campaign Strategy & Setup",
          description: "Develop comprehensive PPC strategy with goal-aligned campaign structure and targeting parameters."
        },
        {
          title: "Keyword Research & Selection",
          description: "Identify high-value keywords with optimal search volume and conversion potential for your business."
        },
        {
          title: "Ad Creation & Testing",
          description: "Create compelling ad copy and visuals with A/B testing to maximize click-through and conversion rates."
        },
        {
          title: "Landing Page Optimization",
          description: "Ensure landing pages are optimized for conversions and provide excellent user experience."
        },
        {
          title: "Campaign Management",
          description: "Daily monitoring and optimization of campaigns, bids, and targeting for optimal performance."
        },
        {
          title: "Analytics & Reporting",
          description: "Detailed performance reporting with insights and recommendations for continuous improvement."
        }
      ],
      packages: ["PPC Starter", "Advanced PPC Management", "Enterprise Advertising Suite"]
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <Layout>
        <div className="py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const IconComponent = service.icon;

  return (
    <Layout>
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <IconComponent className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{service.description}</p>
              <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
            </div>
            <div className="card-elegant">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((step, index) => (
                <Card key={index} className="card-elegant">
                  <CardHeader>
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mb-4">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Packages Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Service Packages</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {service.packages.map((pkg, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2">
                  {pkg}
                </Badge>
              ))}
            </div>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              We offer flexible service packages tailored to different business needs and budgets. 
              Contact us to discuss which package would be the best fit for your goals.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how this service can help achieve your specific business goals. 
              Schedule a free consultation to learn more about our approach and pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-primary">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleService;