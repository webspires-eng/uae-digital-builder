// src/pages/Services.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getServices } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const list = await getServices();
        setServices(Array.isArray(list) ? list : []);
      } catch (e: any) {
        console.error("getServices failed:", e);
        setError(e?.message || "Failed to load services");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div className="py-16 text-center">Loading…</div>;
  if (error) return <div className="py-16 text-center text-red-600">{error}</div>;
  if (services.length === 0) return <div className="py-16 text-center">No services yet.</div>;

  return (
    <div className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h1>
          <p className="text-lg text-muted-foreground">
            Results-focused digital services tailored to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <Card
              key={s.slug || s.id}
              className="card-premium hover:card-glow group overflow-hidden text-center"
            >
              {/* icon on top (use serviceicon; no “Service” badge) */}
              {s.serviceicon && (
                <div className="flex justify-center pt-6">
                  <img
                    src={s.serviceicon}
                    alt={`${s.title} icon`}
                    className="w-16 h-16 object-contain"
                    loading="lazy"
                  />
                </div>
              )}

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>

                {/* use shortText (already plain text) to avoid [object Object] */}
                {s.shortText && (
                  <p className="text-muted-foreground mb-6">
                    {s.shortText}
                  </p>
                )}

                <Link to={`/services/${s.slug}`}>
                  <Button
                    variant="outline"
                    className="w-full group-hover:border-primary group-hover:text-primary"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
