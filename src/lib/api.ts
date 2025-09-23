const API = import.meta.env.VITE_API_URL || "http://localhost:1337";
const abs = (u?: string) => (u?.startsWith("http") ? u : u ? `${API}${u}` : "");

// Works with both shapes: { attributes: {...} } or flat keys
const attr = (item: any) => item?.attributes ?? item;
// Media helper: supports both .data.attributes.url and flat .url
const mediaUrl = (m: any) => abs(m?.data?.attributes?.url ?? m?.url ?? "");

/** List services */
export async function getServices() {
  const url = `${API}/api/services?populate=Featured&populate=Gallery`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch services (${res.status})`);
  const { data } = await res.json();

  return (data || []).map((item: any) => {
    const a = attr(item);
    return {
      id: item.id,
      title: a.Title ?? a.title,
      slug: a.slug ?? a.documentId, // prefer slug, fallback to documentId
      short: a.ShortDescriptions ?? a.shortDescriptions ?? "",
      description: a.Descriptions ?? a.descriptions ?? [],
      featured: mediaUrl(a.Featured ?? a.featured),
      gallery:
        (a.Gallery?.data ?? a.gallery?.data ?? a.Gallery ?? a.gallery ?? []).map(
          (g: any) => mediaUrl(g)
        ),
    };
  });
}

/** Single service by slug (or documentId fallback) */
export async function getServiceBySlug(slug: string) {
  const url =
    `${API}/api/services` +
    `?filters[$or][0][slug][$eq]=${encodeURIComponent(slug)}` +
    `&filters[$or][1][documentId][$eq]=${encodeURIComponent(slug)}` +
    `&populate=Featured&populate=Gallery`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch service (${res.status})`);
  const { data } = await res.json();
  if (!data?.[0]) return null;

  const item = data[0];
  const a = attr(item);
  return {
    id: item.id,
    title: a.Title ?? a.title,
    slug: a.slug ?? a.documentId,
    short: a.ShortDescriptions ?? a.shortDescriptions ?? "",
    description: a.Descriptions ?? a.descriptions ?? [],
    featured: mediaUrl(a.Featured ?? a.featured),
    gallery:
      (a.Gallery?.data ?? a.gallery?.data ?? a.Gallery ?? a.gallery ?? []).map(
        (g: any) => mediaUrl(g)
      ),
  };
}
