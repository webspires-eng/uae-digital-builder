// src/pages/SingleService.tsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getServiceBySlug } from "@/lib/api";

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

  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (!service) return <div className="p-6">Loading…</div>;

  const fallback = "https://source.unsplash.com/1200x600/?business,marketing";

  // Descriptions is blocks (array). Simple text fallback:
  const blocksToText = (blocks: any) =>
    Array.isArray(blocks)
      ? blocks
          .map((b) =>
            Array.isArray(b.children)
              ? b.children.map((c: any) => c.text || "").join("")
              : ""
          )
          .join("\n\n")
      : "";

  return (
    <div className="container mx-auto px-4 py-10">
      <Link to="/services" className="text-muted-foreground hover:text-primary">← Back to Services</Link>

      <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6">{service.title}</h1>

      <img
        src={service.featured || fallback}
        alt={service.title}
        className="w-full h-72 md:h-96 object-cover rounded-xl mb-8"
      />

      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground whitespace-pre-line">
          {blocksToText(service.description)}
        </p>
      </div>

      {service.gallery?.length > 0 && (
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {service.gallery.map((url: string, i: number) => (
            <img key={i} src={url} alt={`${service.title}-${i}`} className="rounded-lg object-cover w-full h-40" />
          ))}
        </div>
      )}
    </div>
  );
}
