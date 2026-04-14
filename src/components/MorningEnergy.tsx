export default function MorningEnergy() {
  return (
    <section className="max-w-[1200px] mx-auto px-16 py-12">
      <div className="grid grid-cols-2 gap-6">
        {/* Góð orka í byrjun dags */}
        <div className="rounded-[20px] overflow-hidden bg-cream p-10 flex flex-col">
          <h2 className="font-heading text-[32px] italic font-normal leading-[1.15] text-black mb-3">
            Góð orka í byrjun dags
          </h2>
          <p className="font-body text-[14px] text-black/60 leading-relaxed mb-5">
            Á Pure deli finnurðu næringarríkum protein boost, sem eru drykkingar
            einstaklega frábært til að byrja daginn á.
          </p>
          <a
            href="/menu"
            className="inline-flex items-center gap-1 font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-black mb-6"
          >
            Learn more <span aria-hidden="true">&rarr;</span>
          </a>
          <div className="mt-auto flex gap-4">
            <div className="w-1/2 h-[180px] rounded-xl overflow-hidden">
              <img src="/images/img_smoothie.jpg" alt="Smoothie" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/2 h-[180px] rounded-xl overflow-hidden">
              <img src="/images/img_coffee.jpg" alt="Coffee" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Gott kaffi skiptir miklu mál */}
        <div className="rounded-[20px] overflow-hidden bg-sage p-10 flex flex-col">
          <h2 className="font-heading text-[32px] italic font-normal leading-[1.15] text-black mb-3">
            Gott kaffi skiptir miklu mál
          </h2>
          <p className="font-body text-[14px] text-black/60 leading-relaxed mb-5">
            Við nýtum einungis hágæðakaffi. Prófaðu okkar sérstöku bragðtegundir
            og finndu þitt uppáhald.
          </p>
          <a
            href="/menu"
            className="inline-flex items-center gap-1 font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-black mb-6"
          >
            Learn more <span aria-hidden="true">&rarr;</span>
          </a>
          <div className="mt-auto flex gap-4">
            <div className="w-1/2 h-[180px] rounded-xl overflow-hidden">
              <img src="/images/img_smoothie.jpg" alt="Iced drink" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/2 h-[180px] rounded-xl overflow-hidden">
              <img src="/images/img_coffee.jpg" alt="Coffee pastries" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
