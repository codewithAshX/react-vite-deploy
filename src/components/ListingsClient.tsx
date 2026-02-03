"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, BedDouble, Bath, Square, ArrowRight, Filter } from "lucide-react";

/* ================= DATA ================= */

const ALL_PROPERTIES = [
  {
    id: 1,
    title: "Riddhi Skyline",
    price: null,
    location: "Mul Road",
    city: "Chandrapur",
    status: "Under Construction",
    type: "2 BHK & Retail",
    beds: 2,
    baths: 2,
    area: "Well-Planned Layouts",
    tag: "Premium Project",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000",

    details: {
      tagline: "Rising Above the Ordinary",
      developer: "Riddhi Builders",
      configuration: "2 BHK Flats & Retail Shops",
      brochure: "/Skyline-brochure.pdf",
    },
  },

  {
    id: 2,
    title: "Riddhi Ventura",
    price: null,
    location: "Mul Road",
    city: "Chandrapur",
    status: "Under Construction",
    type: "2 & 3 BHK Apartments",
    beds: 3,
    baths: 2,
    area: "Spacious Luxury Layouts",
    tag: "Luxury Living",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000",

    details: {
      tagline: "Innovation Meets Indulgence",
      developer: "Riddhi Builders",
      configuration: "2 & 3 BHK Luxurious Apartments & Shops",
      brochure: "/Riddhi-Ventura.pdf",
    },
  },

  {
  id: 3,

  /* === LISTING FIELDS === */
  title: "Riddhi Legacy Towers",
  price: null,
  location: "Padoli / Kosara Area",
  city: "Chandrapur",
  status: "Under Construction",
  type: "2 BHK Apartments",
  beds: 2,
  baths: 2,
  area: "Spacious 2 BHK Layouts",
  tag: "Luxury Towers",
  image:
    "https://images.unsplash.com/photo-1600607687920-4e2b6a2f3f38?q=80&w=2000",

  /* === BROCHURE DETAILS === */
  details: {
    tagline: "Spaces as Spacious as Your Heart",
    developer: "Riddhi Builders",
    configuration: "2 BHK Luxurious Flats",

    overview:
      "Riddhi Legacy Towers is a thoughtfully planned residential project featuring two elegant towers with premium 2 BHK apartments. Designed for comfort, security, and lifestyle, the project offers open spaces, modern amenities, and quality construction for peaceful urban living.",

    highlights: [
      "Twin residential towers – Tower A & Tower B",
      "Spacious 2 BHK luxury apartments",
      "Podium landscape garden",
      "Modern elevation and premium façade",
      "Well-planned internal circulation",
      "Quality construction and fittings"
    ],

    floorPlanning: [
      "Ground Floor – Parking & Services",
      "Podium Level – Landscape Garden",
      "1st to 6th Floor – Residential Apartments (Tower A & B)"
    ],

    amenities: [
      "Impressive main gate with security cabin",
      "Designer entrance lobby",
      "Podium garden with seating areas",
      "Jogging / walking track",
      "Visitors parking",
      "24x7 security surveillance",
      "Rainwater harvesting",
      "2 lifts in each tower with ARD"
    ],

    specifications: {
      structure: "RCC framed structure as per structural design",
      walls: "Brick wall masonry as per architectural drawing",
      plaster: "Internal smooth finish & external sand-faced plaster",
      flooring: "Vitrified tiles in all rooms & ceramic tiles in balcony",
      kitchen: "Granite kitchen platform with stainless steel sink",
      doors: "Decorative main door & flush internal doors",
      windows: "Fully glazed aluminium sliding windows",
      electrical:
        "Concealed copper wiring with modular switches and sufficient power points",
      plumbing:
        "Concealed plumbing with branded sanitary fittings",
      painting:
        "Internal OBD paint & external weather-proof paint",
      lift: "Passenger lifts with ARD",
      parking: "Allotted covered parking"
    },

    images: {
      hero:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000",
      locationPlan:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000",
      floorPlans: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000"
      ],
      interiors: [
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2000"
      ]
    },

    brochure: "/Riddhi-Legacy-Towers.pdf",
    brandingNote: "1350+ Happy Families"
  }
}

];

/* ================= MAIN PAGE ================= */

export default function ListingsClient() {
  const searchParams = useSearchParams();

  const filters = {
    city: searchParams.get("city"),
    status: searchParams.get("status"),
    type: searchParams.get("type"),
    price: Number(searchParams.get("price") || Infinity),
  };

  const filteredProperties = ALL_PROPERTIES.filter((p) => {
    return (
      (!filters.city || p.city === filters.city) &&
      (!filters.status || p.status === filters.status) &&
      (!filters.type || p.type === filters.type) &&
      (!p.price || p.price <= filters.price)
    );
  });

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-400 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <span className="text-emerald-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
              Global Inventory
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white tracking-tighter leading-none">
              Curated{" "}
              <span className="italic font-serif text-emerald-100">
                Assets.
              </span>
            </h1>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-500 border-b border-white/10 pb-2">
            <Filter size={14} />
            <span>Showing {filteredProperties.length} Properties</span>
          </div>
        </motion.div>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProperties.map((p) => (
              <PropertyCard key={p.id} data={p} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ================= CARD ================= */

function PropertyCard({ data }: { data: any }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -10 }}
      className="group bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="absolute top-6 left-6 space-y-2">
          <span className="bg-emerald-600 text-white text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full">
            {data.tag}
          </span>
          <span className="bg-black/60 text-zinc-300 text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full">
            {data.status}
          </span>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-xl text-white mb-1">{data.title}</h3>

        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-6">
          <MapPin size={12} className="text-emerald-500" />
          {data.location}, {data.city}
        </div>

        {data.price ? (
          <div className="text-2xl text-white mb-8">
            ₹{(data.price / 10000000).toFixed(2)} Cr
          </div>
        ) : (
          <div className="text-sm uppercase tracking-widest text-emerald-500 mb-8">
            Price on Request
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 mb-8 text-zinc-500">
          <Feature icon={<BedDouble size={14} />} label={`${data.beds} Beds`} />
          <Feature icon={<Bath size={14} />} label={`${data.baths} Baths`} />
          <Feature icon={<Square size={14} />} label={data.area} />
        </div>

        <Link
          href={`/properties/${data.id}`}
          className="flex items-center justify-between bg-white text-black py-4 px-6 rounded-full uppercase tracking-widest text-[10px] font-bold hover:bg-emerald-500 hover:text-white transition-all"
        >
          View Portfolio Asset
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}

const Feature = ({ icon, label }: any) => (
  <div className="flex flex-col gap-1">
    {icon}
    <span className="text-[10px] uppercase tracking-widest font-bold">
      {label}
    </span>
  </div>
);
