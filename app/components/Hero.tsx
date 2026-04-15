export default function Hero() {
  return (
    <section className="relative h-159.25 lg:h-201 bg-hero overflow-hidden">
      <img
        src="/images/hero-image.png"
        alt="Fresh healthy food spread on a table"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 container h-full flex flex-col justify-center">
        <div className="max-w-[80%] lg:max-w-137.5">
          <h1 className="font-heading text-[42px] lg:text-[62px] font-normal leading-[1.1] text-white mb-3.5 lg:mb-4">
            Fyrir fundinn, teymið, tilefnið & þig
          </h1>
          <p className="font-body text-base lg:text-xl font-medium text-white mb-5 lg:mb-10.5">
            Bragðgóður, ferskur & hollur matur
          </p>
          <a
            href="/order"
            className="inline-flex items-center justify-center rounded-full bg-accent px-14.5 py-3.5 lg:py-4 font-body text-base lg:text-lg font-medium uppercase text-black"
          >
            Panta mat
          </a>
        </div>
      </div>
    </section>
  );
}
