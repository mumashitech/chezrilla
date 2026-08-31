import { Flame, Leaf, Utensils, Smile } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      title: "BIG FLAVOR",
      description: "Bold and satisfying flavors that leave you wanting more.",
      icon: <Flame className="w-8 h-8 text-cheezarilla-yellow" />,
    },
    {
      title: "FRESHLY PREPARED",
      description: "Food prepared with care, using the freshest ingredients.",
      icon: <Leaf className="w-8 h-8 text-cheezarilla-yellow" />,
    },
    {
      title: "VARIETY",
      description: "Burgers, pizza, wraps, steaks and more — something for everyone.",
      icon: <Utensils className="w-8 h-8 text-cheezarilla-yellow" />,
    },
    {
      title: "GOOD MOOD",
      description: "Good food should always come with a good mood.",
      icon: <Smile className="w-8 h-8 text-cheezarilla-yellow" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-cheezarilla-charcoal mb-4 uppercase">
            WHY <span className="text-cheezarilla-red">CHEEZARILLA?</span>
          </h2>
          <div className="w-24 h-1 bg-cheezarilla-yellow mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cheezarilla-yellow/30 group"
            >
              <div className="w-16 h-16 mx-auto bg-cheezarilla-red rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform shadow-lg">
                {reason.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-cheezarilla-charcoal">
                {reason.title}
              </h3>
              <p className="text-gray-600 font-medium">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
