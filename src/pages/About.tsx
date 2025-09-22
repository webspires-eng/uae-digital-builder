import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-image.jpg";
import {
  CheckCircle2,
  Shield,
  Sparkles,
  Users,
  TrendingUp,
  Rocket,
  Globe2,
} from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Page Wrapper */}
      <div className="bg-background">
        {/* ======= HERO ======= */}
        <section className="relative overflow-hidden">
          {/* soft bg wash */}
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

                {/* Hero bullets */}
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
                {/* decorative ring */}
                <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-br from-primary/25 via-accent/20 to-transparent blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-card/60 shadow-lg">
                  <img
                    src={hero}
                    alt="UAE Digital team collaborating"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* quick stats floating card (mobile hides) */}
                <div className="hidden md:flex absolute -bottom-6 -left-6">
                  <Card className="rounded-2xl bg-background/80 backdrop-blur-sm border-border/50">
                    <CardContent className="p-4 sm:p-5">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">
                            Avg. client growth (12 mo)
                          </div>
                          <div className="text-lg font-semibold">+172%</div>
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
              {[
                { k: "120+", v: "Projects Delivered" },
                { k: "45+", v: "Active Clients" },
                { k: "8+", v: "Years Experience" },
                { k: "5", v: "Emirates Served" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border/40 bg-card/40 py-6"
                >
                  <div className="text-3xl font-bold">{s.k}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======= STORY + VALUES ======= */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6">
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

                {/* Mini feature row */}
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
                      {
                        Icon: Sparkles,
                        text: "Excellence in every campaign",
                      },
                      {
                        Icon: Shield,
                        text: "Transparency in process and results",
                      },
                      {
                        Icon: TrendingUp,
                        text: "Innovation that drives growth",
                      },
                      {
                        Icon: Users,
                        text: "Partnership mindset with every client",
                      },
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

       

        {/* ======= TESTIMONIALS ======= */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-[1380px] px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Our Clients Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
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
              ].map((t, i) => (
                <Card key={i} className="border-border/40 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground italic">“{t.quote}”</p>
                    <div className="mt-4 font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

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
      </div>
    </Layout>
  );
};

export default About;
