"use client";

import { popularItems } from "@/data/menuData";
import FoodCard from "./FoodCard";

export default function PopularItems() {
  return (
    <section className="py-20 bg-cheezarilla-off-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-cheezarilla-charcoal mb-4 uppercase">
            Customer <span className="text-cheezarilla-red">Favorites</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Some of the favorites our customers keep coming back for.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
