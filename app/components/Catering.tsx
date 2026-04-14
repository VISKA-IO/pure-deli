import { Link } from "react-router";

export default function Catering() {
  return (
    <section className="w-full bg-off-white">
      <div className="container flex flex-col-reverse gap-13 lg:flex-row items-center pb-20 lg:pb-16.25 pt-15.5 lg:pt-16.25">
        <div className="flex-1">
          <div className="flex flex-col max-w-102.5">
            <p className="font-body text-lg lg:text-xl font-medium uppercase text-olive mb-4 lg:mb-6">
              Catering
            </p>
            <h2 className="font-heading text-[38px] lg:text-[52px] font-normal leading-[1.15] text-black mb-6 lg:mb-8">
              Matur fyrir fyrirtæki
            </h2>
            <p className="font-body text-base text-black leading-relaxed mb-10 lg:mb-13">
              Grillað er hæfilur matur skiptir miklu máli. Til að geta staðið
              öðlast góðu fæðu. Það alltaf vefur þátttara, funnuvornum og
              fjöllin og þjónustu við mörking bakstoð. Ferskur, bragðgott,
              litríkur, matur getur komið að Málugan og vörðum öðru meðlögu.
            </p>
            <Link
              to="/catering"
              className="inline-flex w-full md:w-fit items-center justify-center rounded-full bg-olive min-w-64.75 p-4 font-body text-base font-medium uppercase text-white"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[45%] h-auto aspect-85/100 overflow-hidden rounded-[20px]">
          <img
            src="/images/img_catering.jpg"
            alt="Catering food spread"
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
    </section>
  );
}
