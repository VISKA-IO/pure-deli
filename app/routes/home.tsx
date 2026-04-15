import Hero from "../components/Hero";
import MenuTabs from "../components/MenuTabs";
import Catering from "../components/Catering";
import LatestNews from "../components/LatestNews";
import MorningEnergy from "../components/MorningEnergy";
import Locations from "../components/Locations";
import { WORDPRESS_BASE_URL } from "../utils/constants";
import { formatDate } from "../utils/formatDate";
import type { WPPost } from "../types/wordpress";
import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Pure Deli - Tasty, Fresh & Healthy Food" }];
}

export async function loader() {
  try {
    const response = await fetch(
      `${WORDPRESS_BASE_URL}/v2/posts?per_page=3&_embed`,
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const posts = (await response.json()) as WPPost[];

    const latestNews = posts.map((post) => ({
      title: post.title.rendered,
      date: formatDate(post.date),
      imageUrl: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "",
      slug: post.slug,
    }));

    return { latestNews };
  } catch (error) {
    console.error("Failed to fetch latest news:", error);
    return { latestNews: [] };
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <Hero />
      <MenuTabs />
      <Catering />
      <LatestNews items={loaderData.latestNews} />
      <MorningEnergy />
      <Locations />
    </>
  );
}
