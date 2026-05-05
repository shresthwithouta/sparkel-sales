"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useAuth } from "./AuthContext";
import { fetchCart, addToCartApi, removeFromCartApi, updateCartItemApi, clearCartApi } from "@/lib/api";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const { token, isAuthenticated, user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  // Guest key
  const guestCartKey = "cart_guest";

  const mergeGuestCart = useCallback(async (guestItems, userToken) => {
    try {
      setIsSyncing(true);
      // Fetch current backend cart
      const backendData = await fetchCart(userToken);
      const backendItems = backendData.items || [];
      
      // Create a map of existing items for quick lookup
      const itemMap = new Map(backendItems.map(item => [item.slug, item]));
      
      const itemsToSync = [];
      
      for (const guestItem of guestItems) {
        if (!itemMap.has(guestItem.slug)) {
          // If not in backend, we need to add it
          itemsToSync.push(guestItem);
        }
      }

      // Sync missing items to backend
      if (itemsToSync.length > 0) {
        await Promise.all(itemsToSync.map(item => 
          addToCartApi(userToken, {
            slug: item.slug,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: item.quantity
          })
        ));
      }
      
      // Clear guest cart from local storage
      localStorage.removeItem(guestCartKey);
      
      // Refresh cart from backend to get the merged state
      const finalData = await fetchCart(userToken);
      setCartItems(finalData.items || []);
    } catch (err) {
      console.error("Failed to merge guest cart:", err);
    } finally {
      setIsSyncing(false);
      setIsLoaded(true);
    }
  }, []);

  const syncCart = useCallback(async () => {
    const savedGuest = localStorage.getItem(guestCartKey);
    const guestItems = savedGuest ? JSON.parse(savedGuest) : [];

    if (isAuthenticated && token) {
      if (guestItems.length > 0) {
        // Merge guest items into backend
        await mergeGuestCart(guestItems, token);
      } else {
        try {
          setIsSyncing(true);
          const data = await fetchCart(token);
          setCartItems(data?.items || []);
        } catch (err) {
          console.error("Failed to sync cart:", err);
        } finally {
          setIsSyncing(false);
          setIsLoaded(true);
        }
      }
    } else {
      setCartItems(guestItems);
      setIsLoaded(true);
    }
  }, [token, isAuthenticated, mergeGuestCart]);

  useEffect(() => {
    syncCart();
  }, [syncCart]);

  // Sync guest cart to local storage
  useEffect(() => {
    if (isLoaded && !isAuthenticated) {
      localStorage.setItem(guestCartKey, JSON.stringify(cartItems));
    }
  }, [cartItems, isLoaded, isAuthenticated]);

  const addToCart = async (product) => {
    const existingItem = cartItems.find((item) => item.slug === product.slug);
    
    if (isAuthenticated && token) {
      try {
        setCartItems(prev => {
          if (existingItem) {
            return prev.map(i => i.slug === product.slug ? { ...i, quantity: i.quantity + 1 } : i);
          }
          return [...prev, { ...product, quantity: 1 }];
        });
        await addToCartApi(token, {
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.images?.[0] || product.image,
          quantity: 1
        });
      } catch (err) {
        console.error("Add to cart failed:", err);
        syncCart();
      }
    } else {
      setCartItems(prev => {
        if (existingItem) {
          return prev.map(i => i.slug === product.slug ? { ...i, quantity: i.quantity + 1 } : i);
        }
        return [...prev, { ...product, quantity: 1 }];
      });
    }
  };

  const removeFromCart = async (slug) => {
    if (isAuthenticated && token) {
      try {
        setCartItems(prev => prev.filter(i => i.slug !== slug));
        await removeFromCartApi(token, slug);
      } catch (err) {
        console.error("Remove from cart failed:", err);
        syncCart();
      }
    } else {
      setCartItems(prev => prev.filter(i => i.slug !== slug));
    }
  };

  const updateQuantity = async (slug, quantity) => {
    if (quantity < 1) return;
    
    if (isAuthenticated && token) {
      try {
        setCartItems(prev => prev.map(i => i.slug === slug ? { ...i, quantity } : i));
        await updateCartItemApi(token, slug, quantity);
      } catch (err) {
        console.error("Update quantity failed:", err);
        syncCart();
      }
    } else {
      setCartItems(prev => prev.map(i => i.slug === slug ? { ...i, quantity } : i));
    }
  };

  const clearCart = async () => {
    if (isAuthenticated && token) {
      try {
        setCartItems([]);
        await clearCartApi(token);
      } catch (err) {
        console.error("Clear cart failed:", err);
        syncCart();
      }
    } else {
      setCartItems([]);
    }
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isLoaded,
        isSyncing
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}




