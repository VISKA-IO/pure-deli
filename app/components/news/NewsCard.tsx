import { Link } from "react-router";
import { ArrowRightIcon } from "../_shared/icons/ArrowRightIcon";

type NewsCardProps = {
  title: string;
  date: string;
  imageUrl: string;
  slug: string;
};

export function NewsCard({ title, date, imageUrl, slug }: NewsCardProps) {
  return (
    <Link
      to={`/frettir/${slug}`}
      className="flex flex-row-reverse lg:flex-col group gap-4.5 lg:gap-0 first:pt-0 py-4 lg:py-0 border-b border-[#EFEFEF] last:border-0 lg:border-0"
    >
      <div className="aspect-100/78 lg:aspect-100/66 h-fit w-[30%] lg:w-full overflow-hidden rounded-[10px] lg:rounded-[20px] lg:mb-5">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-center object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex-1">
        <p className="font-body text-xs lg:text-base text-black mb-1 lg:mb-1.5">
          {date}
        </p>
        <h3
          className="font-heading text-[20px] lg:text-[24px] text-black leading-snug lg:mb-4"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="font-body text-base font-medium uppercase text-olive hidden lg:flex items-center gap-2">
          Lesa meira <ArrowRightIcon />
        </div>
      </div>
    </Link>
  );
}
