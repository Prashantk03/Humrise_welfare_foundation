import HeroSection from "@/sections/HeroSection";
import ImpactStats from "@/sections/ImpactStats";
import FocusAreas from "@/sections/FocusAreas";
import CampaignSection from "@/sections/CampaignSection";
import VolunteerSection from "@/sections/VolunteerSection";
import GalleryPreview from "@/sections/GalleryPreview";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ImpactStats />
      <FocusAreas />
      <CampaignSection />
      <VolunteerSection />
      <GalleryPreview />
    </main>
  );
}