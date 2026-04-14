export default function CoffeeSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-16 py-12">
      <div className="flex items-stretch rounded-2xl overflow-hidden bg-light-sage min-h-[420px]">
        <div className="w-[45%]">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
            alt="Coffee and pastry"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[55%] px-14 py-14 flex flex-col justify-center">
          <h2 className="font-heading text-[40px] font-normal leading-[1.15] text-black mb-5">
            Gott kaffi skiptir miklu mál
          </h2>
          <p className="font-body text-[15px] text-black/60 leading-relaxed mb-8 max-w-[420px]">
            Á Pure deli finnstu rein nýgerð prótein boost, sem eru drykkingar
            einstaklega frábært til að byrja daginn á. Hvort sem þú vilt leita
            að léttum eða ríkum valkostum, pössum við fitt prótein og ferskum
            meðlögum.
          </p>
          <a
            href="/menu"
            className="inline-flex items-center justify-center self-start rounded-full bg-dark px-8 py-3.5 font-body text-[12px] font-medium uppercase tracking-[0.2em] text-white"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
