import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "react-router-dom";
import {
  Search,
  Users,
  PenTool,
  Target,
  ArrowLeft,
  Check,
  Database,
  Megaphone,
  ShoppingCart,
  ShieldCheck,
} from "lucide-react";

const SingleService = () => {
  const { serviceId } = useParams();

  const services = {
    // ---- Existing services ----
    seo: {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description:
        "Comprehensive SEO services designed to improve your website's visibility on search engines and drive high-quality organic traffic that converts into customers.",
      longDescription:
        "In the competitive UAE digital landscape, appearing at the top of search results is crucial. Our SEO specialists combine technical expertise with market knowledge to help your website rank for the keywords that matter most.",
      benefits: [
        "Increased organic website traffic",
        "Higher search engine rankings",
        "Better user experience and site performance",
        "Long-term sustainable growth",
        "Cost-effective marketing",
        "Enhanced brand credibility and trust",
      ],
      process: [
        {
          title: "SEO Audit & Analysis",
          description:
            "Comprehensive analysis of current performance, technical issues, and competitors.",
        },
        {
          title: "Keyword Research & Strategy",
          description:
            "Identify high-value keywords including local UAE search terms and buyer intent.",
        },
        {
          title: "On-Page Optimization",
          description:
            "Optimize content, meta tags, headers, and internal linking for visibility.",
        },
        {
          title: "Technical SEO",
          description:
            "Fix site speed, mobile responsiveness, indexing, and crawlability.",
        },
        {
          title: "Content Strategy & Creation",
          description:
            "Create authoritative content that attracts the right audience.",
        },
        {
          title: "Monitoring & Optimization",
          description:
            "Ongoing tracking, reporting, and iteration to maintain/improve rankings.",
        },
      ],
      packages: ["Basic SEO Package", "Advanced SEO & Content", "Enterprise SEO Solution"],
    },

    "social-media": {
      icon: Users,
      title: "Social Media Marketing",
      description:
        "Strategic social media marketing that builds authentic connections across Instagram, LinkedIn, and X for UAE audiences.",
      longDescription:
        "We create engaging content and community strategies that turn followers into loyal customers and advocates.",
      benefits: [
        "Increased brand awareness",
        "Higher engagement and loyalty",
        "Direct customer communication",
        "Cost-effective growth",
        "Real-time feedback and insights",
        "Community building and advocacy",
      ],
      process: [
        { title: "Social Audit", description: "Assess accounts, content, and performance." },
        {
          title: "Strategy Development",
          description: "Define goals, audiences, content pillars, and KPI targets.",
        },
        {
          title: "Content Planning & Creation",
          description: "Calendar with posts, stories, and multimedia assets.",
        },
        {
          title: "Community Management",
          description: "Replies, DMs, moderation, and relationship building.",
        },
        {
          title: "Paid Social",
          description: "Targeted campaigns to reach and convert new audiences.",
        },
        {
          title: "Analytics & Reporting",
          description: "Monthly insights and recommendations to scale.",
        },
      ],
      packages: ["Social Media Starter", "Complete Social Management", "Enterprise Social Suite"],
    },

    "content-creation": {
      icon: PenTool,
      title: "Content Creation & Strategy",
      description:
        "Professional content creation — blogs, videos, and copy — that resonates with UAE audiences and drives growth.",
      longDescription:
        "Content powers every channel. We craft narratives that engage, rank, and convert across your funnel.",
      benefits: [
        "High-quality, consistent content",
        "Clear brand storytelling",
        "SEO lift from valuable assets",
        "Greater engagement",
        "Unified brand voice",
        "Better conversions and leads",
      ],
      process: [
        { title: "Content Audit & Strategy", description: "Gap analysis and roadmap." },
        {
          title: "Calendar Planning",
          description: "Topics, formats, and schedule across channels.",
        },
        { title: "Creation", description: "Writing, video, and design production." },
        { title: "SEO Optimization", description: "On-page best practices baked in." },
        {
          title: "Distribution",
          description: "Multi-channel rollout to maximize reach.",
        },
        { title: "Performance Analysis", description: "Data-driven iteration." },
      ],
      packages: ["Content Essentials", "Complete Content Solution", "Enterprise Content Hub"],
    },

    "ppc-advertising": {
      icon: Target,
      title: "Paid Advertising (PPC)",
      description:
        "ROI-focused campaigns on Google Ads and social platforms, optimized for maximum return in the UAE market.",
      longDescription:
        "PPC delivers immediate visibility and measurable results. We structure, launch, and optimize campaigns that convert — without wasting spend.",
      benefits: [
        "Immediate traffic and leads",
        "Precise audience targeting",
        "Measurable ROI",
        "Flexible budgets",
        "Rapid testing and learning",
        "Competitive edge in SERPs",
      ],
      process: [
        {
          title: "Strategy & Setup",
          description: "Goal mapping, account structure, tracking, and assets.",
        },
        {
          title: "Keyword & Audience Research",
          description: "High-intent terms and segments with buying power.",
        },
        {
          title: "Ad Creation & Testing",
          description: "Compelling copy/creative with continuous A/B tests.",
        },
        {
          title: "Landing Page Optimization",
          description: "Speed, UX, and persuasion tuned for conversions.",
        },
        {
          title: "Management & Optimization",
          description: "Bids, budgets, negatives, and scaling winners.",
        },
        {
          title: "Analytics & Reporting",
          description: "Clear performance insights and next steps.",
        },
      ],
      packages: ["PPC Starter", "Advanced PPC Management", "Enterprise Advertising Suite"],
    },

    // ---- New services added ----
    crm: {
      icon: Database,
      title: "CRM Development",
      description:
        "Custom CRM solutions to streamline workflows, centralize data, and improve productivity across your teams.",
      longDescription:
        "We design and build CRM systems tailored to your processes — integrating data sources, automating tasks, and surfacing insights so your team can move faster.",
      benefits: [
        "Centralized customer data",
        "Automated workflows",
        "Better sales visibility",
        "Improved retention and LTV",
        "Secure data and backups",
        "Integrations with your stack",
      ],
      process: [
        { title: "Discovery & Mapping", description: "Requirements, users, and data flows." },
        { title: "Solution Architecture", description: "Data model and integrations plan." },
        { title: "Build & Integrations", description: "Custom objects, fields, and automations." },
        { title: "Data Migration", description: "Clean, import, validate historical data." },
        { title: "Training & SOPs", description: "Team onboarding and documentation." },
        { title: "Support & Iteration", description: "Ongoing tuning and enhancements." },
      ],
      packages: ["Starter CRM", "Professional CRM Suite", "Enterprise CRM Platform"],
    },

    "google-ads": {
      icon: Target,
      title: "Google Ads",
      description:
        "Full-funnel search, Performance Max, and YouTube campaigns engineered for profitable growth.",
      longDescription:
        "From account structure to creative testing, we manage Google Ads that consistently drive qualified leads and sales — with clear reporting.",
      benefits: [
        "High-intent lead capture",
        "Scalable paid search",
        "Better CPC/CPA control",
        "Creative & copy testing",
        "Granular conversion tracking",
        "Transparent reporting",
      ],
      process: [
        { title: "Audit/Build", description: "Account structure and tracking foundations." },
        { title: "Research", description: "Keywords, audiences, and competitors." },
        { title: "Creative", description: "Responsive search ads and YouTube assets." },
        { title: "Launch", description: "Budgets, bidding strategies, and guardrails." },
        { title: "Optimize", description: "Query mining, negatives, and scaling." },
        { title: "Report", description: "KPI dashboards and insights to grow." },
      ],
      packages: ["Search Essentials", "PMax + YouTube Growth", "Full-Funnel Ads Suite"],
    },

    "meta-ads": {
      icon: Megaphone,
      title: "Meta Ads (Facebook & Instagram)",
      description:
        "Creative-led prospecting and retargeting across Facebook & Instagram designed to convert and scale.",
      longDescription:
        "We pair thumb-stopping creatives with data-driven structures to grow reach, acquisition, and ROAS on Meta.",
      benefits: [
        "Broader reach & awareness",
        "Efficient customer acquisition",
        "Strong retargeting performance",
        "Creative experimentation at scale",
        "First-party data leverage",
        "Clear ROAS tracking",
      ],
      process: [
        { title: "Account Audit", description: "Baselines, gaps, and opportunities." },
        { title: "Strategy", description: "Funnel design, audiences, and budgets." },
        { title: "Creative System", description: "Hooks, angles, formats, and testing plan." },
        { title: "Launch", description: "Campaigns, ad sets, and safeguards." },
        { title: "Scale", description: "Budget pacing, LALs, and CBO/ABO tuning." },
        { title: "Analyze", description: "Creative post-mortems and next tests." },
      ],
      packages: ["Meta Starter", "Growth Retargeting", "Full-Funnel Meta Scale"],
    },

    shopify: {
      icon: ShoppingCart,
      title: "Shopify Development",
      description:
        "Conversion-focused Shopify builds with custom themes, app integrations, and performance optimization.",
      longDescription:
        "We create storefronts that load fast, look premium, and convert — aligned to your brand and operations.",
      benefits: [
        "Custom theme development",
        "Seamless app integrations",
        "Optimized product pages",
        "Checkout and UX improvements",
        "Automation for ops",
        "Scalable performance",
      ],
      process: [
        { title: "Discovery", description: "Goals, brand, and functional requirements." },
        { title: "UX/UI Design", description: "Wireframes and polished visuals." },
        { title: "Theme Dev", description: "Liquid, sections, and metafields." },
        { title: "Integrations", description: "Apps, payments, shipping, and analytics." },
        { title: "QA & Launch", description: "Performance, SEO, and cross-device testing." },
        { title: "Iterate", description: "A/B tests and CRO roadmap." },
      ],
      packages: ["Launch Store", "Growth Store", "Pro Commerce Suite"],
    },

    "google-guarantee": {
      icon: ShieldCheck,
      title: "Google Guarantee",
      description:
        "Win trust and capture local demand with Google’s Local Services Ads and the Google Guarantee badge.",
      longDescription:
        "We set up, verify, and optimize your LSA presence so you consistently attract high-intent local leads.",
      benefits: [
        "Verified trust badge",
        "Higher local lead volume",
        "Pay-per-lead pricing",
        "Prominent placement",
        "Call tracking & recordings",
        "Clear ROI visibility",
      ],
      process: [
        { title: "Eligibility & Docs", description: "Background checks and requirements." },
        { title: "Profile Setup", description: "Business details, service areas, hours." },
        { title: "Verification", description: "Submit proofs and pass checks." },
        { title: "Go Live", description: "Bids, budget, and lead handling SOPs." },
        { title: "Optimize", description: "Categories, reviews, and responses." },
        { title: "Report", description: "Lead quality and ROI insights." },
      ],
      packages: ["LSA Setup", "Verified + Optimize", "LSA Scale Program"],
    },
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <Layout>
        <div className="py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The service you're looking for doesn't exist.
          </p>
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
            <Link
              to="/services"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
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
              We offer flexible packages tailored to different needs and budgets. Contact us to
              choose the best fit for your goals.
            </p>
          </div>

          
        </div>
      </div>
    </Layout>
  );
};

export default SingleService;
