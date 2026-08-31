import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cheezarilla | Good Food. Great Mood. | Peshawar",
  description:
    "Cheezarilla offers burgers, pizza, wraps, steaks, pasta, Chinese & Thai food and more in Peshawar. A Menu of Trust.",
  openGraph: {
    title: "Cheezarilla | Good Food. Great Mood.",
    description: "Burgers, pizza, wraps, steaks and more in Peshawar.",
    url: "https://cheezarilla.com",
    siteName: "Cheezarilla",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={outfit.className}>
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
