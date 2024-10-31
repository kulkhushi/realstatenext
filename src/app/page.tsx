import SettingStandrad from "@/Components/Home/SettingStandrad";
import HeroSection from "../Components/Home/HeroSection";
import Numbers from "@/Components/Home/Numbers";
import AboutHome from "@/Components/Home/AboutHome";
import PropertySlider from "@/Components/Home/PropertySlider";
import Clwantail from "@/Components/Home/Clwantail";
import Brand from "@/Components/Home/Brand";
import AreaExpertise from "@/Components/Home/AreaExpertise";
import ExclusiveList from "@/Components/Home/ExclusiveList";
import ReceiveInbox from "@/Components/Home/ReceiveInbox";
import HomeNews from "@/Components/Home/HomeNews";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <SettingStandrad />
      <Numbers/>
      <AboutHome/>
      <PropertySlider/>
      <Clwantail/>
      <Brand/>
      <AreaExpertise/>
      <ExclusiveList/>
      <ReceiveInbox/>
      <HomeNews/>
    </div>
  );
}
