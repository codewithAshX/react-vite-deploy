"use client";

/* ================= IMPORTS ================= */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ParkingSquare,
  Trees,
  Dumbbell,
  Footprints,
  Camera,
  Droplets,
  Elevator,
  Building,
  Users,
} from "lucide-react";

/* ================= AMENITY ICON MAP ================= */

const AMENITY_ICONS: Record<string, any> = {
  security: ShieldCheck,
  parking: ParkingSquare,
  garden: Trees,
  podium: Trees,
  jogging: Footprints,
  walking: Footprints,
  gym: Dumbbell,
  cctv: Camera,
  surveillance: Camera,
  rainwater: Droplets,
  lift: Elevator,
  lobby: Building,
  visitors: Users,
};

/* ================= HELPERS ================= */

function getAmenityIcon(label: string) {
  const key = Object.keys(AMENITY_ICONS).find((k) =>
    label.toLowerCase().includes(k)
  );
  return key ? AMENITY_ICONS[key] : Building;
}

/* ================= DATA ================= */

const defaultProperties = [
  {
    id: 1,
    title: "Modern Apartment",
    price: "$500,000",
    location: "Downtown",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sq ft",
    amenities: [
      "Covered parking",
      "Lift access",
      "Security cabin",
      "CCTV surveillance",
      "Garden area",
    ],
  },

  {
    id: 2,
    title: "Cozy House",
    price: "$750,000",
    location: "Suburb",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,000 sq ft",
    amenities: [
      "Visitor parking",
      "Jogging track",
      "Rainwater harvesting",
      "Security system",
    ],
  },

  {
    id: 3,
    title: "Riddhi Legacy Towers",
    price: "Price on Request",
    location: "Padoli / Kosara Area, Chandrapur",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2000",
    bedrooms: 2,
    bathrooms: 2,
    area: "Spacious 2 BHK Layouts",

    amenities: [
      "Security cabin",
      "Covered parking",
      "Podium garden",
      "Jogging / walking track",
      "Visitor parking",
      "CCTV surveillance",
      "Rainwater harvesting",
      "Lift access",
    ],

    /* === FULL BROCHURE DATA (SAFE FOR DETAIL PAGE) === */
    details: {
      tagline: "Spaces as Spacious as Your Heart",
      developer: "Riddhi Builders",
      configuration: "2 BHK Luxurious Flats",
      brochure: "/Riddhi-Legacy-Towers.pdf",
      brandingNote: "1350+ Happy Families",
    },
  },
];

/* ================= MAIN PAGE ================= */

export default function PropertiesPage({
  properties = defaultProperties,
}: {
  properties?: any[];
}) {
  return (
    <section className="min-h-screen bg-gray-50 py-20 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Our Properties
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-56">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-1">
                  {property.title}
                </h2>

                <p className="text-gray-600 mb-2">
                  {property.location}
                </p>

                <p className="text-sm text-gray-500 mb-3">
                  {property.bedrooms} beds • {property.bathrooms} baths •{" "}
                  {property.area}
                </p>

                <p className="text-emerald-600 font-bold text-lg mb-4">
                  {property.price}
                </p>

                {/* AMENITIES */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {property.amenities.map((item: string) => {
                    const Icon = getAmenityIcon(item);
                    return (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Icon size={16} className="text-emerald-600" />
                        {item}
                      </div>
                    );
                  })}
                </div>

                <Link
                  href={`/properties/${property.id}`}
                  className="block text-center bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
