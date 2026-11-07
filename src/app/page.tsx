import Hero from "@/components/home/Hero";
import { CtaBand, HomeAbout, HomeCatalogPreview, HomeServices } from "@/components/home/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeServices />
      <HomeAbout />
      <HomeCatalogPreview />
      <CtaBand />
    </>
  );
}
