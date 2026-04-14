import type { MetaFunction } from "react-router";
import Hero from "../components/Hero";
import MenuTabs from "../components/MenuTabs";
import Catering from "../components/Catering";
import LatestNews from "../components/LatestNews";
import MorningEnergy from "../components/MorningEnergy";
import Locations from "../components/Locations";

export const meta: MetaFunction = () => [
  { title: "Pure Deli - Tasty, Fresh & Healthy Food" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <MenuTabs />
      <Catering />
      <LatestNews />
      <MorningEnergy />
      <Locations />
    </>
  );
}
