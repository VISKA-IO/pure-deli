import { useState } from "react";

const categories = ["Vefjurnar", "Salötin", "Toastin"] as const;

const menuItems = {
  Vefjurnar: [
    { name: "Tuna Deli Salat", description: "Túnfiskur, maísólífur, avocado, gúrka, cherry tómatar, jurtaolía, egg og ostur.", price: "3.390 kr", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80" },
    { name: "Vegan Salat", description: "Salötuflís, verðkunn, gúrka, cherry tómatar, jurtaolía, blönduð fræ og pesto.", price: "3.390 kr", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80" },
    { name: "Indian Chicken Salat", description: "Salat, tómatur, kjúklingur, avocado, gúrka, cherry tómatar, jurtaolía, egg og pesto.", price: "3.390 kr", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80" },
  ],
  Salötin: [
    { name: "Vegan Salat", description: "Salötuflís, verðkunn, gúrka, cherry tómatar, jurtaolía, blönduð fræ og pesto.", price: "3.390 kr", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80" },
    { name: "Tuna Deli Salat", description: "Túnfiskur, maísólífur, avocado, gúrka, cherry tómatar, jurtaolía, egg og ostur.", price: "3.390 kr", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80" },
    { name: "Indian Chicken Salat", description: "Salat, tómatur, kjúklingur, avocado, gúrka, cherry tómatar, jurtaolía, egg og pesto.", price: "3.390 kr", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80" },
  ],
  Toastin: [
    { name: "Indian Chicken Salat", description: "Salat, tómatur, kjúklingur, avocado, gúrka, cherry tómatar.", price: "3.390 kr", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80" },
    { name: "Tuna Deli Salat", description: "Túnfiskur, maísólífur, avocado, gúrka, cherry tómatar, jurtaolía, egg og ostur.", price: "3.390 kr", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80" },
    { name: "Vegan Salat", description: "Salötuflís, verðkunn, gúrka, cherry tómatar, jurtaolía, blönduð fræ og pesto.", price: "3.390 kr", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80" },
  ],
};

export default function MenuTabs() {
  const [activeTab, setActiveTab] = useState<(typeof categories)[number]>("Salötin");

  return (
    <section className="py-16 px-16 max-w-[1200px] mx-auto">
      <div className="flex items-center justify-center gap-10 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`font-heading text-[24px] italic transition-colors cursor-pointer ${
              activeTab === cat
                ? "text-olive font-normal underline underline-offset-8 decoration-2 decoration-olive"
                : "text-black/30 font-normal"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-10">
        {menuItems[activeTab].map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="aspect-square rounded-full overflow-hidden mb-5 bg-sage/50">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-body text-[17px] font-semibold text-black mb-2">{item.name}</h3>
            <p className="font-body text-[13px] text-black/50 mb-3 leading-relaxed">{item.description}</p>
            <p className="font-body text-[15px] font-semibold text-black mt-auto">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
