import { MapPin } from "lucide-react";

export default function LocationSection() {
  return (
    <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full">
      {/* Map Placeholder or iframe */}
      <div className="relative w-full h-64 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105809.91480112135!2d71.44284589999999!3d33.996130999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xa816b2637f8ce148!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714578120000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Cheezarilla Location"
          className="absolute inset-0"
        ></iframe>
      </div>
      
      <div className="p-8 flex-grow flex flex-col justify-center bg-cheezarilla-charcoal text-white">
        <h3 className="text-2xl font-black mb-4 uppercase text-cheezarilla-yellow">Visit Us</h3>
        <div className="flex items-start gap-3 mb-6">
          <MapPin className="w-6 h-6 text-cheezarilla-red flex-shrink-0 mt-1" />
          <div>
            <p className="font-bold text-lg mb-1">Old Bara Road</p>
            <p className="text-gray-300">Near Town Heights University</p>
            <p className="text-gray-300">Town Peshawar</p>
          </div>
        </div>
        
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Old+Bara+Road+Near+Town+Heights+University+Town+Peshawar"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cheezarilla-red hover:bg-cheezarilla-red-dark text-white font-bold py-3 px-6 rounded-full text-center transition-colors shadow-md w-full"
        >
          GET DIRECTIONS
        </a>
      </div>
    </div>
  );
}
