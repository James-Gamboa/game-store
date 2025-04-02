import Image from "next/image";
import NavBar from "./components/NavBar/Page";
import SearchBar from "./components/SearchBar/page";
import FeaturedGames from "./components/FeaturedGames/page";
import BrowseByCategory from "./components/BrowseByCategory/Page";
import HeroSection from "./components/HeroSection/page";
import PromotionBanner from "./components/PromotionBanner/page";
import NewReleasesSection from "./components/NewReleasesSection/page";

export default function Page() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <SearchBar />
      <FeaturedGames />
      <BrowseByCategory />
      <PromotionBanner />
      <NewReleasesSection />
    </>
  );
}