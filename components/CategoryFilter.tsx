"use client";

import { Category, categories } from "@/data/menuData";
import { cn } from "@/lib/utils";

export default function CategoryFilter({
  activeCategory,
  onSelectCategory,
}: {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
}) {
  return (
    <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
      <div className="flex items-center gap-2 md:justify-center md:flex-wrap min-w-max px-4 md:px-0">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={cn(
              "px-5 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-sm border",
              activeCategory === category
                ? "bg-cheezarilla-red text-white border-cheezarilla-red"
                : "bg-white text-gray-600 hover:bg-cheezarilla-yellow/20 hover:text-cheezarilla-charcoal border-gray-200"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
