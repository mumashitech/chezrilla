"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { MenuItem } from "@/data/menuData";
import { formatPrice } from "@/lib/utils";
import ProductModal from "./ProductModal";

export default function FoodCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // If item has sizes or variants, we must open modal to choose.
  const requiresSelection = Boolean(item.sizes?.length || item.variants?.length);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent modal opening if clicking directly
    if (requiresSelection) {
      setIsModalOpen(true);
    } else {
      addItem(item, 1);
    }
  };

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group flex flex-col h-full border border-gray-100"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
          <div className="absolute inset-0 bg-cheezarilla-red/5 group-hover:bg-transparent transition-colors z-10"></div>
          {/* Using placeholder for now, ideally an <Image /> */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
             <span className="text-gray-400 font-bold uppercase tracking-wider">Image</span>
          </div>
          {item.popular && (
            <div className="absolute top-3 left-3 z-20 bg-cheezarilla-yellow text-cheezarilla-charcoal text-xs font-bold uppercase px-3 py-1 rounded-full shadow-md">
              Popular
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg leading-tight text-gray-900 group-hover:text-cheezarilla-red transition-colors">
              {item.name}
            </h3>
          </div>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
            {item.description}
          </p>
          
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <span className="font-black text-lg text-cheezarilla-red">
              {item.sizes ? `From ${formatPrice(item.sizes[0].price)}` : formatPrice(item.price)}
            </span>
            
            <button
              onClick={handleAdd}
              className="bg-cheezarilla-charcoal hover:bg-cheezarilla-red text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md transform hover:scale-110"
              aria-label="Add to cart"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProductModal item={item} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
