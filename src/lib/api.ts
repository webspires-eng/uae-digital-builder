// src/lib/api.ts

/** Base URL for Strapi API */
export const API = import.meta.env.VITE_API_URL || "http://localhost:1337";

/** Make a media URL absolute (Strapi returns relative paths) */
const abs = (u?: string) => (u?.startsWith("http") ? u : u ? `${API}${u}` : "");

/** Works with both shapes: { attributes:{…} } or flat */
const attr = (item: any) => item?.attributes ?? item;

/** Media helper: supports all common Strapi shapes */
const mediaUrl = (m: any) => {
  const url =
    m?.data?.attributes?.url ?? // relation (populated)
    m?.attributes?.url ??       // media in arrays (gallery items)
    m?.url ??                   // flat
    "";
  return abs(url);
};

/** Blocks -> plain text (handy for teasers on cards) */
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

/** Build a URL with query params */
const withParams = (base: string, params: Record<string, string | number | boolean | undefined>) => {
  const usp = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null) usp.set(k, String(v));
  });
  return `${base}?${usp.toString()}`;
};

/** ------------------------
 *  List Services
 *  fields: slug, title, short, description, gallery, serviceicon (IconHub)
 *  ------------------------ */
export async function getServices() {
  const url = withParams(`${API}/api/services`, {
    "populate[gallery]": "true",
    "fields[0]": "slug",
    "fields[1]": "title",
    "fields[2]": "short",
    "fields[3]": "description",
    "fields[4]": "serviceicon", // IconHub JSON field
    "publicationState": "live",
    "sort[0]": "id:desc",
  });

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch services (${res.status})`);
  const { data } = await res.json();

  return (data || []).map((item: any) => {
    const a = attr(item);

    // IconHub can store { name, svg } or a string. Normalize to name/svg.
    const iconField = a.serviceicon;
    const serviceiconName =
      (typeof iconField === "object" ? iconField?.name : undefined) ??
      (typeof iconField === "string" ? iconField : "");
    const serviceiconSvg =
      (typeof iconField === "object" ? iconField?.svg : undefined) ??
      (typeof iconField === "string" && iconField.trim().startsWith("<svg")
        ? iconField
        : "");

    return {
      id: item.id,
      slug: a.slug,
      title: a.title,
      short: a.short ?? "", // blocks
      shortText: blocksToText(a.short ?? a.description ?? ""),
      description: a.description ?? "", // blocks
      serviceiconName,
      serviceiconSvg,
      // first gallery image as featured
      featured: mediaUrl(a.gallery?.data?.[0]),
      gallery: (a.gallery?.data ?? []).map((g: any) => mediaUrl(g)),
    };
  });
}

/** ------------------------
 *  Single Service by slug
 *  (same field shape as list)
 *  ------------------------ */
export async function getServiceBySlug(slug: string) {
  const url = withParams(`${API}/api/services`, {
    "filters[slug][$eq]": slug,
    "populate[gallery]": "true",
    "fields[0]": "slug",
    "fields[1]": "title",
    "fields[2]": "short",
    "fields[3]": "description",
    "fields[4]": "serviceicon",
    "publicationState": "live",
    "pagination[pageSize]": 1,
  });

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch service (${res.status})`);
  const { data } = await res.json();
  if (!data?.[0]) return null;

  const item = data[0];
  const a = attr(item);

  const iconField = a.serviceicon;
  const serviceiconName =
    (typeof iconField === "object" ? iconField?.name : undefined) ??
    (typeof iconField === "string" ? iconField : "");
  const serviceiconSvg =
    (typeof iconField === "object" ? iconField?.svg : undefined) ??
    (typeof iconField === "string" && iconField.trim().startsWith("<svg")
      ? iconField
      : "");

  return {
    id: item.id,
    slug: a.slug,
    title: a.title,
    short: a.short ?? "",
    shortText: blocksToText(a.short ?? a.description ?? ""),
    description: a.description ?? "",
    serviceiconName,
    serviceiconSvg,
    featured: mediaUrl(a.gallery?.data?.[0]),
    gallery: (a.gallery?.data ?? []).map((g: any) => mediaUrl(g)),
  };
}
