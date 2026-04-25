export type ClientGroup = {
  sector: string;
  clients: { name: string; note?: string }[];
};

export const clientGroups: ClientGroup[] = [
  {
    sector: "Hotels & Hospitality",
    clients: [
      { name: "Sheraton" },
      { name: "Jumeirah Hotels & Resorts" },
      { name: "Radisson Hotels & Resorts" },
      { name: "Fairmont Bab Al Bahr" },
      { name: "St. Regis Hotels & Resorts" },
    ],
  },
  {
    sector: "Construction & EPC",
    clients: [
      { name: "Orascom Construction" },
      { name: "Transgulf Readymix" },
      { name: "Sahara Emirates" },
      { name: "ADMM" },
    ],
  },
  {
    sector: "Education & Institutions",
    clients: [
      { name: "Ethara" },
      { name: "ERTH Abu Dhabi" },
      { name: "Inspire Integrated" },
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
