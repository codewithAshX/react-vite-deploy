"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  MapPin,
  BedDouble,
  Bath,
  Square,
  Building2,
  Car,
  ShieldCheck,
  Leaf,
  Activity,
  Camera,
  CloudRain,
  ArrowUpDown,
  Building,
} from "lucide-react";



/* ================= AMENITY ICON MAP ================= */

const AMENITY_ICONS: Record<string, any> = {
  security: ShieldCheck,
  parking: Car,
  garden: Leaf,
  podium: Leaf,
  jogging: Activity,
  walking: Activity,
  cctv: Camera,
  surveillance: Camera,
  rainwater: CloudRain,
  lift: ArrowUpDown,
};


/* ================= PROJECT DATA ================= */

const PROJECTS: Record<string, any> = {
  "1": {
    title: "Riddhi Skyline",
    tagline: "Rising Above the Ordinary",
    location: "Mul Road, Chandrapur",
    hero:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000",
    config: "2 BHK Flats & Retail Shops",
    beds: "2 BHK Residences",
    baths: "2 Bathrooms",
    area: "Efficient Floor Planning",
    developer: "Riddhi Builders",

    overview:
      "Riddhi Skyline is a thoughtfully designed residential and commercial development combining premium retail spaces with modern 2 BHK residences. Strategically located on Mul Road, Chandrapur, the project delivers strong construction quality, intelligent planning, and long-term investment value.",

    highlights: [
      "Premium retail shops on lower & upper ground floors",
      "Spacious and well-ventilated 2 BHK apartments",
      "Modern glass façade elevation",
      "Ample covered parking",
      "Prime connectivity within city limits",
    ],

    floors: [
      "Lower Ground – Commercial Retail",
      "Upper Ground & First Floor – Commercial Use",
      "Upper Floors – Residential Apartments",
    ],

    parking: [
      "Covered parking for residents",
      "Separate parking for retail units",
    ],

    amenities: [
      "Lift access",
      "Covered parking",
      "Security cabin",
      "CCTV surveillance",
      "Fire safety provisions",
    ],
  },

  "2": {
    title: "Riddhi Ventura",
    tagline: "Innovation Meets Indulgence",
    location: "Mul Road, Chandrapur",
    hero:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2000",
    config: "2 & 3 BHK Luxury Apartments",
    beds: "2 & 3 BHK Apartments",
    baths: "2 Bathrooms",
    area: "Spacious Luxury Layouts",
    developer: "Riddhi Builders",

    overview:
      "Riddhi Ventura is a premium residential development offering thoughtfully designed 2 & 3 BHK luxury apartments. The project reflects contemporary architecture, spacious interiors, excellent ventilation, and superior construction standards to deliver an elevated living experience.",

    highlights: [
      "2 & 3 BHK luxury apartments",
      "Modern architectural elevation",
      "Excellent natural light & ventilation",
      "Lift facility with power backup",
      "Secure and well-planned premises",
    ],

    floors: [
      "Ground Floor – Parking & Services",
      "Residential Floors – 2 & 3 BHK Apartments",
    ],

    parking: [
      "Dedicated covered parking",
      "Smooth internal driveway circulation",
    ],

    amenities: [
      "Lift facility",
      "Covered parking",
      "Security cabin",
      "CCTV surveillance",
      "Jogging / walking track",
      "Rainwater harvesting",
    ],
  },
};

/* ================= PAGE ================= */

export default function PropertyDetailPage() {
  const { id } = useParams();
  const project = PROJECTS[id as string];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <div className="bg-[#050505] text-zinc-300 pt-20 pb-32">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/listings"
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-emerald-500 font-semibold"
          >
            <ChevronLeft size={14} />
            Back to Listings
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-14">
        {/* LEFT */}
        <div className="lg:col-span-8">
          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-[420px] rounded-3xl overflow-hidden mb-10"
          >
            <Image
              src={project.hero}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <h1 className="text-5xl text-white">{project.title}</h1>
          <p className="italic text-zinc-500 mb-6">{project.tagline}</p>

          <div className="flex items-center gap-2 mb-10">
            <MapPin className="text-emerald-500" />
            <span>{project.location}</span>
          </div>

          <div className="grid grid-cols-3 gap-8 py-8 border-y border-white/5 mb-16 text-center">
            <Info icon={<BedDouble />} label={project.beds} />
            <Info icon={<Bath />} label={project.baths} />
            <Info icon={<Square />} label={project.area} />
          </div>

          <TextSection title="Project Overview" text={project.overview} />

          <ListSection title="Project Highlights" items={project.highlights} />
          <ListSection title="Floor-Wise Planning" items={project.floors} />
          <ListSection title="Parking Facilities" items={project.parking} />

          <AmenitiesSection amenities={project.amenities} />
        </div>

        {/* RIGHT */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28 bg-zinc-900/60 border border-white/10 rounded-3xl p-8">
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">
              Project Type
            </p>
            <h3 className="text-2xl text-white mb-6">
              {project.config}
            </h3>

            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-emerald-500" />
              <span>{project.developer}</span>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <Car className="text-emerald-500" />
              <span>Covered Parking Available</span>
            </div>

            <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl text-[10px] uppercase tracking-widest font-semibold">
              Request Site Visit
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

const Info = ({ icon, label }: any) => (
  <div>
    <div className="mx-auto mb-2 text-emerald-500">{icon}</div>
    <p className="text-white font-semibold">{label}</p>
  </div>
);

const TextSection = ({ title, text }: any) => (
  <section className="mb-16">
    <h2 className="text-3xl text-white mb-6">{title}</h2>
    <p className="text-lg leading-relaxed">{text}</p>
  </section>
);

const ListSection = ({ title, items }: any) => (
  <section className="mb-16">
    <h2 className="text-3xl text-white mb-6">{title}</h2>
    <ul className="space-y-3 text-lg">
      {items.map((i: string) => (
        <li key={i} className="flex gap-2">
          <span className="text-emerald-500">•</span> {i}
        </li>
      ))}
    </ul>
  </section>
);

function AmenitiesSection({ amenities }: { amenities: string[] }) {
  function getIcon(label: string) {
    const key = Object.keys(AMENITY_ICONS).find((k) =>
      label.toLowerCase().includes(k)
    );
    return key ? AMENITY_ICONS[key] : Building;
  }

  return (
    <section className="mb-16">
      <h2 className="text-3xl text-white mb-6">Amenities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {amenities.map((item) => {
          const Icon = getIcon(item);
          return (
            <div
              key={item}
              className="flex items-center gap-4 border border-white/10 rounded-xl p-4 bg-zinc-900/40"
            >
              <Icon className="text-emerald-500" size={20} />
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
