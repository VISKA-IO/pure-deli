import { ArrowRightIcon } from "./_shared/icons/ArrowRightIcon";

const locations = [
  {
    name: "Suðurlandsbraut 48 (Bláu húsin)",
    area: "108 Reykjavik",
    openLabel: "Opnunartímar:",
    weekdays: "9:00 - 20:00",
    weekends: "10:00 - 20:00",
    image: "/images/store-1.png",
    mapUrl: "https://maps.app.goo.gl/86TseAoV9srqUknJA",
  },
  {
    name: "Bæjarlind 14-16",
    area: "203 Kópavogi",
    openLabel: "Opnunartímar:",
    weekdays: "9:00 - 20:00",
    weekends: "10:00 - 20:00",
    image: "/images/store-2.png",
    mapUrl: "https://maps.app.goo.gl/9PsLDeaFbzZzxXhF8",
  },
];

export default function Locations() {
  return (
    <section className="w-full">
      <div className="w-full container pt-9 lg:pt-12.5 pb-25 lg:pb-37.5">
        <p className="font-body text-lg lg:text-xl font-medium uppercase text-olive mb-3.5">
          Heimsæktu okkur
        </p>
        <h2 className="font-heading text-[38px] lg:text-[52px] font-normal text-black mb-8 lg:mb-10">
          Útibúin okkar
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {locations.map((loc, idx) => (
            <a
              href={loc.mapUrl}
              target="_blank"
              key={idx}
              className="flex flex-col-reverse lg:flex-row lg:items-stretch gap-5.5 lg:gap-5 rounded-[20px] bg-off-white p-4.5 lg:p-6"
            >
              <div className="flex-1 flex flex-col">
                <div className="w-full flex gap-5">
                  <h3 className="flex-1 font-heading text-[26px] lg:text-[32px] text-black mb-3 lg:mb-1">
                    {loc.name}
                  </h3>

                  <div className="lg:hidden mt-2 h-fit flex font-body text-base font-medium uppercase text-olive items-center gap-1">
                    Opna kort
                    <ArrowRightIcon className="w-4.5 h-4.5" />
                  </div>
                </div>

                <p className="font-body text-base text-black mb-4">
                  {loc.area}
                </p>

                <p className="font-body text-sm lg:text-[15px] font-medium text-black mb-2">
                  Opnunartímar:
                </p>

                <div className="flex gap-8 lg:gap-7 lg:mb-6.5">
                  <div>
                    <p className="font-body text-sm lg:text-[15px] text-black mb-1">
                      Virka daga
                    </p>
                    <p className="font-body text-sm lg:text-[15px] text-black">
                      {loc.weekdays}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-sm lg:text-[15px] text-black mb-1">
                      Um helgar
                    </p>
                    <p className="font-body text-sm lg:text-[15px] text-black">
                      {loc.weekends}
                    </p>
                  </div>
                </div>

                <div className="lg:flex hidden font-body mt-auto text-base font-medium uppercase text-olive items-center gap-2">
                  Opna kort
                  <ArrowRightIcon className="w-6 h-6" />
                </div>
              </div>

              <div className="w-full lg:w-[45%] h-49 lg:h-fit lg:aspect-92/100 overflow-hidden rounded-[10px]">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="h-full w-full object-center object-cover"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
