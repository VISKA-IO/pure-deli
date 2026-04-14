export default function Hero() {
  return (
    <section className="relative h-[724px] bg-hero overflow-hidden">
      <img
        src="/images/img_17.jpg"
        alt="Fresh healthy food spread on a table"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 mx-auto max-w-[1200px] h-full flex flex-col justify-end px-16 pb-24">
        <div className="max-w-[550px]">
          <h1 className="font-heading text-[52px] italic font-normal leading-[1.1] text-white mb-4">
            For the meeting, the team, the occasion
          </h1>
          <p className="font-body text-[16px] font-normal text-white/80 mb-8">
            Tasty, fresh &amp; healthy food
          </p>
          <a
            href="/order"
            className="inline-flex items-center justify-center rounded-full bg-olive px-10 py-3 font-body text-[12px] font-medium uppercase tracking-[0.2em] text-white"
          >
            Order now
          </a>
        </div>
      </div>
    </section>
  );
}
