import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

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
        <div className="container-wide">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link to="/" className="text-3xl font-bold gradient-text">
                UAE Marketing Pro
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
        <div className="container-wide">
          <div className="py-16 text-center border-b border-border/30">
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your digital presence and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-accent">Get Free Strategy Session</Button>
              <Button className="btn-outline">View Our Portfolio</Button>
            </div>
          </div>
          
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