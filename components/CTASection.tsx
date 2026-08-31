import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-cheezarilla-red relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cheezarilla-yellow/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-md">
          HUNGRY YET?
        </h2>
        <p className="text-xl md:text-2xl text-cheezarilla-yellow font-bold mb-10 max-w-2xl mx-auto drop-shadow-sm">
          Your next favorite meal is waiting.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/menu"
            className="bg-cheezarilla-yellow hover:bg-yellow-400 text-cheezarilla-charcoal px-10 py-5 rounded-full font-black uppercase text-xl transition-transform hover:scale-105 shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            ORDER NOW
            <ArrowRight className="w-6 h-6" />
          </Link>
          <Link
            href="/menu"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cheezarilla-red px-10 py-5 rounded-full font-black uppercase text-xl transition-colors shadow-lg w-full sm:w-auto justify-center text-center"
          >
            VIEW MENU
          </Link>
        </div>
      </div>
    </section>
  );
}
