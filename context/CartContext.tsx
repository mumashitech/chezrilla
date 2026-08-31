"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuItem } from "@/data/menuData";

export interface CartItem extends MenuItem {
  cartItemId: string;
  quantity: number;
  selectedVariant?: string;
  selectedSize?: string;
  price: number; // Adjusted price based on variant/size
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem, quantity?: number, selectedVariant?: string, selectedSize?: string) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem("cheezarilla_cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart from local storage", e);
      }
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("cheezarilla_cart", JSON.stringify(items));
    }
  }, [items, isMounted]);

  const addItem = (item: MenuItem, quantity = 1, selectedVariant?: string, selectedSize?: string) => {
    setItems((prevItems) => {
      // Determine the price to use
      let itemPrice = item.price;
      if (selectedVariant && item.variants) {
        const variant = item.variants.find((v) => v.name === selectedVariant);
        if (variant) itemPrice = variant.price;
      } else if (selectedSize && item.sizes) {
        const size = item.sizes.find((s) => s.name === selectedSize);
        if (size) itemPrice = size.price;
      }

      // Check if exact same item exists
      const existingItemIndex = prevItems.findIndex(
        (i) => i.id === item.id && i.selectedVariant === selectedVariant && i.selectedSize === selectedSize
      );

      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }

      return [
        ...prevItems,
        {
          ...item,
          cartItemId: `${item.id}-${selectedVariant || ""}-${selectedSize || ""}-${Date.now()}`,
          quantity,
          selectedVariant,
          selectedSize,
          price: itemPrice,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const removeItem = (cartItemId: string) => {
    setItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(cartItemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.cartItemId === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
