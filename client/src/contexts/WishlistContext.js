"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { fetchWishlist, addToWishlist, removeFromWishlist } from "@/lib/api";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const { token, isAuthenticated } = useAuth();
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const guestWishlistKey = "wishlist_guest";

  const mergeWishlist = useCallback(async (guestItems, userToken) => {
    try {
      setIsSyncing(true);
      const backendData = await fetchWishlist(userToken);
      const backendItems = backendData.items || [];
      const itemMap = new Set(backendItems.map(item => item.slug));
      
      const itemsToSync = guestItems.filter(item => !itemMap.has(item.slug));

      if (itemsToSync.length > 0) {
        await Promise.all(itemsToSync.map(item => addToWishlist(userToken, item)));
      }
      
      localStorage.removeItem(guestWishlistKey);
      const finalData = await fetchWishlist(userToken);
      setWishlistItems(finalData.items || []);
    } catch (err) {
      console.error("Failed to merge wishlist:", err);
    } finally {
      setIsSyncing(false);
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    const syncWishlist = async () => {
      const savedGuest = localStorage.getItem(guestWishlistKey);
      const guestItems = savedGuest ? JSON.parse(savedGuest) : [];

      if (isAuthenticated && token) {
        if (guestItems.length > 0) {
          await mergeWishlist(guestItems, token);
        } else {
          try {
            setIsSyncing(true);
            const data = await fetchWishlist(token);
            setWishlistItems(data?.items || []);
          } catch (err) {
            console.error("Failed to sync wishlist:", err);
          } finally {
            setIsSyncing(false);
            setIsLoaded(true);
          }
        }
      } else {
        setWishlistItems(guestItems);
        setIsLoaded(true);
      }
    };
    syncWishlist();
  }, [token, isAuthenticated, mergeWishlist]);

  // Sync guest wishlist to local storage
  useEffect(() => {
    if (isLoaded && !isAuthenticated) {
      localStorage.setItem(guestWishlistKey, JSON.stringify(wishlistItems));
    }
  }, [wishlistItems, isLoaded, isAuthenticated]);

  const toggleWishlist = async (product) => {
    const exists = wishlistItems.some((item) => item.slug === product.slug);

    if (isAuthenticated && token) {
      try {
        if (exists) {
          setWishlistItems(prev => prev.filter(item => item.slug !== product.slug));
          await removeFromWishlist(token, product.slug);
        } else {
          setWishlistItems(prev => [...prev, product]);
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
      } else {
        setWishlistItems(prev => [...prev, product]);
      }
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
