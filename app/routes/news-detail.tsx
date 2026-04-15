import { WORDPRESS_BASE_URL } from "../utils/constants";
import type { WPPost } from "../types/wordpress";
import type { Route } from "./+types/news-detail";
import { ArrowRightIcon } from "../components/_shared/icons/ArrowRightIcon";
import { useNavigate } from "react-router";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export async function loader({ params }: Route.LoaderArgs) {
  const { slug } = params;

  const response = await fetch(
    `${WORDPRESS_BASE_URL}/v2/posts?slug=${encodeURIComponent(slug)}&_embed`,
  );

  if (!response.ok) {
    throw new Response("Failed to fetch article", { status: response.status });
  }

  const posts = (await response.json()) as WPPost[];
  const post = posts[0];

  if (!post) {
    throw new Response("Article not found", { status: 404 });
  }

  return {
    title: post.title.rendered,
    date: dateFormatter.format(new Date(post.date)),
    imageUrl: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "",
    content: post.content.rendered,
  };
}

export function meta({ loaderData }: Route.MetaArgs) {
  return [
    {
      title: loaderData
        ? `${loaderData.title} - Pure Deli`
        : "News - Pure Deli",
    },
  ];
}

export default function NewsDetail({ loaderData }: Route.ComponentProps) {
  const { title, date, imageUrl, content } = loaderData;

  const navigate = useNavigate();

  return (
    <section className="w-full pt-10 lg:pt-15.5 pb-20 lg:pb-25">
      <div className="container max-w-183.5">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-olive font-medium text-base uppercase mb-6 cursor-pointer"
        >
          <ArrowRightIcon className="-rotate-180" />
          Back
        </button>

        <p className="font-body text-sm text-black mb-1">{date}</p>
        <h1
          className="font-heading text-black text-[30px] lg:text-[45px] leading-tight mb-7 lg:mb-11"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {imageUrl && (
          <div className="aspect-100/66 lg:aspect-100/51 overflow-hidden rounded-[20px] mb-8">
            <img
              src={imageUrl}
              alt=""
              className="h-full w-full object-center object-cover"
            />
          </div>
        )}
        <div
          className="wp-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
}
