import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-cheezarilla-red pt-20 overflow-hidden">
      {/* Background patterns/textures */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cheezarilla-yellow rounded-full mix-blend-overlay blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-black rounded-full mix-blend-overlay blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block bg-cheezarilla-yellow text-cheezarilla-charcoal font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider shadow-lg">
              Cheezarilla Restaurant
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              BIG FLAVOR. <br />
              <span className="text-cheezarilla-yellow drop-shadow-lg">
                BIGGER CRAVINGS.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed font-medium">
              From cheesy burgers and loaded fries to pizzas, wraps, steaks and more — 
              Cheezarilla brings bold flavor to every bite. A menu of trust.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link 
                href="/menu"
                className="bg-cheezarilla-yellow hover:bg-yellow-400 text-cheezarilla-charcoal px-8 py-4 rounded-full font-black uppercase text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.5)] flex items-center gap-2"
              >
                ORDER NOW
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/menu"
                className="bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold uppercase text-lg transition-all"
              >
                EXPLORE MENU
              </Link>
            </div>
          </div>

          {/* Visual Area */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200 lg:h-[600px] flex items-center justify-center">
            {/* The placeholder for the hero image. */}
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-cheezarilla-red-dark to-cheezarilla-red rounded-full shadow-2xl flex items-center justify-center border-4 border-cheezarilla-yellow/20">
               {/* Replace with actual image later */}
               <div className="text-cheezarilla-yellow opacity-20 transform -rotate-12">
                 <span className="text-9xl font-black block text-center">CHZ</span>
               </div>
               
               {/* Floating elements */}
               <div className="absolute -top-4 -right-4 bg-white text-cheezarilla-charcoal font-black py-2 px-4 rounded-xl shadow-xl transform rotate-6 border-2 border-cheezarilla-yellow">
                 Mighty Tower Burger
               </div>
               <div className="absolute -bottom-8 -left-4 bg-white text-cheezarilla-charcoal font-black py-2 px-4 rounded-xl shadow-xl transform -rotate-6 border-2 border-cheezarilla-yellow">
                 Special Pizza
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
