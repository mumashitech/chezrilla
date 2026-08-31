import WhyUs from "@/components/WhyUs";
import CTASection from "@/components/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Cheezarilla",
  description: "More than just fast food. Learn about Cheezarilla's commitment to quality food, bold flavors, and customer satisfaction in Peshawar.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-cheezarilla-charcoal pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-cheezarilla-yellow mb-4 tracking-tight uppercase">
            Our Story
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black text-gray-900 mb-6 uppercase leading-tight">
                  MORE THAN JUST <br />
                  <span className="text-cheezarilla-red">FAST FOOD.</span>
                </h2>
                <div className="space-y-4 text-lg text-gray-600 font-medium">
                  <p>
                    At Cheezarilla, we believe that food should be an experience. 
                    We don't just serve meals; we serve bold flavors, generous portions, 
                    and a commitment to quality that you can taste in every bite.
                  </p>
                  <p>
                    Located in the heart of Peshawar near Town Heights University, 
                    we've built our menu around the idea of trust. When you order 
                    from Cheezarilla, you know you're getting the best ingredients, 
                    prepared with care, and served in a welcoming atmosphere.
                  </p>
                  <p>
                    Whether you're craving a towering burger, a cheesy pizza, or a 
                    perfectly grilled steak, we have something to satisfy every appetite.
                  </p>
                </div>
              </div>
              
              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-8">
                  <div className="bg-gray-200 aspect-[4/5] rounded-2xl overflow-hidden relative shadow-lg">
                    <div className="absolute inset-0 bg-cheezarilla-red/10 flex items-center justify-center">
                      <span className="text-gray-500 font-bold">Food Photo</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-200 aspect-[4/5] rounded-2xl overflow-hidden relative shadow-lg">
                    <div className="absolute inset-0 bg-cheezarilla-yellow/10 flex items-center justify-center">
                      <span className="text-gray-500 font-bold">Atmosphere</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />
      <CTASection />
    </>
  );
}
