import { Link } from "react-router";
import { ArrowRightIcon } from "./_shared/icons/ArrowRightIcon";

type NewsItem = {
  title: string;
  date: string;
  imageUrl: string;
  slug: string;
};

type LatestNewsProps = {
  items: NewsItem[];
};

export default function LatestNews({ items }: LatestNewsProps) {
  if (items.length === 0) return null;

  return (
    <section className="w-full">
      <div className="container pt-15.5 lg:pt-25 pb-8 lg:pb-12.5">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-[38px] lg:text-[42px] font-normal text-black">
            Nýjast
          </h2>
          <Link
            to="/news"
            className="font-body text-base font-medium uppercase text-olive flex items-center gap-2"
          >
            Sjá meira
            <ArrowRightIcon />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              to={`/news/${item.slug}`}
              key={item.slug}
              className="flex items-stretch gap-6 lg:rounded-[20px] lg:bg-off-white lg:p-5"
            >
              <div className="flex-1 flex flex-col">
                <p className="lg:hidden text-xs font-body mb-1">{item.date}</p>
                <h3
                  className="font-heading text-[20px] lg:text-[22px] text-black leading-snug mb-4 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <div className="mt-auto font-body text-base font-medium uppercase text-olive hidden lg:flex items-center gap-2">
                  Lesa meira <ArrowRightIcon />
                </div>
              </div>
              <div className="h-20.5 lg:h-31 lg:w-31 aspect-100/78 lg:aspect-auto overflow-hidden rounded-[10px]">
                <img
                  src={item.imageUrl}
                  alt=""
                  className="h-full w-full object-center object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
