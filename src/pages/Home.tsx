import Header from "../components/Header";
import Hero from "../components/Hero";
import MenuTabs from "../components/MenuTabs";
import Catering from "../components/Catering";
import LatestNews from "../components/LatestNews";
import MorningEnergy from "../components/MorningEnergy";
import Locations from "../components/Locations";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MenuTabs />
        <Catering />
        <LatestNews />
        <MorningEnergy />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
