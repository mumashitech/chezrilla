"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-cheezarilla-red text-white shadow-lg py-2"
          : "bg-cheezarilla-red/95 text-white py-4 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50" onClick={() => setIsOpen(false)}>
          <span className="text-2xl font-black tracking-widest flex items-center">
            CHEEZ
            <span className="text-cheezarilla-yellow font-extrabold text-3xl transform -translate-y-1 inline-block drop-shadow-md">
              Z
            </span>
            ARILLA
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-bold uppercase tracking-wider hover:text-cheezarilla-yellow transition-colors",
                pathname === link.href ? "text-cheezarilla-yellow" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:0915703021"
            className="flex items-center gap-2 text-sm font-bold hover:text-cheezarilla-yellow transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="sr-only lg:not-sr-only">0915 703 021</span>
          </a>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:text-cheezarilla-yellow transition-colors"
            aria-label="Open cart"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-cheezarilla-yellow text-[10px] font-bold text-cheezarilla-charcoal">
                {totalItems}
              </span>
            )}
          </button>
          <Link
            href="/menu"
            className="bg-cheezarilla-yellow text-cheezarilla-charcoal px-6 py-2 rounded-full font-bold uppercase text-sm hover:bg-yellow-400 transition-colors shadow-md"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-4 z-50">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:text-cheezarilla-yellow transition-colors"
            aria-label="Open cart"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-cheezarilla-yellow text-[10px] font-bold text-cheezarilla-charcoal">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-cheezarilla-red z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-2xl font-black uppercase tracking-wider",
                pathname === link.href ? "text-cheezarilla-yellow" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-4">
            <Link
              href="/menu"
              onClick={() => setIsOpen(false)}
              className="bg-cheezarilla-yellow text-cheezarilla-charcoal py-4 rounded-full font-black uppercase text-lg w-full"
            >
              Order Now
            </Link>
            <a
              href="tel:0915703021"
              className="flex items-center justify-center gap-2 py-4 border-2 border-white/20 rounded-full font-bold"
            >
              <Phone className="w-5 h-5" />
              091 570 3021
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
