export type ClientGroup = {
  sector: string;
  clients: { id: number; name: string; note?: string }[];
};

export const clientGroups: ClientGroup[] = [
  {
    sector: "Hotels & Hospitality",
    clients: [
      { id: 1, name: "Sheraton" },
      { id: 2, name: "Jumeirah Hotels & Resorts" },
      { id: 3, name: "Radisson Hotels & Resorts" },
      { id: 4, name: "Fairmont Bab Al Bahr" },
      { id: 5, name: "St. Regis Hotels & Resorts" },
    ],
  },
  {
    sector: "Construction & EPC",
    clients: [
      { id: 6, name: "Orascom Construction" },
      { id: 7, name: "Transgulf Readymix" },
      { id: 8, name: "Sahara Emirates" },
      { id: 9, name: "ADMM" },
    ],
  },
  {
    sector: "Education & Institutions",
    clients: [
      { id: 10, name: "Ethara" },
      { id: 11, name: "ERTH Abu Dhabi" },
      { id: 12, name: "Inspire Integrated" },
    ],
  },
];

export const brandPartners = [
  { name: "Philips", category: "Electronics / Lighting" },
  { name: "RAK Ceramics", category: "Construction / Tiles" },
  { name: "Milano", category: "Interior / Sanitary" },
  { name: "GROHE", category: "Sanitary / Plumbing" },
  { name: "SUNDEX", category: "Industrial" },
  { name: "Jotun", category: "Paints & Coatings" },
];

export const testimonials = [
  {
    name: "Mohammed Al Hashimi",
    role: "Procurement Manager",
    company: "Orascom Construction",
    sector: "Construction",
    quote:
      "Techcare consistently delivers project-grade materials on schedule. Their bulk pricing and spec accuracy give our procurement team real confidence.",
  },
  {
    name: "Layla Rahman",
    role: "F&B Director",
    company: "Jumeirah Hotels & Resorts",
    sector: "Hospitality",
    quote:
      "From premium rice to fresh produce, the quality and consistency have been excellent. They’ve become a trusted partner for our kitchens.",
  },
  {
    name: "James Whittaker",
    role: "HSE Lead",
    company: "ADMM",
    sector: "Oil & Gas",
    quote:
      "Certified PPE supplied promptly to remote sites — Techcare understands the safety-first culture our operations demand.",
  },
];
