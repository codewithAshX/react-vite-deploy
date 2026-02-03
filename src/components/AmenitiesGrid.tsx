import { AMENITY_ICONS } from "@/lib/amenities-icons";

function getAmenityIcon(label: string) {
  const key = Object.keys(AMENITY_ICONS).find((k) =>
    label.toLowerCase().includes(k)
  );
  return key ? AMENITY_ICONS[key] : Building;
}

export function AmenitiesGrid({ amenities }: { amenities: string[] }) {
  return (
    <section className="mb-20">
      <h2 className="text-2xl sm:text-3xl text-white mb-8">
        Amenities
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {amenities.map((item) => {
          const Icon = getAmenityIcon(item);
          return (
            <div
              key={item}
              className="flex items-center gap-4 border border-white/10 rounded-xl p-4 bg-zinc-900/40 hover:border-emerald-500/40 transition"
            >
              <Icon className="text-emerald-500" size={20} />
              <span className="text-sm text-zinc-200">{item}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
