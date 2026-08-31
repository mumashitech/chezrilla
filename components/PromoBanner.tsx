import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <div className="bg-cheezarilla-charcoal text-white py-4 overflow-hidden relative">
      {/* Moving text or static promo */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex h-3 w-3 rounded-full bg-cheezarilla-yellow animate-pulse"></span>
            <p className="font-bold text-lg md:text-xl uppercase tracking-wider text-cheezarilla-yellow">
              CRAVING SOMETHING CHEESY?
            </p>
          </div>
          
          <p className="hidden md:block font-medium text-white/80">
            Order your favorite Cheezarilla meal today.
          </p>
          
          <Link 
            href="/menu"
            className="flex items-center gap-2 text-white font-bold hover:text-cheezarilla-yellow transition-colors group"
          >
            ORDER NOW
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
