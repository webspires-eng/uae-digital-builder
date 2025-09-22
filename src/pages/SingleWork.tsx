import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Target, Users, Calendar, Award } from "lucide-react";

const SingleWork = () => {
  const { workId } = useParams();

  const projects = {
    "luxury-real-estate": {
      title: "Luxury Real Estate",
      category: "Real Estate",
      client: "Premium Properties Dubai",
      duration: "12 months",
      description: "Comprehensive digital marketing campaign for a luxury real estate company specializing in high-end properties in Dubai Marina and Downtown Dubai.",
      challenge: "The client was struggling to reach high-net-worth individuals and expatriate professionals looking for luxury properties. Their existing marketing efforts weren't generating qualified leads, and their online presence lacked the premium feel expected in the luxury real estate market.",
      solution: "We developed a multi-channel digital strategy focusing on SEO for luxury property keywords, premium content creation showcasing properties, and targeted PPC campaigns reaching affluent demographics. We also implemented advanced lead scoring to identify the most qualified prospects.",
      results: [
        { metric: "Organic Traffic", value: "150%", description: "increase in website visitors" },
        { metric: "Qualified Leads", value: "85%", description: "boost in high-value inquiries" },
        { metric: "Search Rankings", value: "95%", description: "first-page rankings for target keywords" },
        { metric: "Conversion Rate", value: "65%", description: "improvement in lead conversion" }
      ],
      services: ["SEO", "Content Marketing", "PPC", "Social Media Marketing"],
      testimonial: "UAE Digital transformed our online presence and helped us reach high-net-worth clients effectively. The quality of leads and overall ROI exceeded our expectations.",
      clientName: "Sarah M., Director",
      keyFeatures: [
        "Virtual property tours integration",
        "Luxury lifestyle content strategy",
        "High-net-worth audience targeting",
        "Premium lead qualification system"
      ],
      timeline: [
        { phase: "Month 1-2", activity: "Strategy development and website optimization" },
        { phase: "Month 3-4", activity: "Content creation and SEO implementation" },
        { phase: "Month 5-8", activity: "Paid advertising campaigns launch" },
        { phase: "Month 9-12", activity: "Optimization and scaling successful campaigns" }
      ]
    },
    "tech-startup": {
      title: "Tech Startup",
      category: "Technology",
      client: "InnovateHub UAE",
      duration: "8 months",
      description: "Growth marketing campaign for a B2B SaaS startup targeting SMEs in the UAE with innovative business automation solutions.",
      challenge: "As a new entrant in the competitive tech space, the startup needed to build brand awareness, generate qualified leads, and establish credibility in the UAE market while working with a limited marketing budget.",
      solution: "We implemented a lean startup marketing approach with focus on content marketing, LinkedIn marketing for B2B outreach, strategic partnerships, and conversion-optimized landing pages. We also developed thought leadership content to establish the founders as industry experts.",
      results: [
        { metric: "Qualified Leads", value: "300+", description: "generated in 6 months" },
        { metric: "Conversion Rate", value: "45%", description: "improvement from optimized funnels" },
        { metric: "Brand Awareness", value: "250%", description: "increase in brand search volume" },
        { metric: "Customer Acquisition Cost", value: "40%", description: "reduction through optimization" }
      ],
      services: ["Social Media Marketing", "PPC", "Content Creation", "LinkedIn Marketing"],
      testimonial: "Their strategic approach helped us scale from startup to series A funding round. The lead quality and conversion optimization were game-changers for our business.",
      clientName: "Ahmed S., CEO",
      keyFeatures: [
        "B2B lead generation funnels",
        "Thought leadership content",
        "Partnership marketing programs",
        "Conversion rate optimization"
      ],
      timeline: [
        { phase: "Month 1-2", activity: "Market research and strategy development" },
        { phase: "Month 3-4", activity: "Content marketing and LinkedIn campaigns" },
        { phase: "Month 5-6", activity: "Paid advertising and lead generation" },
        { phase: "Month 7-8", activity: "Optimization and scaling for funding round" }
      ]
    },
    "fnb-brand": {
      title: "F&B Brand",
      category: "Food & Beverage",
      client: "Arabica Fusion Restaurant",
      duration: "10 months",
      description: "Social media marketing and brand building campaign for an upscale Middle Eastern fusion restaurant chain across Dubai and Abu Dhabi.",
      challenge: "The restaurant faced intense competition in Dubai's saturated F&B market. They needed to differentiate their brand, build a loyal customer base, and drive consistent foot traffic while maintaining their premium positioning.",
      solution: "We created an engaging social media strategy focusing on food photography, behind-the-scenes content, influencer partnerships with local food bloggers, and user-generated content campaigns. We also implemented location-based advertising and loyalty programs.",
      results: [
        { metric: "Social Followers", value: "50K+", description: "engaged followers across platforms" },
        { metric: "Foot Traffic", value: "200%", description: "increase in restaurant visits" },
        { metric: "Online Orders", value: "180%", description: "growth in delivery orders" },
        { metric: "Customer Retention", value: "75%", description: "improvement through loyalty programs" }
      ],
      services: ["Social Media Marketing", "Influencer Marketing", "Content Creation", "Local SEO"],
      testimonial: "The team understood our brand perfectly and created content that truly resonated with our audience. Our restaurants are consistently booked, and our social media engagement is phenomenal.",
      clientName: "Fatima K., Marketing Manager",
      keyFeatures: [
        "Food photography and styling",
        "Influencer collaboration program",
        "User-generated content campaigns", 
        "Location-based advertising"
      ],
      timeline: [
        { phase: "Month 1-2", activity: "Brand strategy and content planning" },
        { phase: "Month 3-5", activity: "Content creation and influencer partnerships" },
        { phase: "Month 6-8", activity: "Community building and engagement" },
        { phase: "Month 9-10", activity: "Loyalty program launch and optimization" }
      ]
    },
    "healthcare-clinic": {
      title: "Healthcare Clinic",
      category: "Healthcare",
      client: "Dubai Medical Center",
      duration: "6 months",
      description: "Local SEO and digital presence optimization for a multi-specialty healthcare clinic serving expatriate communities in Dubai.",
      challenge: "The clinic struggled with online visibility despite excellent patient reviews. They needed to improve local search rankings, build trust through online reputation management, and attract patients from diverse expatriate communities.",
      solution: "We implemented comprehensive local SEO optimization, created multilingual content for different communities, developed patient education resources, and established robust online reputation management. We also optimized Google My Business and healthcare-specific directories.",
      results: [
        { metric: "Local Rankings", value: "95%", description: "first-page rankings for medical keywords" },
        { metric: "Appointment Bookings", value: "120%", description: "increase in online bookings" },
        { metric: "Online Reviews", value: "4.8/5", description: "average rating improvement" },
        { metric: "Patient Acquisition", value: "80%", description: "increase in new patients" }
      ],
      services: ["Local SEO", "Content Marketing", "Online Reputation Management", "Healthcare Marketing"],
      testimonial: "Professional, reliable, and results-driven. Exactly what we needed for our clinic. Patient inquiries have increased significantly, and our online reputation is stronger than ever.",
      clientName: "Dr. Omar H., Clinic Director",
      keyFeatures: [
        "Multilingual SEO optimization",
        "Patient education content",
        "Google My Business optimization",
        "Healthcare compliance management"
      ],
      timeline: [
        { phase: "Month 1", activity: "Local SEO audit and optimization" },
        { phase: "Month 2-3", activity: "Content creation and directory listings" },
        { phase: "Month 4-5", activity: "Reputation management and review campaigns" },
        { phase: "Month 6", activity: "Performance optimization and reporting" }
      ]
    },
    "ecommerce-fashion": {
      title: "Fashion E-commerce",
      category: "E-commerce", 
      client: "ModestFashion UAE",
      duration: "9 months",
      description: "Performance marketing and conversion optimization for an online modest fashion retailer targeting Muslim women across the GCC region.",
      challenge: "High competition in online fashion retail, seasonal fluctuations, and the need to build trust in a market where customers prefer to try before buying. The brand also needed to balance modern marketing with cultural sensitivity.",
      solution: "We developed a comprehensive e-commerce marketing strategy including dynamic product ads, seasonal campaigns, influencer partnerships with modest fashion creators, and conversion rate optimization through A/B testing of product pages and checkout processes.",
      results: [
        { metric: "Return on Ad Spend", value: "400%", description: "ROI on advertising investment" },
        { metric: "Online Sales", value: "180%", description: "increase in monthly revenue" },
        { metric: "Conversion Rate", value: "95%", description: "improvement in website conversions" },
        { metric: "Customer Lifetime Value", value: "150%", description: "increase through retention campaigns" }
      ],
      services: ["PPC", "Social Media Advertising", "Conversion Rate Optimization", "Email Marketing"],
      testimonial: "Their data-driven approach to advertising helped us scale profitably in the competitive fashion market. The ROI speaks for itself, and their understanding of our target market is exceptional.",
      clientName: "Layla A., E-commerce Manager",
      keyFeatures: [
        "Dynamic product advertising",
        "Seasonal campaign management",
        "Modest fashion influencer network",
        "Advanced conversion tracking"
      ],
      timeline: [
        { phase: "Month 1-2", activity: "E-commerce audit and strategy development" },
        { phase: "Month 3-4", activity: "Advertising campaigns setup and optimization" },
        { phase: "Month 5-7", activity: "Conversion optimization and scaling" },
        { phase: "Month 8-9", activity: "Retention marketing and loyalty programs" }
      ]
    },
    "financial-services": {
      title: "Financial Services",
      category: "Finance",
      client: "Gulf Investment Partners",
      duration: "12 months",
      description: "Thought leadership and content marketing campaign for a boutique investment advisory firm targeting high-net-worth individuals and family offices.",
      challenge: "In the heavily regulated financial services industry, building trust and demonstrating expertise without making unrealistic promises was crucial. The firm needed to differentiate itself from larger institutions while maintaining compliance.",
      solution: "We developed a thought leadership strategy featuring market analysis content, educational resources about regional investment opportunities, LinkedIn marketing for networking, and compliance-approved case studies showcasing the firm's expertise.",
      results: [
        { metric: "Website Traffic", value: "250%", description: "increase in qualified visitors" },
        { metric: "Consultation Bookings", value: "90%", description: "boost in consultation requests" },
        { metric: "LinkedIn Engagement", value: "180%", description: "increase in professional network" },
        { metric: "Assets Under Management", value: "65%", description: "growth through digital leads" }
      ],
      services: ["Content Strategy", "SEO", "LinkedIn Marketing", "Compliance Marketing"],
      testimonial: "They positioned us as industry leaders through strategic content and thought leadership. Our client base has grown significantly, and we're now recognized as experts in regional investment opportunities.",
      clientName: "Mohammad K., Managing Partner",
      keyFeatures: [
        "Regulatory-compliant content",
        "Market analysis publications",
        "Professional networking strategy",
        "High-net-worth targeting"
      ],
      timeline: [
        { phase: "Month 1-3", activity: "Compliance review and content strategy" },
        { phase: "Month 4-6", activity: "Thought leadership content creation" },
        { phase: "Month 7-9", activity: "LinkedIn marketing and networking" },
        { phase: "Month 10-12", activity: "Lead nurturing and conversion optimization" }
      ]
    }
  };

  const project = projects[workId as keyof typeof projects];

  if (!project) {
    return (
      <Layout>
        <div className="py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/work">
            <Button>Back to Our Work</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/work" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Our Work
            </Link>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary">{project.category}</Badge>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{project.duration}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <Badge key={service} variant="outline">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="card-elegant">
              <h3 className="font-semibold mb-4 flex items-center">
                <Award className="w-5 h-5 text-accent mr-2" />
                Project Details
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Client:</span>
                  <span className="font-medium">{project.client}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{project.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="font-medium">{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Services:</span>
                  <span className="font-medium">{project.services.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-accent mr-3" />
              Results Achieved
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.results.map((result, index) => (
                <Card key={index} className="card-elegant text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold gradient-text mb-2">{result.value}</div>
                    <div className="font-medium mb-1">{result.metric}</div>
                    <div className="text-sm text-muted-foreground">{result.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 text-primary mr-2" />
                  The Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 text-accent mr-2" />
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </CardContent>
            </Card>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features & Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center p-4 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full mr-4"></div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-primary mr-3" />
              Project Timeline
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.timeline.map((phase, index) => (
                <Card key={index} className="card-elegant">
                  <CardHeader>
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mb-2">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{phase.phase}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{phase.activity}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12 text-center mb-16">
            <blockquote className="text-xl md:text-2xl font-medium mb-6 italic">
              "{project.testimonial}"
            </blockquote>
            <cite className="text-muted-foreground">— {project.clientName}</cite>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Similar Results?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create a customized strategy to achieve 
              exceptional results for your business in the UAE market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-primary">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/work">
                <Button variant="outline">
                  View More Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleWork;