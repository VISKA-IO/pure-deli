import type { MetaFunction } from "react-router";
import { NewsCard } from "../components/news/NewsCard";
import { WORDPRESS_BASE_URL } from "../utils/constants";
import type { WPPost } from "../types/wordpress";
import type { Route } from "./+types/news";

export const meta: MetaFunction = () => [{ title: "News - Pure Deli" }];

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export async function loader() {
  const response = await fetch(`${WORDPRESS_BASE_URL}/v2/posts?_embed`);

  if (!response.ok) {
    throw new Response("Failed to fetch articles", { status: response.status });
  }

  const posts = (await response.json()) as WPPost[];

  return posts.map((post) => ({
    title: post.title.rendered,
    date: dateFormatter.format(new Date(post.date)),
    imageUrl: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "",
    slug: post.slug,
  }));
}

export default function News({ loaderData }: Route.ComponentProps) {
  const articles = loaderData;

  return (
    <section className="w-full pt-10 lg:pt-15.5 pb-20 lg:pb-25">
      <div className="container">
        <h1 className="font-heading text-black lg:text-center text-[40px] lg:text-[52px] mb-7 lg:mb-13">
          News
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-7.5">
          {articles.map((article) => (
            <NewsCard key={article.slug} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
