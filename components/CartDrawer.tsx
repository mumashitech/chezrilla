"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeItem, totalPrice, clearCart } =
    useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    const link = generateWhatsAppLink(items, totalPrice);
    window.open(link, "_blank");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-[70] w-full md:w-[450px] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-cheezarilla-red" />
            <h2 className="font-bold text-lg">Your Order</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-4">
              <ShoppingBag className="w-16 h-16 opacity-20" />
              <p className="font-medium text-lg">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-cheezarilla-red font-bold hover:underline"
              >
                Explore Menu
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.cartItemId}
                className="flex gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100"
              >
                {/* Product Image placeholder or real image if available */}
                <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0 relative">
                  {/* Using placeholder for now, would replace with actual image */}
                  <div className="absolute inset-0 bg-cheezarilla-red/10 flex items-center justify-center text-cheezarilla-red font-bold text-xs">
                    CHZ
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-sm leading-tight text-gray-900">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeItem(item.cartItemId)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    {(item.selectedVariant || item.selectedSize) && (
                      <p className="text-xs text-gray-500 mt-1">
                        {item.selectedVariant} {item.selectedSize}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-cheezarilla-red">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                    <div className="flex items-center gap-3 bg-white rounded-lg border px-2 py-1 shadow-sm">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="text-gray-500 hover:text-cheezarilla-red"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-bold text-sm w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="text-gray-500 hover:text-cheezarilla-red"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout */}
        {items.length > 0 && (
          <div className="border-t p-4 bg-gray-50 space-y-4">
            <div className="flex items-center justify-between font-bold text-lg">
              <span>Total</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <span>Order on WhatsApp</span>
            </button>
            <button
              onClick={clearCart}
              className="w-full text-center text-sm text-gray-500 hover:text-cheezarilla-red font-medium transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
