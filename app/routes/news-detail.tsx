import { WORDPRESS_BASE_URL } from "../utils/constants";
import { formatDate } from "../utils/formatDate";
import type { WPPost } from "../types/wordpress";
import type { Route } from "./+types/news-detail";
import { ArrowRightIcon } from "../components/_shared/icons/ArrowRightIcon";
import { NewsCard } from "../components/news/NewsCard";
import { useNavigate } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  const { slug } = params;

  const [postResponse, latestResponse] = await Promise.all([
    fetch(
      `${WORDPRESS_BASE_URL}/v2/posts?slug=${encodeURIComponent(slug)}&_embed`,
    ),
    fetch(`${WORDPRESS_BASE_URL}/v2/posts?_embed&per_page=4`),
  ]);

  if (!postResponse.ok) {
    throw new Response("Failed to fetch article", {
      status: postResponse.status,
    });
  }

  const posts = (await postResponse.json()) as WPPost[];
  const post = posts[0];

  if (!post) {
    throw new Response("Article not found", { status: 404 });
  }

  let otherPosts: {
    title: string;
    date: string;
    imageUrl: string;
    slug: string;
  }[] = [];
  try {
    if (latestResponse.ok) {
      const latestPosts = (await latestResponse.json()) as WPPost[];
      otherPosts = latestPosts
        .filter((p) => p.slug !== slug)
        .slice(0, 3)
        .map((p) => ({
          title: p.title.rendered,
          date: formatDate(p.date),
          imageUrl: p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "",
          slug: p.slug,
        }));
    }
  } catch {
    // don't crash the page if latest posts fail
  }

  return {
    title: post.title.rendered,
    date: formatDate(post.date),
    imageUrl: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "",
    content: post.content.rendered,
    otherPosts,
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
  const { title, date, imageUrl, content, otherPosts } = loaderData;

  const navigate = useNavigate();

  return (
    <>
      <section className="w-full pt-10 lg:pt-15.5 pb-20 lg:pb-25">
        <div className="container max-w-183.5!">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-olive font-medium text-base uppercase mb-6 cursor-pointer"
          >
            <ArrowRightIcon className="-rotate-180" />
            Til baka
          </button>

          <p className="font-body text-base text-black mb-1">{date}</p>
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

      {otherPosts.length > 0 && (
        <section className="w-full bg-[#F4F3E7] py-13 lg:py-20">
          <div className="container">
            <h2 className="font-heading text-black text-[28px] lg:text-[42px] mb-7 lg:mb-10">
              Aðrar fréttir
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-7.5">
              {otherPosts.map((post) => (
                <NewsCard key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
