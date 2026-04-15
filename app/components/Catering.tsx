export default function Catering() {
  return (
    <section className="w-full bg-off-white">
      <div className="container flex flex-col-reverse gap-13 lg:flex-row items-center pb-20 lg:pb-16.25 pt-15.5 lg:pt-16.25">
        <div className="flex-1">
          <div className="flex flex-col lg:max-w-102.5">
            <p className="font-body text-lg lg:text-xl font-medium uppercase text-olive mb-4 lg:mb-6">
              Veisluþjónusta
            </p>
            <h2 className="font-heading text-[38px] lg:text-[52px] font-normal leading-[1.15] text-black mb-6 lg:mb-8">
              Matur fyrir fyrirtæki
            </h2>
            <p className="font-body text-base text-black leading-relaxed mb-10 lg:mb-13">
              Góður & hollur matur skiptir miklu máli til að getað skilað góðu
              dags verki. Til að líðan starfsmanna, fundarmanna og öllum í
              teyminu sé góð, öflug og árangursrík þá er næring lykilatriði.
              Ferskur, fallegur, litríkur, matur gerir fundinn líflegan og
              viðburðina skemmtilega.
            </p>
            <a
              href="mailto:puredeli@puredeli.is"
              className="inline-flex w-full lg:w-fit items-center justify-center rounded-full bg-olive min-w-64.75 p-4 font-body text-base font-medium uppercase text-white"
            >
              Senda fyrirspurn
            </a>
          </div>
        </div>
        <div className="w-full lg:w-[45%] h-auto aspect-85/100 overflow-hidden rounded-[20px]">
          <img
            src="/images/catering-image.png"
            alt="Catering food spread"
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
    </section>
  );
}
