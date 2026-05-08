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
import { ToastProvider } from "@/contexts/ToastContext";
import { SITE_CONFIG } from "@/lib/constants";
import ErrorBoundary from "@/components/ErrorBoundary";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sparkinnovations.com'),
  title: {
    default: `${SITE_CONFIG.name} | Authorized Kutchina Distributor`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ["Kutchina", "Kitchen Chimney", "Hob", "Cooktop", "Water Purifier", "Kolkata", "Distributor"],
  authors: [{ name: "Spark Innovations" }],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://sparkinnovations.com",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-inter">
        <ErrorBoundary>
          <ToastProvider>
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
          </ToastProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}



