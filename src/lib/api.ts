// src/lib/api.ts
const API = import.meta.env.VITE_API_URL || "http://localhost:1337";

// make URL absolute (handles relative Strapi media paths)
const abs = (u?: string) => (u?.startsWith("http") ? u : u ? `${API}${u}` : "");

// works with both shapes: { attributes:{…} } or flat
const attr = (item: any) => item?.attributes ?? item;

// media helper: supports both .data.attributes.url and flat .url
const mediaUrl = (m: any) => abs(m?.data?.attributes?.url ?? m?.url ?? "");

// Blocks -> plain text (handy for card teasers)
const blocksToText = (blocks: any): string => {
  if (!Array.isArray(blocks)) return typeof blocks === "string" ? blocks : "";
  return blocks
    .map((b: any) =>
      Array.isArray(b.children)
        ? b.children.map((c: any) => c?.text ?? "").join("")
        : ""
    )
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
};

/** List services — fields: slug, title, short, description, gallery, serviceicon */
export async function getServices() {
  // Only populate what exists on your model
  const url = `${API}/api/services?populate=gallery&fields[0]=slug&fields[1]=title&fields[2]=short&fields[3]=description&fields[4]=serviceicon`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch services (${res.status})`);
  const { data } = await res.json();

  return (data || []).map((item: any) => {
    const a = attr(item);
    return {
      id: item.id,
      slug: a.slug,
      title: a.title,
      short: a.short ?? "",                          // blocks
      shortText: blocksToText(a.short ?? a.description ?? ""),
      description: a.description ?? "",              // blocks
      serviceicon: a.serviceicon ?? "",              // custom field (string)
      // use first gallery image as featured
      featured: mediaUrl(a.gallery?.data?.[0]),
      gallery: (a.gallery?.data ?? []).map((g: any) => mediaUrl(g)),
    };
  });
}

/** Single service by slug — same fields */
export async function getServiceBySlug(slug: string) {
  const url =
    `${API}/api/services` +
    `?filters[slug][$eq]=${encodeURIComponent(slug)}` +
    `&populate=gallery` +
    `&fields[0]=slug&fields[1]=title&fields[2]=short&fields[3]=description&fields[4]=serviceicon`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch service (${res.status})`);
  const { data } = await res.json();
  if (!data?.[0]) return null;

  const item = data[0];
  const a = attr(item);

  return {
    id: item.id,
    slug: a.slug,
    title: a.title,
    short: a.short ?? "",
    description: a.description ?? "",
    serviceicon: a.serviceicon ?? "",
    featured: mediaUrl(a.gallery?.data?.[0]),
    gallery: (a.gallery?.data ?? []).map((g: any) => mediaUrl(g)),
  };
}
