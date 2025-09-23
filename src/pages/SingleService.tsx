import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getServices } from "../lib/api";

export default function SingleService() {
  const { id } = useParams(); // /services/:id
  const [service, setService] = useState<any | null>(null);
  const [error, setError] = useState<string>(""); // 👈 add this

  useEffect(() => {
    getServices()
      .then((all) => {
        const s = all.find((x) => String(x.id) === id);
        setService(s || null);
      })
      .catch((e) => {
        console.error(e);
        setError("Failed to load service.");
      });
  }, [id]);

  if (error) {
    return <div className="text-red-600 p-4">{error}</div>;
  }

  if (!service) return <p>Loading…</p>;

  return (
    <div>
      <h1>{service.title}</h1>
      <img src={service.featured} alt={service.title} />
      <div dangerouslySetInnerHTML={{ __html: service.description }} />
      <div className="grid grid-cols-3 gap-4 mt-6">
        {service.gallery.map((url: string, i: number) => (
          <img key={i} src={url} alt={`${service.title}-${i}`} />
        ))}
      </div>
    </div>
  );
}
