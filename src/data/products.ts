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

// @ts-ignore
import constructionImg from "@/assets/products/Construction Materials.webp";
// @ts-ignore
import foodImg from "@/assets/products/Food Products.webp";
// @ts-ignore
import solarImg from "@/assets/products/solar-pannel.webp";
// @ts-ignore
import toolsImg from "@/assets/products/Construction Tools.webp";
// @ts-ignore
import paintImg from "@/assets/products/Paints & Finishes.webp";
// @ts-ignore
import waterproofingImg from "@/assets/products/Waterproofing Materials.webp";


export type ProductCategory = {
  slug: string;
  name: string;
  short: string;
  description: string;
  sector: string;
  icon: LucideIcon;
  image: string;
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
    image: constructionImg,
    items: [
      "Cement",
      "Steel Rebar",
      "Timber",
      "Gypsum Board",
      "Scaffolding",
      "Steel Mesh",
      "Bricks",
      "Tiles",
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
    image: foodImg,
    items: [
      "Basmati Rice",
      "Sella Rice",
      "Cumin",
      "Turmeric",
      "Walnut",
      "Almond",
      "Fruits & Vegetables",
      "Fresh/Frozen Meat",
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
    image: solarImg,
    items: [
      "Solar Panels",
      "Flexible Solar Panels",
      "Lithium Batteries",
      "Inverters",
      "Industrial Solar",
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
    image: toolsImg,
    items: [
      "Hand Tools",
      "Safety PPE",
      "Concrete Mixer",
      "Measuring Tools",
      "Ladders",
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
    image: paintImg,
    items: [
      "Oil/Water Paints",
      "Primer",
      "Enamel",
      "Spray Paint",
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
    image: waterproofingImg,
    items: [
      "Polyurethane",
      "EPDM Rubber",
      "Bituminous Membrane",
      "PVC Membrane",
      "Fiber Glass Kit",
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
    // @ts-ignore
    image: null,
    items: [
      "Safety Shoes",
      "Goggles",
      "Jackets",
      "Chemical Safety Gear",
      "Traffic Cones",
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
    // @ts-ignore
    image: null,
    items: [
      "Gypsum Board",
      "Spray Foam",
      "Plywood",
      "Stucco",
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
    // @ts-ignore
    image: null,
    items: ["Lights", "Breakers", "Electrical Accessories"],
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
    // @ts-ignore
    image: null,
    items: [
      "Engine",
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
      "Industrial and commercial cabling — power, control,. We are available 24/7 to assist you. data and accessories from trusted manufacturers.",
    sector: "Industrial, Electrical",
    icon: Cable,
    // @ts-ignore
    image: null,
    items: [
      "Rubber Cable",
      "Panel Cable",
      "Fiber Cable",
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
    // @ts-ignore
    image: null,
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
    name: "General",
    short: "Appliances & commercial supply",
    description:
      "Home and commercial appliances, refrigeration, sanitary and water supply equipment.",
    sector: "General Commercial",
    icon: Home,
    // @ts-ignore
    image: null,
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
