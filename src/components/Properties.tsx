/* ================= IMPORTS ================= */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  ParkingSquare,
  Trees,
  Dumbbell,
  Footprints,
  Camera,
  Droplets,
  ArrowUpToLine, // REPLACED Elevator with ArrowUpToLine
  Building,
  Users,
  LucideIcon, 
} from "lucide-react";

/* ================= AMENITY ICON MAP ================= */

const AMENITY_ICONS: Record<string, LucideIcon> = {
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
  lift: ArrowUpToLine, // UPDATED THIS
  lobby: Building,
  visitors: Users,
};