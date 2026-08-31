"use client";

import { useState } from "react";
import { X, Minus, Plus } from "lucide-react";
import { MenuItem } from "@/data/menuData";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function ProductModal({
  item,
  isOpen,
  onClose,
}: {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
}) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
    item.variants ? item.variants[0].name : undefined
  );
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    item.sizes ? item.sizes[0].name : undefined
  );

  if (!isOpen) return null;

  // Calculate current price based on selections
  let currentPrice = item.price;
  if (selectedVariant && item.variants) {
    const variant = item.variants.find((v) => v.name === selectedVariant);
    if (variant) currentPrice = variant.price;
  } else if (selectedSize && item.sizes) {
    const size = item.sizes.find((s) => s.name === selectedSize);
    if (size) currentPrice = size.price;
  }

  const handleAddToCart = () => {
    addItem(item, quantity, selectedVariant, selectedSize);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-gray-800 transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="relative aspect-video w-full bg-gray-100">
          <div className="absolute inset-0 bg-cheezarilla-red/10 flex items-center justify-center">
            <span className="text-gray-400 font-bold uppercase tracking-wider">Product Image</span>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-black text-gray-900 mb-2">{item.name}</h2>
          <p className="text-gray-500 mb-6">{item.description}</p>

          {/* Variants */}
          {item.variants && (
            <div className="mb-6">
              <h3 className="font-bold text-sm uppercase tracking-wider text-gray-900 mb-3">
                Options
              </h3>
              <div className="flex flex-wrap gap-3">
                {item.variants.map((variant) => (
                  <button
                    key={variant.name}
                    onClick={() => setSelectedVariant(variant.name)}
                    className={`px-4 py-2 rounded-xl font-bold text-sm transition-all border-2 ${
                      selectedVariant === variant.name
                        ? "border-cheezarilla-red bg-cheezarilla-red/5 text-cheezarilla-red"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    {variant.name} (+{formatPrice(variant.price)})
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {item.sizes && (
            <div className="mb-6">
              <h3 className="font-bold text-sm uppercase tracking-wider text-gray-900 mb-3">
                Size
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {item.sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    className={`px-4 py-3 rounded-xl font-bold text-sm transition-all border-2 flex justify-between items-center ${
                      selectedSize === size.name
                        ? "border-cheezarilla-red bg-cheezarilla-red/5 text-cheezarilla-red"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    <span>{size.name}</span>
                    <span className={selectedSize === size.name ? "text-cheezarilla-red" : "text-gray-400"}>
                      {formatPrice(size.price)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mt-8">
            <div className="flex items-center bg-gray-100 rounded-xl p-1 border border-gray-200">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white text-gray-600 transition-colors shadow-sm"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center font-bold text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white text-gray-600 transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 bg-cheezarilla-red hover:bg-cheezarilla-red-dark text-white font-bold py-4 rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <span>ADD TO ORDER</span>
              <span className="opacity-50">•</span>
              <span>{formatPrice(currentPrice * quantity)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
