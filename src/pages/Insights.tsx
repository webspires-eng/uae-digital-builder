import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Target, Zap, Search, Share2, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Insights = () => {
  const featuredArticle = {
    id: 1,
    title: "The Ultimate Guide to SEO in Dubai: Dominating Local Search in 2024",
    excerpt: "Discover the proven strategies that helped our clients achieve 200% increase in organic traffic. From Arabic keyword optimization to local business schema, we cover everything you need to know about SEO in the UAE market.",
    category: "SEO",
    readTime: "12 min read",
    publishDate: "December 15, 2024",
    image: "/placeholder.svg",
    author: "Sarah Al-Mahmoud",
    authorRole: "SEO Director",
    views: "2.4K",
    shares: "156"
  };

  const articles = [
    {
      id: 2,
      title: "Social Media Marketing Trends in the UAE: What's Working in 2024",
      excerpt: "Instagram Reels, LinkedIn carousels, and TikTok marketing - discover which platforms are driving the highest ROI for UAE businesses and how to leverage them effectively.",
      category: "Social Media",
      readTime: "8 min read",
      publishDate: "December 12, 2024",
      image: "/placeholder.svg",
      author: "Ahmed Hassan",
      authorRole: "Social Media Strategist",
      views: "1.8K",
      shares: "98"
    },
    {
      id: 3,
      title: "PPC Advertising in Dubai: Maximizing ROI with Smart Bidding Strategies",
      excerpt: "Learn how to optimize Google Ads and Meta campaigns for the competitive Dubai market. Real case studies showing 300%+ ROI improvements.",
      category: "PPC",
      readTime: "10 min read",
      publishDate: "December 10, 2024",
      image: "/placeholder.svg",
      author: "Maria Santos",
      authorRole: "PPC Specialist",
      views: "1.5K",
      shares: "87"
    },
    {
      id: 4,
      title: "Content Marketing That Converts: Lessons from 100+ UAE Campaigns",
      excerpt: "From Arabic content localization to video marketing, discover the content strategies that are driving engagement and conversions for UAE businesses.",
      category: "Content",
      readTime: "9 min read",
      publishDate: "December 8, 2024",
      image: "/placeholder.svg",
      author: "Omar Al-Rashid",
      authorRole: "Content Director",
      views: "2.1K",
      shares: "134"
    },
    {
      id: 5,
      title: "E-commerce Growth Strategies for Dubai Businesses in 2024",
      excerpt: "Shopping behavior changes, mobile commerce trends, and conversion optimization tactics that helped our e-commerce clients achieve 400% growth.",
      category: "E-commerce",
      readTime: "11 min read",
      publishDate: "December 5, 2024",
      image: "/placeholder.svg",
      author: "Fatima Al-Zahra",
      authorRole: "Growth Marketing Lead",
      views: "1.9K",
      shares: "112"
    },
    {
      id: 6,
      title: "LinkedIn Marketing for B2B Success in the UAE: A Complete Guide",
      excerpt: "How we generated 500+ qualified leads for tech companies using LinkedIn. Advanced targeting, content strategies, and automation tools that work.",
      category: "B2B Marketing",
      readTime: "13 min read",
      publishDate: "December 3, 2024",
      image: "/placeholder.svg",
      author: "Khalid Al-Mansoori",
      authorRole: "B2B Marketing Director",
      views: "2.7K",
      shares: "189"
    },
    {
      id: 7,
      title: "Marketing Analytics: Key Metrics Every UAE Business Should Track",
      excerpt: "Stop guessing, start measuring. The essential KPIs and analytics tools that will transform your marketing decision-making process.",
      category: "Analytics",
      readTime: "7 min read",
      publishDate: "November 30, 2024",
      image: "/placeholder.svg",
      author: "Lisa Chen",
      authorRole: "Data Analytics Manager",
      views: "1.3K",
      shares: "76"
    }
  ];

  const categories = [
    { name: "All", count: 24, icon: Target },
    { name: "SEO", count: 8, icon: Search },
    { name: "Social Media", count: 6, icon: Share2 },
    { name: "PPC", count: 4, icon: Zap },
    { name: "Content", count: 3, icon: Users },
    { name: "Analytics", count: 3, icon: TrendingUp }
  ];

  const popularTags = [
    "Dubai SEO", "Social Media UAE", "Google Ads", "Content Marketing", 
    "LinkedIn Marketing", "Instagram Growth", "PPC Optimization", "Local SEO",
    "E-commerce", "B2B Marketing", "Marketing Analytics", "Brand Strategy"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Digital Marketing Insights
            </Badge>
            <h1 className="gradient-text mb-8">
              Expert Insights & Industry Knowledge
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay ahead with our latest digital marketing insights, case studies, and strategies 
              specifically tailored for the UAE market. Learn from our experience with 500+ successful campaigns.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.name}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
              >
                <category.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                <span className="font-medium group-hover:text-primary">{category.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="mb-20">
        <div className="container-wide">
          <div className="card-premium overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                  <Badge className="bg-accent/10 text-accent border-accent/20">
                    Featured Article
                  </Badge>
                  <Badge variant="outline">
                    {featuredArticle.category}
                  </Badge>
                </div>
                
                <h2 className="text-3xl font-bold mb-6 hover:text-primary transition-colors cursor-pointer">
                  {featuredArticle.title}
                </h2>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredArticle.publishDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>{featuredArticle.views}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-semibold text-primary text-sm">
                        {featuredArticle.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{featuredArticle.author}</div>
                      <div className="text-sm text-muted-foreground">{featuredArticle.authorRole}</div>
                    </div>
                  </div>
                  
                  <Button className="btn-accent">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
              
              <div className="space-y-8">
                {articles.map((article) => (
                  <div key={article.id} className="card-premium group hover:card-glow">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="aspect-video md:aspect-square">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Eye className="h-3 w-3" />
                              <span>{article.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Share2 className="h-3 w-3" />
                              <span>{article.shares}</span>
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors cursor-pointer">
                          {article.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="font-semibold text-primary text-xs">
                                {article.author.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="text-sm font-medium">{article.author}</div>
                              <div className="text-xs text-muted-foreground">{article.authorRole}</div>
                            </div>
                          </div>
                          
                          <div className="text-sm text-muted-foreground">
                            {article.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button className="btn-outline">
                  Load More Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Newsletter Signup */}
              <div className="card-premium">
                <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Get the latest digital marketing insights and strategies delivered to your inbox weekly.
                </p>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-border/30 bg-background/50 focus:border-primary focus:outline-none"
                  />
                  <Button className="btn-accent w-full">
                    Subscribe Now
                  </Button>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="card-premium">
                <h3 className="text-xl font-semibold mb-6">Popular Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1 text-sm rounded-lg border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Free Resources */}
              <div className="card-premium">
                <h3 className="text-xl font-semibold mb-6">Free Resources</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors cursor-pointer">
                    <div className="font-medium mb-2">SEO Checklist 2024</div>
                    <div className="text-sm text-muted-foreground">50-point comprehensive guide</div>
                  </div>
                  <div className="p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors cursor-pointer">
                    <div className="font-medium mb-2">Social Media Calendar</div>
                    <div className="text-sm text-muted-foreground">12-month content planner</div>
                  </div>
                  <div className="p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors cursor-pointer">
                    <div className="font-medium mb-2">PPC Audit Template</div>
                    <div className="text-sm text-muted-foreground">Campaign optimization framework</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/20">
        <div className="container-wide">
          <div className="card-premium text-center">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Ready to Apply These Strategies?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't just read about success - experience it. Let our experts implement 
              these proven strategies for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-accent">
                Get Free Strategy Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link to="/contact">
                <Button className="btn-outline">
                  Contact Our Experts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;