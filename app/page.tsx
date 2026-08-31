import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import PopularItems from "@/components/PopularItems";
import WhyUs from "@/components/WhyUs";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <PromoBanner />
      <PopularItems />
      <WhyUs />
      <CTASection />
    </>
  );
}
