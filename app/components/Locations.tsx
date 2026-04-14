const locations = [
  {
    name: "Suðurlandsbraut 48",
    subtitle: "(Bláu húsin)",
    area: "108 Reykjavik",
    district: "Ófanleiti",
    openLabel: "Opnunartímar:",
    weekdays: "9:00 - 20:00",
    weekends: "10:00 - 20:00",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
  },
  {
    name: "Bæjarlind 14-16",
    subtitle: "",
    area: "203 Kópavogi",
    district: "Garðastræti",
    openLabel: "Opnunartímar:",
    weekdays: "9:00 - 20:00",
    weekends: "10:00 - 20:00",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
  },
];

export default function Locations() {
  return (
    <section className="py-16 px-16 max-w-[1200px] mx-auto">
      <p className="font-body text-sm font-medium uppercase tracking-widest text-black/50 mb-2">
        Visit Store
      </p>
      <h2 className="font-heading text-[48px] italic font-normal text-black mb-12">
        Útibúin okkar
      </h2>
      <div className="grid grid-cols-2 gap-8">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="flex gap-6 rounded-xl border border-black/10 p-6"
          >
            <div className="flex-1">
              <h3 className="font-body text-xl font-semibold text-black mb-1">
                {loc.name}
                {loc.subtitle && (
                  <span className="font-normal text-black/50">
                    {" "}
                    {loc.subtitle}
                  </span>
                )}
              </h3>
              <p className="font-body text-sm text-black/60 mb-1">{loc.area}</p>
              <p className="font-body text-sm text-black/60 mb-3">
                {loc.district}
              </p>
              <p className="font-body text-xs font-semibold text-black mb-2">
                Opnunartímar:
              </p>
              <div className="flex gap-6 mb-4">
                <div>
                  <p className="font-body text-xs text-black/40 mb-1">
                    Virka daga
                  </p>
                  <p className="font-body text-sm font-medium text-black">
                    {loc.weekdays}
                  </p>
                </div>
                <div>
                  <p className="font-body text-xs text-black/40 mb-1">
                    Um helgar
                  </p>
                  <p className="font-body text-sm font-medium text-black">
                    {loc.weekends}
                  </p>
                </div>
              </div>
              <a
                href="#"
                className="font-body text-xs font-medium uppercase tracking-[0.15em] text-black flex items-center gap-1"
              >
                Open map <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <div className="w-48 h-36 shrink-0 overflow-hidden rounded-lg">
              <img
                src={loc.image}
                alt={loc.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
