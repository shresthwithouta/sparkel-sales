"use client";

import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { fetchWishlist, addToWishlist, removeFromWishlist, clearWishlistApi } from "@/lib/api";
import { useToast } from "./ToastContext";
import { useAuth } from "./AuthContext";
import { useGuestSync } from "@/hooks/useGuestSync";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const { token, isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const [wishlistItems, setWishlistItems] = useState([]);
  const { syncWithGuest, syncToStorage, isSyncing, isLoaded } = useGuestSync(
    "wishlist_guest",
    fetchWishlist,
    addToWishlist
  );

  const syncWishlist = useCallback(() => {
    syncWithGuest(isAuthenticated, token, setWishlistItems);
  }, [isAuthenticated, token, syncWithGuest]);

  useEffect(() => {
    syncWishlist();
  }, [syncWishlist]);

  useEffect(() => {
    syncToStorage(wishlistItems, isAuthenticated, isLoaded);
  }, [wishlistItems, isLoaded, isAuthenticated, syncToStorage]);

  const toggleWishlist = useCallback(async (product) => {
    const exists = wishlistItems.some((item) => item.slug === product.slug);

    if (isAuthenticated && token) {
      try {
        if (exists) {
          setWishlistItems(prev => prev.filter(item => item.slug !== product.slug));
          showToast("Removed from wishlist");
          await removeFromWishlist(token, product.slug);
        } else {
          setWishlistItems(prev => [...prev, product]);
          showToast(`Saved ${product.name} to wishlist`);
          await addToWishlist(token, product);
        }
      } catch (err) {
        console.error("Wishlist update failed:", err);
        const data = await fetchWishlist(token);
        setWishlistItems(data.items || []);
      }
    } else {
      // Guest logic
      if (exists) {
        setWishlistItems(prev => prev.filter(item => item.slug !== product.slug));
        showToast("Removed from wishlist");
      } else {
        setWishlistItems(prev => [...prev, product]);
        showToast(`Saved ${product.name} to wishlist`);
      }
    }
  }, [wishlistItems, isAuthenticated, token, showToast]);

  const isInWishlist = useCallback((slug) => {
    return wishlistItems.some((item) => item.slug === slug);
  }, [wishlistItems]);

  const clearWishlist = useCallback(async () => {
    if (isAuthenticated && token) {
      try {
        setWishlistItems([]);
        showToast("Wishlist cleared");
        await clearWishlistApi(token);
      } catch (err) {
        console.error("Failed to clear wishlist:", err);
      }
    } else {
      setWishlistItems([]);
      showToast("Wishlist cleared");
    }
    // Also clear guest storage
    localStorage.removeItem("wishlist_guest");
  }, [isAuthenticated, token, showToast]);

  const value = useMemo(() => ({
    wishlistItems,
    wishlistCount: wishlistItems.length,
    toggleWishlist,
    isInWishlist,
    clearWishlist,
    isSyncing,
    isLoaded
  }), [wishlistItems, toggleWishlist, isInWishlist, clearWishlist, isSyncing, isLoaded]);

  return (
    <WishlistContext.Provider value={value}>
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
