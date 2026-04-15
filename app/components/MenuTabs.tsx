import { useState } from "react";
import { cn } from "../utils/cn";

const categories = ["Vefjurnar", "Salötin", "Toastin"] as const;

const menuItems = {
  Vefjurnar: [
    {
      name: "Avocado Chicken",
      description: "Kjúklingur, avókadó, tómatur, spínat og pestó",
      price: "2.990 kr",
      image: "/images/avocado-chicken.png",
      url: "/panta?category=697223eb47d171e0186713d7",
    },
    {
      name: "Serrano vefja",
      description: "Serrano hráskinka, pestó , Mozzarella, spínat og tómatar",
      price: "3.290 kr",
      image: "/images/serrano-vefja.png",
      url: "/panta?category=697223eb47d171e0186713d7",
    },
    {
      name: "Indian Chicken",
      description:
        "Indian chicken, spínat, papríka og pestó (Inniheldur sojasósu/gluten)",
      price: "3.190 kr",
      image: "/images/indian-chicken.png",
      url: "/panta?category=697223eb47d171e0186713d7",
    },
  ],
  Salötin: [
    {
      name: "Vegan Salat",
      description:
        "Salatblanda, avókadó, gúrka , cherry tómatar, jarðaber, bláber, döðlur, hummus og pestó",
      price: "3.190 kr",
      image: "/images/vegan-salat-new.png",
      url: "/panta?category=697223fc7cf2afb6912549b6",
    },
    {
      name: "Tuna Deli Salat",
      description:
        "Túnfiskur, salatblanda, avocado, gúrka , cherry tómatar, jarðaber, egg og pestó",
      price: "3.290 kr",
      image: "/images/tuna-deli-salat-new.png",
      url: "/panta?category=697223fc7cf2afb6912549b6",
    },
    {
      name: "Indian Chicken Salat",
      description:
        "Salat blanda, kjúklingur , avocado, gúrka , cherry tómatar, jarðaber, egg & pestó (Inniheldur sojasósu/gluten)",
      price: "3.390 kr",
      image: "/images/indian-chicken-salat-new.png",
      url: "/panta?category=697223fc7cf2afb6912549b6",
    },
  ],
  Toastin: [
    {
      name: "Avocado Toast",
      description: "Ristað súrdeigsbrauð, pestó, avókadó og tómatar.",
      price: "2.990 kr",
      image: "/images/avocado-toast.png",
      url: "/panta?category=697223c789f4922277697fda",
    },
    {
      name: "Serrano - mozzarella toast",
      description:
        "Tvær ristaðar súrdeigsbrauðsneiðar með pestó, mozzarella, serrano hráskinku, tómatar & klettasalat",
      price: "3.290 kr",
      image: "/images/serrano-mozzarella-toast.png",
      url: "/panta?category=697223c789f4922277697fda",
    },
    {
      name: "Tuna toast",
      description:
        "Tvær ristaðar súrdeigsbrauðsneiðar með pestó, tuna, avocado og tómat og pestó, tuna, jalapeno og tabasco.",
      price: "2.990 kr",
      image: "/images/tuna-toast.png",
      url: "/panta?category=697223c789f4922277697fda",
    },
  ],
};

export default function MenuTabs() {
  const [activeTab, setActiveTab] =
    useState<(typeof categories)[number]>("Salötin");

  return (
    <section className="w-full overflow-hidden">
      <div className="container pt-13 lg:pt-25 pb-20 lg:pb-25">
        <div className="flex items-center justify-center gap-7.5 lg:gap-4 mb-8 lg:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "font-heading lg:min-w-64.5 text-center text-[32px] lg:text-[52px] transition-colors cursor-pointer",
                activeTab === cat
                  ? "text-olive font-normal"
                  : "text-black/30 font-normal",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-[10%] px-[10%] lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-6 scrollbar-hide">
          {menuItems[activeTab].map((item, idx) => (
            <a
              href={item.url}
              key={idx}
              className="flex flex-col min-w-[80%] snap-center lg:min-w-0"
            >
              <div className="aspect-square flex justify-center items-center rounded-[20px] overflow-hidden mb-4 lg:mb-6 bg-sage">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full max-w-[75%] h-full max-h-[75%] object-contain"
                />
              </div>
              <h3 className="font-heading text-[24px] lg:text-[28px] text-black mb-3.5">
                {item.name}
              </h3>
              <p className="font-body text-sm lg:text-base text-black mb-4 leading-relaxed">
                {item.description}
              </p>
              <p className="font-body text-base lg:text-xl font-semibold text-black mt-auto">
                {item.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
