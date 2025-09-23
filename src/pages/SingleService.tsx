// src/pages/SingleService.tsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getServiceBySlug } from "@/lib/api";

// Blocks → plain text (for simple rendering)
const blocksToText = (blocks: any): string =>
  Array.isArray(blocks)
    ? blocks
        .map((b: any) =>
          Array.isArray(b.children)
            ? b.children.map((c: any) => c?.text ?? "").join("")
            : ""
        )
        .join("\n\n")
    : typeof blocks === "string"
    ? blocks
    : "";

export default function SingleService() {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<any | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;
    getServiceBySlug(slug)
      .then(setService)
      .catch((e) => setError(e?.message || "Failed to load service"));
  }, [slug]);

  if (error)
    return (
      <Layout>
        <div className="max-w-[1380px] mx-auto px-4 py-10 text-red-600">{error}</div>
      </Layout>
    );

  if (!service)
    return (
      <Layout>
        <div className="max-w-[1380px] mx-auto px-4 py-10">Loading…</div>
      </Layout>
    );

  const fallback = "https://source.unsplash.com/1200x600/?business,marketing";
  const hasGallery = Array.isArray(service.gallery) && service.gallery.length > 0;

  return (
    <Layout>
      <main className="bg-background">
        {/* HERO (40vh) */}
        <section className="relative h-[40vh] min-h-[320px] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-transparent pointer-events-none" />
          <div className="relative w-full">
            <div className="max-w-[1380px] mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                {service.title}
              </h1>

              {/* Breadcrumb under title */}
              <nav className="mt-3 text-sm text-muted-foreground">
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link to="/" className="hover:text-primary transition-colors">
                      Home
                    </Link>
                  </li>
                  <li className="opacity-60">/</li>
                  <li>
                    <Link to="/services" className="hover:text-primary transition-colors">
                      Services
                    </Link>
                  </li>
                  <li className="opacity-60">/</li>
                  <li className="text-foreground">{service.title}</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="pb-16 md:pb-20">
          <div className="max-w-[1380px] mx-auto px-4">
            {/* Optional short teaser below hero */}
            {service.shortText && (
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                {service.shortText}
              </p>
            )}

            {/* Gallery first (fallback to one image) */}
            {hasGallery ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {service.gallery.map((url: string, i: number) => (
                  <img
                    key={i}
                    src={url}
                    alt={`${service.title} ${i + 1}`}
                    className="w-full h-64 object-cover rounded-xl"
                    loading="lazy"
                  />
                ))}
              </div>
            ) : (
              <img
                src={service.featured || fallback}
                alt={service.title}
                className="w-full h-72 md:h-96 object-cover rounded-xl mb-10"
                loading="lazy"
              />
            )}

            {/* Long description */}
            <div className="prose max-w-3xl">
              <p className="text-lg text-muted-foreground whitespace-pre-line">
                {blocksToText(service.description)}
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
