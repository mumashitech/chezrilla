"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase">Send us a message</h3>
      
      {status === "success" ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
          <CheckCircle className="w-12 h-12 mb-2 text-green-500" />
          <h4 className="font-bold text-lg">Message Sent!</h4>
          <p className="text-sm mt-1">Thank you for reaching out. We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cheezarilla-red focus:ring-2 focus:ring-cheezarilla-red/20 outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cheezarilla-red focus:ring-2 focus:ring-cheezarilla-red/20 outline-none transition-all"
              placeholder="03XX XXXXXXX"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cheezarilla-red focus:ring-2 focus:ring-cheezarilla-red/20 outline-none transition-all resize-none"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-cheezarilla-charcoal hover:bg-cheezarilla-red text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-70 shadow-md"
          >
            {status === "submitting" ? (
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Send Message
                <Send className="w-4 h-4" />
              </span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
