const API = import.meta.env.VITE_API_URL || "http://localhost:1337";

const abs = (u?: string) =>
  u?.startsWith("http") ? u : u ? `${API}${u}` : "";

/**
 * Fetch all services
 */
export async function getServices() {
  const r = await fetch(`${API}/api/services?populate=featured,gallery`);
  const j = await r.json();

  return (j.data || []).map((item: any) => {
    const a = item.attributes;
    return {
      id: item.id,
      title: a.title,
      slug: a.slug,
      short: a.shortDescriptions, // Strapi field
      description: a.descriptions, // Strapi field
      featured: abs(a.featured?.data?.attributes?.url),
      gallery: (a.gallery?.data || []).map((g: any) =>
        abs(g.attributes.url)
      ),
    };
  });
}

/**
 * Fetch a single service by slug
 */
export async function getServiceBySlug(slug: string) {
  const r = await fetch(
    `${API}/api/services?filters[slug][$eq]=${encodeURIComponent(
      slug
    )}&populate=featured,gallery`
  );
  const j = await r.json();

  if (!j.data?.[0]) return null;

  const item = j.data[0];
  const a = item.attributes;

  return {
    id: item.id,
    title: a.title,
    slug: a.slug,
    short: a.shortDescriptions,
    description: a.descriptions,
    featured: abs(a.featured?.data?.attributes?.url),
    gallery: (a.gallery?.data || []).map((g: any) =>
      abs(g.attributes.url)
    ),
  };
}
