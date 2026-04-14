import { Link } from "react-router";
import { ArrowRightIcon } from "./_shared/icons/ArrowRightIcon";

const newsItems = [
  {
    date: "12 Jan 2025",
    title: "Mikið 2-4kg í hvert skipti",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=300&q=80",
  },
  {
    date: "12 Jan 2025",
    title: "Pure Deli afttur mest í kaupa vagins",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&q=80",
  },
  {
    date: "12 Jan 2025",
    title: "Lyfti greðluliði eftir afslö",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&q=80",
  },
];

export default function LatestNews() {
  return (
    <section className="w-full">
      <div className="container pt-15.5 lg:pt-25 pb-8 lg:pb-12.5">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-[38px] lg:text-[42px] font-normal text-black">
            The latest
          </h2>
          <Link
            to="/news"
            className="font-body text-base font-medium uppercase text-olive flex items-center gap-2"
          >
            View more
            <ArrowRightIcon />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {newsItems.map((item, idx) => (
            <Link
              to="/news"
              key={idx}
              className="flex items-stretch gap-6 lg:rounded-[20px] lg:bg-off-white lg:p-5"
            >
              <div className="flex-1 flex flex-col">
                <p className="lg:hidden text-xs font-body mb-1">{item.date}</p>
                <h3 className="font-heading text-[20px] lg:text-[22px] text-black leading-snug">
                  {item.title}
                </h3>
                <div className="mt-auto font-body text-base font-medium uppercase text-olive hidden lg:flex items-center gap-2">
                  Lesa meira <ArrowRightIcon />
                </div>
              </div>
              <div className="h-20.5 lg:h-31 lg:w-31 aspect-100/78 lg:aspect-auto overflow-hidden rounded-[10px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-center object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
