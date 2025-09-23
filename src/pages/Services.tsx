// src/pages/Services.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getServices } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

/** Renders IconHub icons:
 * - prefers raw SVG (serviceiconSvg)
 * - falls back to icon name (serviceiconName)
 * - no icon if both missing
 */
function ServiceIcon({
  name,
  svg,
  className = "w-12 h-12",
}: {
  name?: string;
  svg?: string;
  className?: string;
}) {
  const svgTrim = (svg || "").trim();
  if (svgTrim && svgTrim.startsWith("<svg")) {
    return (
      <div
        className={className + " [&>svg]:w-full [&>svg]:h-full text-primary"}
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: svgTrim }}
      />
    );
  }
  if (name) {
    return <Icon icon={name} className={className + " text-primary"} aria-hidden="true" />;
  }
  return null; // no fallback
}

export default function Services() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const list = await getServices();
        if (mounted) setServices(Array.isArray(list) ? list : []);
      } catch (e: any) {
        console.error("getServices failed:", e);
        if (mounted) setError(e?.message || "Failed to load services");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading)
    return (
      <Layout>
        <div className="py-16 text-center">Loading…</div>
      </Layout>
    );

  if (error)
    return (
      <Layout>
        <div className="py-16 text-center text-red-600">{error}</div>
      </Layout>
    );

  if (!services.length)
    return (
      <Layout>
        <div className="py-16 text-center">No services yet.</div>
      </Layout>
    );

  return (
    <Layout>
      <main className="section-padding bg-background">
        <div className="container-wide">
          {/* Page header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h1>
            <p className="text-lg text-muted-foreground">
              Results-focused digital services tailored to your business.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Card
                key={s.slug || s.id}
                className="card-premium hover:card-glow group overflow-hidden text-center"
              >
                <div className="flex justify-center pt-6">
                  <ServiceIcon name={s.serviceiconName} svg={s.serviceiconSvg} />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{s.title}</h3>

                  {s.shortText && (
                    <p className="text-muted-foreground mb-6">{s.shortText}</p>
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
      </main>
    </Layout>
  );
}
