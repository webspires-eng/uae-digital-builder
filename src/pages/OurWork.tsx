import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const OurWork = () => {
  const projects = [
    {
      id: "luxury-real-estate",
      title: "Luxury Real Estate",
      category: "Real Estate",
      description: "Increased organic traffic by 150%",
      results: "150% increase in organic traffic, 85% boost in qualified leads",
      services: ["SEO", "Content Marketing", "PPC"],
      image: "/placeholder.svg",
      testimonial: "UAE Digital transformed our online presence and helped us reach high-net-worth clients effectively.",
      client: "Sarah M., Director"
    },
    {
      id: "tech-startup",
      title: "Tech Startup",
      category: "Technology", 
      description: "Generated 300+ qualified leads in 6 months",
      results: "300+ qualified leads, 45% conversion rate improvement",
      services: ["Social Media", "PPC", "Content Creation"],
      image: "/placeholder.svg",
      testimonial: "Their strategic approach helped us scale from startup to series A funding round.",
      client: "Ahmed S., CEO"
    },
    {
      id: "fnb-brand",
      title: "F&B Brand",
      category: "Food & Beverage",
      description: "Built engaged community of 50K+ followers",
      results: "50K+ social followers, 200% increase in foot traffic",
      services: ["Social Media", "Influencer Marketing", "Content Creation"],
      image: "/placeholder.svg",
      testimonial: "The team understood our brand perfectly and created content that truly resonated with our audience.",
      client: "Fatima K., Marketing Manager"
    },
    {
      id: "healthcare-clinic",
      title: "Healthcare Clinic",
      category: "Healthcare",
      description: "Dominated local search with 95% keyword ranking",
      results: "95% first-page rankings, 120% increase in appointments",
      services: ["Local SEO", "Content Marketing", "Online Reputation"],
      image: "/placeholder.svg",
      testimonial: "Professional, reliable, and results-driven. Exactly what we needed for our clinic.",
      client: "Dr. Omar H., Clinic Director"
    },
    {
      id: "ecommerce-fashion",
      title: "Fashion E-commerce",
      category: "E-commerce",
      description: "Achieved 400% ROI on advertising spend",
      results: "400% ROI on ad spend, 180% increase in online sales",
      services: ["PPC", "Social Media Ads", "Conversion Optimization"],
      image: "/placeholder.svg",
      testimonial: "Their data-driven approach to advertising helped us scale profitably in the competitive fashion market.",
      client: "Layla A., E-commerce Manager"
    },
    {
      id: "financial-services",
      title: "Financial Services",
      category: "Finance",
      description: "Built authority with thought leadership content",
      results: "250% increase in website traffic, 90% boost in consultation bookings",
      services: ["Content Strategy", "SEO", "LinkedIn Marketing"],
      image: "/placeholder.svg",
      testimonial: "They positioned us as industry leaders through strategic content and thought leadership.",
      client: "Mohammad K., Managing Partner"
    }
  ];

  return (
    <Layout>
      <div className="section-padding bg-background">
        <div className="container-wide">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Our Portfolio
            </Badge>
            <h1 className="gradient-text mb-8">
              Success Stories That Inspire
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover how we've helped businesses across the UAE achieve remarkable 
              growth through strategic digital marketing initiatives and data-driven results.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <Card key={project.id} className="relative overflow-hidden rounded-xl group hover:shadow-xl transition">
  {/* Left Accent Stripe */}
  <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-primary to-accent" />

  {/* Image */}
  <div className="relative aspect-video">
    <img 
      src={project.image || "https://source.unsplash.com/800x600/?business,marketing"} 
      alt={project.title}
      className="w-full h-full object-cover rounded-t-xl group-hover:scale-[1.02] transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
    <Badge className="absolute bottom-3 left-3 bg-white/90 text-black">
      {project.category}
    </Badge>
  </div>

  {/* Content */}
  <CardContent className="p-6 pl-7">
    <div className="flex items-start justify-between mb-3">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <Link to={`/work/${project.id}`}>
        <Button size="icon" variant="ghost" className="hover:bg-primary/10">
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </Link>
    </div>

    <p className="text-muted-foreground mb-3 flex items-center">
      <TrendingUp className="w-4 h-4 mr-2 text-primary" /> {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mb-4">
      {project.services.map((s) => (
        <Badge key={s} variant="outline" className="text-xs">
          {s}
        </Badge>
      ))}
    </div>

    {/* <div className="text-sm text-muted-foreground italic mb-1">
      “{project.testimonial}”
    </div>
    <div className="text-xs text-muted-foreground">— {project.client}</div> */}

    <div className="mt-5">
      <Link to={`/work/${project.id}`}>
        <Button className="btn-accent">View Case Study</Button>
      </Link>
    </div>
  </CardContent>
</Card>

            ))}
          </div>

          {/* Stats Section */}
          <div className="card-premium mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">250%</div>
                <div className="text-muted-foreground">Average ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">8</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          
          
        </div>
      </div>
    </Layout>
  );
};

export default OurWork;