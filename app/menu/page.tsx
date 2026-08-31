import MenuGrid from "@/components/MenuGrid";
import CTASection from "@/components/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Cheezarilla",
  description: "Explore the full Cheezarilla menu. Burgers, pizza, wraps, steaks, pasta, and Chinese & Thai food.",
};

export default function MenuPage() {
  return (
    <>
      {/* Menu Header */}
      <div className="bg-cheezarilla-red pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cheezarilla-yellow/20 rounded-full mix-blend-overlay blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-md uppercase">
            Our Menu
          </h1>
          <p className="text-xl text-cheezarilla-off-white/90 font-medium max-w-2xl mx-auto">
            A menu of trust. Freshly prepared, boldly flavored.
          </p>
        </div>
      </div>

      {/* Menu Content */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <MenuGrid />
        </div>
      </section>
      
      <CTASection />
    </>
  );
}
