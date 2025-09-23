// src/pages/Services.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getServices } from "@/lib/api"; // <- no ".ts" extension

export default function Services() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getServices()
      .then(setServices)
      .catch((e) => setError(e?.message || "Failed to load services"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="py-16 text-center">Loading…</div>;
  if (error) return <div className="py-16 text-center text-red-600">{error}</div>;
  if (services.length === 0) return <div className="py-16 text-center">No services yet.</div>;

  const fallback = "https://source.unsplash.com/800x600/?marketing,business";

  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((s) => (
        <div key={s.slug} className="rounded-xl border p-6">
          <img src={s.featured || fallback} alt={s.title} className="rounded mb-4" />
          <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
          {s.short && (
            <div className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: s.short }} />
          )}
          <Link to={`/services/${s.slug}`} className="text-primary underline">
            Learn more
          </Link>
        </div>
      ))}
    </div>
  );
}
