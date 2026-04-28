import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import GoogleAuthProvider from "@/components/GoogleAuthProvider";
import { SITE_CONFIG } from "@/lib/constants";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Authorized Kutchina Distributor`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ["Kutchina", "Kitchen Chimney", "Hob", "Cooktop", "Water Purifier", "Kolkata", "Distributor"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-inter">
        <AuthProvider>
          <GoogleAuthProvider>
            <CartProvider>
              <WishlistProvider>
                <SmoothScroll>
                  <Navbar />
                  <main>{children}</main>
                  <Footer />
                  <WhatsAppFloat />
                </SmoothScroll>
              </WishlistProvider>
            </CartProvider>
          </GoogleAuthProvider>
        </AuthProvider>
      </body>
    </html>
  );
}



