"use client";

import { useState } from "react";
import { Category, getItemsByCategory } from "@/data/menuData";
import CategoryFilter from "./CategoryFilter";
import FoodCard from "./FoodCard";

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  
  const displayedItems = getItemsByCategory(activeCategory);

  return (
    <div className="w-full">
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md py-4 mb-8 -mx-4 px-4 md:mx-0 md:px-0 border-b border-gray-100">
        <CategoryFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </div>

      {displayedItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500 font-medium">No items found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-500">
          {displayedItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
