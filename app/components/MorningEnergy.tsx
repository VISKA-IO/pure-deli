import { ArrowRightIcon } from "./_shared/icons/ArrowRightIcon";
import { cn } from "../utils/cn";

const DATA = [
  {
    heading: "Góð orka í byrjun dags",
    description:
      "Á Pure deli finnurðu næringarríkum protein boost, sem eru drykkingar einstaklega frábært til að byrja daginn á.",
    imageUrl: "/images/good-energy.png",
    url: "/order?category=6972242d164f1aa780e4a6d3",
  },
  {
    heading: "Gott kaffi skiptir miklu mál",
    description:
      "Við opnum kl.08.00 á virkum dögum og vitum hvað það getur verið ljúft að taka með góðan kaffibolla í bílinn og njóta í umferðinni á leiðinni í vinnuna. ",
    imageUrl: "/images/good-coffee.png",
    url: "/order?category=697223d5924865d6fca96f78",
  },
];

export default function MorningEnergy() {
  return (
    <section className="w-full">
      <div className="container pt-8 pb-9 lg:pb-12.5 lg:pt-12.5 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {DATA.map((item, i) => (
          <a
            key={i}
            href={item.url}
            className={cn(
              "rounded-[20px] h-full overflow-hidden pt-6 lg:pt-12 flex flex-col",
              i % 2 === 0 ? "bg-cream" : "bg-sage",
            )}
          >
            <div className="w-full flex justify-between gap-4 mb-6 px-4.5 lg:px-10">
              <h2 className="w-[80%] lg:w-full font-heading text-[32px] lg:text-[42px] font-normal leading-[1.15] text-black">
                {item.heading}
              </h2>

              <ArrowRightIcon className="text-olive w-8 lg:w-10 h-8 lg:h-10" />
            </div>

            <p className="font-body w-[90%] lg:w-full text-sm lg:text-base text-black leading-relaxed mb-5 px-4.5 lg:px-10">
              {item.description}
            </p>

            <div className="mt-auto w-full flex">
              <img
                src={item.imageUrl}
                alt={item.heading}
                className="w-full h-auto object-contain"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
