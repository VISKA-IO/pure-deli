export default function Catering() {
  return (
    <section>
      <div className="mx-auto flex max-w-[1200px] items-center min-h-[480px]">
        <div className="w-[55%] px-16 py-20">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-olive mb-4">
            Catering
          </p>
          <h2 className="font-heading text-[52px] italic font-normal leading-[1.15] text-black mb-5">
            Matur fyrir fyrirtæki
          </h2>
          <p className="font-body text-[15px] text-black/60 leading-relaxed mb-8 max-w-[440px]">
            Grillað er hæfilur matur skiptir miklu máli. Til að geta staðið öðlast
            góðu fæðu. Það alltaf vefur þátttara, funnuvornum
            og fjöllin og þjónustu við mörking bakstoð. Ferskur, bragðgott,
            litríkur, matur getur komið að Málugan og vörðum öðru meðlögu.
          </p>
          <a
            href="/catering"
            className="inline-flex items-center justify-center rounded-full bg-olive px-8 py-3.5 font-body text-[12px] font-medium uppercase tracking-[0.2em] text-white"
          >
            Learn more
          </a>
        </div>
        <div className="w-[45%]">
          <img
            src="/images/img_catering.jpg"
            alt="Catering food spread"
            className="w-full h-[480px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
