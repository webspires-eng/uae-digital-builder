import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Card, CardContent } from "@/components/ui/card";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/work" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 border-b border-border/30">
        <div className="mx-auto w-full max-w-[1380px] px-4 md:px-6">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link to="/" className="text-3xl font-bold gradient-text">
                Spirs
              </Link>
            </div>
            
            <nav className="hidden lg:flex space-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:text-glow relative ${
                    location.pathname === item.href
                      ? "text-primary text-glow"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button className="btn-accent text-sm">
                Request Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-border/30 mt-20">
        <div className="mx-auto w-full max-w-[1380px] px-4 md:px-6">
          {/* ======= CTA ======= */}
        <section className="py-16">
          <div className="mx-auto w-full max-w-[1380px] px-4 md:px-6">
            <Card className="rounded-3xl border-border/40 bg-gradient-to-r from-primary/10 via-accent/10 to-transparent">
              <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Ready to accelerate your growth?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Let’s map a UAE-ready strategy and start executing this week.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button className="btn-accent">Request Free Consultation</Button>
                  <Button variant="outline">Contact Us</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
          
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="lg:col-span-2">
                <Link to="/" className="text-3xl font-bold gradient-text mb-6 block">
                  UAE Marketing Pro
                </Link>
                <p className="text-muted-foreground text-lg mb-8 max-w-md">
                  Dubai's premier digital marketing agency combining local expertise with global standards.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Office 201, Dubai Media City, UAE</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+971 4 123 4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@uaemarketing.com</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-6 text-primary">Quick Links</h3>
                <ul className="space-y-3">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link 
                        to={item.href}
                        className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-6 text-primary">Our Services</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="hover:text-primary transition-colors cursor-pointer">SEO Optimization</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Social Media Marketing</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Content Strategy</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">PPC Advertising</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/30 py-8 text-center">
            <p className="text-muted-foreground">
              © 2024 UAE Marketing Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;