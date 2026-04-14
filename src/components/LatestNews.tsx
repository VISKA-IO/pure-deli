const newsItems = [
  {
    title: "Mikið 2-4kg í hvert skipti",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=300&q=80",
  },
  {
    title: "Pure Deli afttur mest í kaupa vagins",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&q=80",
  },
  {
    title: "Lyfti greðluliði eftir afslö",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&q=80",
  },
];

export default function LatestNews() {
  return (
    <section className="py-16 px-16 max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-heading text-[36px] italic font-normal text-black">
          The latest
        </h2>
        <a
          href="/news"
          className="font-body text-sm font-medium uppercase tracking-[0.15em] text-black flex items-center gap-2"
        >
          View more
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {newsItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 rounded-xl border border-black/10 p-4"
          >
            <div className="flex-1">
              <h3 className="font-body text-sm font-semibold text-black mb-3 leading-snug">
                {item.title}
              </h3>
              <a
                href="/news"
                className="font-body text-xs font-medium uppercase tracking-[0.15em] text-black flex items-center gap-1"
              >
                Lesa meira <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <div className="h-20 w-24 shrink-0 overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
