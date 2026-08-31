import ContactForm from "@/components/ContactForm";
import LocationSection from "@/components/LocationSection";
import CTASection from "@/components/CTASection";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Cheezarilla",
  description: "Get in touch with Cheezarilla. Call us, order on WhatsApp, or find our location on Old Bara Road, Peshawar.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-cheezarilla-red pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight uppercase drop-shadow-md">
            Get in Touch
          </h1>
          <p className="text-xl text-cheezarilla-off-white font-medium max-w-2xl mx-auto">
            We'd love to hear from you. Call us, WhatsApp us, or drop by.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <a 
                href="tel:0915703021"
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 bg-cheezarilla-red/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-cheezarilla-red transition-colors">
                  <Phone className="w-6 h-6 text-cheezarilla-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Call Us</h3>
                <p className="text-gray-500 font-medium">091 570 3021</p>
              </a>
              
              <a 
                href="https://wa.me/923115901551"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#25D366] transition-colors">
                  <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">WhatsApp</h3>
                <p className="text-gray-500 font-medium">0311 5901551</p>
              </a>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-cheezarilla-yellow/20 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-cheezarilla-yellow" />
                </div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Location</h3>
                <p className="text-gray-500 text-sm font-medium">
                  Old Bara Road, Near Town Heights University, Town Peshawar
                </p>
              </div>
            </div>

            {/* Form and Map */}
            <div className="lg:col-span-2 space-y-8">
              <ContactForm />
              <LocationSection />
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
