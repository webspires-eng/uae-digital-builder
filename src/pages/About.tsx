// src/pages/About.tsx
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-image.webp";
import trustpilot from "@/assets/trustpilot-logo-icon.svg";
import google from "@/assets/google-map-icon.svg";


import {
  CheckCircle2,
  Shield,
  Sparkles,
  Users,
  TrendingUp,
  Rocket,
  Globe2,
  Package, // New icon for Projects Delivered
  UserPlus, // New icon for Active Clients
  Briefcase, // New icon for Years Experience
  MapPin, // New icon for Emirates Served
} from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    quote:
      "UAE Digital transformed our online presence. Local insight + global best practices = results.",
    name: "Ahmed S.",
    role: "CEO, Tech Startup",
  },
  {
    quote:
      "A game-changer for our marketing. Strategy first, clean execution, transparent reporting.",
    name: "Fatima K.",
    role: "Marketing Manager, F&B Brand",
  },
  {
    quote:
      "Helped us reach new audiences and grow significantly in the UAE market.",
    name: "Sarah M.",
    role: "Director, Luxury Real Estate",
  },
  {
    quote:
      "Their strategies gave us measurable ROI within months. Highly recommended.",
    name: "Omar R.",
    role: "E-commerce Lead",
  },
  {
    quote:
      "Best agency for performance marketing in the UAE. Professional and transparent.",
    name: "Laila T.",
    role: "CMO, Retail Brand",
  },
];

const About = () => {
  // Define stats with icons
  const trustStats = [
    { k: "120+", v: "Projects Delivered", icon: Package },
    { k: "45+", v: "Active Clients", icon: UserPlus },
    { k: "8+", v: "Years Experience", icon: Briefcase },
    { k: "5", v: "Emirates Served", icon: MapPin },
  ];

  return (
    <Layout>
      <div className="bg-background">
        {/* ======= HERO ======= */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-muted/40 via-background to-background" />
          <div className="relative mx-auto w-full max-w-[1380px] px-4 md:px-6 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              {/* Text */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/60 px-3 py-1 text-xs uppercase tracking-wide text-muted-foreground">
                  About us
                </span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                  Building brands for the{" "}
                  <span className="gradient-text">UAE digital economy</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  We’re a Dubai-based team blending local insight with global
                  performance marketing. Strategy first, execution fast, results
                  measured.
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {[
                    "Local-first strategy for the UAE market",
                    "Performance culture: test → learn → scale",
                    "Clear reporting, zero fluff",
                    "Full-funnel: SEO, PPC, Social, Content",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button className="btn-accent">Get Free Strategy Session</Button>
                  <Button variant="outline">See Our Work</Button>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-br from-primary/25 via-accent/20 to-transparent blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-card/60 shadow-lg">
                  <img
                    src={hero}
                    alt="UAE Digital team collaborating"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Floating stat */}
                <div className="hidden md:flex absolute -bottom-6 -left-6">
                  <Card className="rounded-2xl bg-black/30 backdrop-blur-md border-white/10">
                    <CardContent className="p-4 sm:p-5">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="h-5 w-5 text-white" />
                        <div>
                          <div className="text-sm text-white/80">
                            Avg. client growth (12 mo)
                          </div>
                          <div className="text-lg font-semibold text-white">+172%</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======= TRUST STATS ======= */}
        <section className="py-12">
          <div className="mx-auto w-full max-w-[1380px] px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {trustStats.map((s, i) => {
                const Icon = s.icon; // Get the icon component
                return (
                  <div
                    key={i}
                    // Added more visible card styling with hover effect
                    className="group rounded-2xl border border-border/40 bg-card/40 py-6 px-4
                               hover:border-primary/50 hover:bg-card/60 transition-all duration-300"
                  >
                    <Icon className="mx-auto h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" /> {/* Icon */}
                    <div className="text-3xl font-bold gradient-text">{s.k}</div> {/* Gradient text for numbers */}
                    <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======= STORY + VALUES ======= */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-[1380px] px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Story */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Born in Dubai, UAE Digital started with a simple belief:
                  businesses here deserve world-class marketing with local
                  intelligence. We combine the UAE’s competitive pace with global
                  best practices to build brands that scale.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  From ambitious startups in Dubai Internet City to established
                  enterprises in Abu Dhabi, we’ve seen what works. Our approach is
                  practical: clarify goals, build a sharp plan, execute fast, and
                  iterate based on data.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We stay ahead of trends without chasing hype — respecting the
                  cultural nuance and consumer behavior that make the UAE unique.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { Icon: Rocket, title: "Fast Execution" },
                    { Icon: Shield, title: "Transparent Reporting" },
                    { Icon: Globe2, title: "Global Standards" },
                  ].map(({ Icon, title }, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border/40 bg-card/40 p-4 flex items-center gap-3"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      <div className="text-sm font-medium">{title}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Values */}
              <Card className="rounded-2xl bg-background/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-5">Our Values</h3>
                  <div className="space-y-4">
                    {[
                      { Icon: Sparkles, text: "Excellence in every campaign" },
                      { Icon: Shield, text: "Transparency in process and results" },
                      { Icon: TrendingUp, text: "Innovation that drives growth" },
                      { Icon: Users, text: "Partnership mindset with every client" },
                    ].map(({ Icon, text }, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary/10">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <p className="text-muted-foreground">{text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ======= TESTIMONIALS (SLIDER) ======= */}
        <section className="py-20 bg-muted/20">
          <div className="mx-auto w-full max-w-[1380px] px-4 md:px-6">
            {/* Heading + rating */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
              <div className="mt-4 flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-yellow-400"
                    >
                      <path d="M12 .587l3.668 7.431L24 9.75l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.597 0 9.75l8.332-1.732z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Rated <span className="font-semibold text-foreground">4.9/5</span>{" "}
                  based on <span className="font-semibold text-foreground">989 reviews</span>
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <img src={trustpilot} alt="Trustpilot" className="h-6" />
                  <img src={google} alt="Google" className="h-6" />
                </div>
              </div>
            </div>

            {/* Slider (loop + autoplay, no arrows/dots) */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-6 overflow-visible"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <Card className="h-full border border-border/40 bg-background/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <p className="italic text-foreground/90 flex-grow text-lg leading-relaxed">
                        “{t.quote}”
                      </p>
                      <div className="mt-6">
                        <div className="font-semibold text-lg">{t.name}</div>
                        <div className="text-sm text-muted-foreground">{t.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        
      </div>
    </Layout>
  );
};

export default About;