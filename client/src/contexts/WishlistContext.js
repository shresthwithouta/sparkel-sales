"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { fetchWishlist, addToWishlist, removeFromWishlist } from "@/lib/api";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const { token, isAuthenticated } = useAuth();
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const syncWishlist = async () => {
      if (isAuthenticated && token) {
        try {
          setIsSyncing(true);
          const data = await fetchWishlist(token);
          if (data && data.items) {
            setWishlistItems(data.items);
          }
        } catch (err) {
          console.error("Failed to sync wishlist:", err);
        } finally {
          setIsSyncing(false);
          setIsLoaded(true);
        }
      } else {
        setWishlistItems([]);
        setIsLoaded(true);
      }
    };
    syncWishlist();
  }, [token, isAuthenticated]);

  const toggleWishlist = async (product) => {
    if (!isAuthenticated) {
      // Logic handled in component to redirect, but we'll return early here
      return;
    }

    const exists = wishlistItems.some((item) => item.slug === product.slug);

    try {
      if (exists) {
        // Optimistic update
        setWishlistItems(prev => prev.filter(item => item.slug !== product.slug));
        await removeFromWishlist(token, product.slug);
      } else {
        // Optimistic update
        setWishlistItems(prev => [...prev, product]);
        await addToWishlist(token, product);
      }
    } catch (err) {
      console.error("Wishlist update failed:", err);
      // Rollback on error
      const data = await fetchWishlist(token);
      setWishlistItems(data.items || []);
    }
  };

  const isInWishlist = (slug) => {
    return wishlistItems.some((item) => item.slug === slug);
  };

  const clearWishlist = async () => {
    if (!isAuthenticated || !token) return;
    try {
      setWishlistItems([]);
      await clearWishlistApi(token);
    } catch (err) {
      console.error("Failed to clear wishlist:", err);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        wishlistCount: wishlistItems.length,
        toggleWishlist,
        isInWishlist,
        clearWishlist,
        isSyncing,
        isLoaded
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
