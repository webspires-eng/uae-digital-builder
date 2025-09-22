import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">UAE Digital</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a passionate team of digital marketing experts based in Dubai, 
              committed to helping businesses across the UAE achieve exceptional growth 
              in the digital landscape.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in the heart of Dubai, UAE Digital emerged from a simple belief: 
                every business deserves to thrive in the digital age. We combine deep 
                understanding of the local UAE market with cutting-edge global digital 
                marketing strategies.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our team brings together years of experience working with businesses 
                across the Emirates, from ambitious startups in Dubai Internet City to 
                established enterprises in Abu Dhabi. We understand the unique challenges 
                and opportunities that come with marketing in this dynamic region.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As local experts with a global mindset, we stay ahead of digital trends 
                while respecting cultural nuances that make the UAE market unique. 
                Your success is our mission.
              </p>
            </div>
            <div className="card-elegant">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-muted-foreground">Excellence in every campaign we create</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-muted-foreground">Transparency in our processes and results</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-muted-foreground">Innovation that drives real business growth</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-muted-foreground">Partnership approach with every client</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-card">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "UAE Digital transformed our online presence completely. Their 
                    understanding of the local market combined with global best 
                    practices delivered outstanding results."
                  </p>
                  <div className="font-semibold">Ahmed S.</div>
                  <div className="text-sm text-muted-foreground">CEO, Tech Startup</div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-card">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "Working with UAE Digital has been a game-changer for our 
                    marketing efforts. Their strategic approach and execution 
                    exceeded all our expectations."
                  </p>
                  <div className="font-semibold">Fatima K.</div>
                  <div className="text-sm text-muted-foreground">Marketing Manager, F&B Brand</div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-card">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "The team's expertise in both traditional and digital marketing 
                    helped us reach new audiences and grow our business 
                    significantly in the UAE market."
                  </p>
                  <div className="font-semibold">Sarah M.</div>
                  <div className="text-sm text-muted-foreground">Director, Luxury Real Estate</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;