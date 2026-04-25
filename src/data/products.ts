import {
  HardHat,
  Apple,
  Sun,
  Wrench,
  Paintbrush,
  Droplets,
  ShieldCheck,
  Flame,
  Zap,
  Car,
  Cable,
  Cog,
  Home,
  type LucideIcon,
} from "lucide-react";

export type ProductCategory = {
  slug: string;
  name: string;
  short: string;
  description: string;
  sector: string;
  icon: LucideIcon;
  items: string[];
  highlights: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "construction-materials",
    name: "Construction Materials",
    short: "Cement, Steel, Timber & more",
    description:
      "Comprehensive range of construction materials supplied to EPC contractors, fabricators and developers across the UAE.",
    sector: "EPC, Construction, Fabricators",
    icon: HardHat,
    items: [
      "Cement (OPC / SRC)",
      "Steel Rebar",
      "Timber & Plywood",
      "Gypsum Board",
      "Scaffolding Systems",
      "Steel Mesh",
      "Bricks & Blocks",
      "Tiles & Ceramics",
    ],
    highlights: ["Bulk pricing", "Project-based delivery", "Spec compliance"],
  },
  {
    slug: "food-products",
    name: "Food Products",
    short: "Rice, Spices, Dry Fruits & Meat",
    description:
      "Premium-grade food products for hospitality, retail and HORECA channels — backed by full quality traceability.",
    sector: "Hospitality, Retail, HORECA",
    icon: Apple,
    items: [
      "Basmati Rice",
      "Sella Rice",
      "Cumin & Turmeric",
      "Walnut & Almond",
      "Fresh Fruits & Vegetables",
      "Fresh / Frozen Meat",
    ],
    highlights: ["HACCP-aligned sourcing", "Cold-chain options", "Bulk HORECA packs"],
  },
  {
    slug: "solar-and-batteries",
    name: "Solar Panels & Lithium Batteries",
    short: "Renewable energy systems",
    description:
      "Industrial and commercial solar solutions including flexible panels, lithium batteries and inverters.",
    sector: "Energy, Commercial, Industrial",
    icon: Sun,
    items: [
      "Mono / Poly Solar Panels",
      "Flexible Solar Panels",
      "Lithium Batteries (LiFePO₄)",
      "On-grid / Off-grid Inverters",
      "Industrial Solar Systems",
    ],
    highlights: ["Tier-1 brands", "Site survey support", "Long warranty"],
  },
  {
    slug: "construction-tools",
    name: "Construction Tools",
    short: "Hand tools, mixers & PPE",
    description:
      "Reliable tools and PPE for contractors and on-site teams — engineered for the demanding UAE jobsite.",
    sector: "Construction, Contractors",
    icon: Wrench,
    items: [
      "Hand Tools",
      "Safety PPE",
      "Concrete Mixers",
      "Measuring Tools",
      "Ladders & Access",
    ],
    highlights: ["OEM warranty", "Same-day Dubai delivery"],
  },
  {
    slug: "paints-and-finishes",
    name: "Paints & Finishes",
    short: "Decorative & industrial coatings",
    description:
      "Full spectrum of decorative and protective paints, primers and specialty finishes from leading brands.",
    sector: "Construction, Interior Design",
    icon: Paintbrush,
    items: [
      "Oil / Water-based Paints",
      "Primers & Sealers",
      "Enamel Paints",
      "Spray Paints",
      "Chalkboard Paint",
      "Jotun Solvent",
    ],
    highlights: ["Color matching", "VOC-compliant"],
  },
  {
    slug: "waterproofing",
    name: "Waterproofing Materials",
    short: "Membranes & sealants",
    description:
      "Engineered waterproofing systems for roofs, foundations and infrastructure — built to UAE climate spec.",
    sector: "Construction, Infrastructure",
    icon: Droplets,
    items: [
      "Polyurethane Coatings",
      "EPDM Rubber",
      "Bituminous Membrane",
      "PVC Membrane",
      "Fiber Glass Kits",
    ],
    highlights: ["Tropical-climate rated", "Technical datasheets on request"],
  },
  {
    slug: "safety-equipment",
    name: "Safety Equipment",
    short: "PPE for high-risk environments",
    description:
      "Certified PPE for oil & gas, construction and industrial environments — full head-to-toe protection.",
    sector: "Oil & Gas, Construction",
    icon: ShieldCheck,
    items: [
      "Safety Shoes",
      "Goggles & Face Shields",
      "Hi-Vis Jackets",
      "Chemical Safety Gear",
      "Traffic Cones & Signage",
    ],
    highlights: ["EN / ANSI certified", "Bulk site kits"],
  },
  {
    slug: "fireproofing",
    name: "Fire Proofing Materials",
    short: "Passive fire protection",
    description:
      "Compliance-grade fireproofing materials for commercial and industrial fit-outs.",
    sector: "Construction, Compliance",
    icon: Flame,
    items: [
      "Fire-rated Gypsum Board",
      "Spray Foam",
      "Fire-rated Plywood",
      "Stucco Systems",
      "Particle Board",
    ],
    highlights: ["Civil Defense compliant"],
  },
  {
    slug: "electrical-materials",
    name: "Electrical Materials",
    short: "Lights, breakers & accessories",
    description:
      "Complete electrical fit-out supply: lighting, distribution, accessories and switchgear.",
    sector: "Commercial, Industrial",
    icon: Zap,
    items: ["LED Lighting", "Circuit Breakers", "Switches & Sockets", "Distribution Boards"],
    highlights: ["Branded stock", "Project takeoff support"],
  },
  {
    slug: "auto-spare-parts",
    name: "Auto Spare Parts",
    short: "Engine to powertrain",
    description:
      "Genuine and aftermarket parts for fleet operators, workshops and resellers.",
    sector: "Automotive, Fleet Management",
    icon: Car,
    items: [
      "Engine Components",
      "Transmission",
      "Suspension",
      "Fuel System",
      "Ignition",
      "Exhaust",
      "Electrified Powertrain",
    ],
    highlights: ["OEM & aftermarket", "Cross-reference lookup"],
  },
  {
    slug: "cables-and-wire",
    name: "Cables & Wire",
    short: "Power, control & data",
    description:
      "Industrial and commercial cabling — power, control, data and accessories from trusted manufacturers.",
    sector: "Industrial, Electrical",
    icon: Cable,
    items: [
      "Rubber Cable",
      "Panel Cable",
      "Fiber Optic Cable",
      "Cable Accessories",
      "Conduit Pipes",
    ],
    highlights: ["Drum & cut-to-length", "Test certificates"],
  },
  {
    slug: "mechanical-tools",
    name: "Mechanical Tools",
    short: "Industrial maintenance tools",
    description:
      "Maintenance-grade mechanical tools for industrial workshops and field service teams.",
    sector: "Industrial, Maintenance",
    icon: Cog,
    items: [
      "Screwdrivers",
      "Pliers",
      "Wrenches",
      "Drill Machines",
      "Spanners",
      "Allen Keys",
    ],
    highlights: ["Workshop kits", "Long-life tooling"],
  },
  {
    slug: "general-goods",
    name: "General Goods",
    short: "Appliances & commercial supply",
    description:
      "Home and commercial appliances, refrigeration, sanitary and water supply equipment.",
    sector: "General Commercial",
    icon: Home,
    items: [
      "Home Appliances",
      "Sanitary Appliances",
      "Electronic Gadgets",
      "Refrigeration",
      "Water Pumps",
    ],
    highlights: ["Branded stock", "Warranty supported"],
  },
];

export const getCategory = (slug: string) =>
  productCategories.find((c) => c.slug === slug);
