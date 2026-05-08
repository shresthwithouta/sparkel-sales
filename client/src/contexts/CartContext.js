"use client";

import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { useToast } from "./ToastContext";
import { useAuth } from "./AuthContext";
import { fetchCart, addToCartApi, removeFromCartApi, updateCartItemApi, clearCartApi } from "@/lib/api";
import { useGuestSync } from "@/hooks/useGuestSync";

const CartContext = createContext(null);

const cartApiAdd = (token, item) => addToCartApi(token, {
  slug: item.slug,
  name: item.name,
  price: item.price,
  image: item.image || item.images?.[0],
  quantity: item.quantity
});

export function CartProvider({ children }) {
  const { token, isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const [cartItems, setCartItems] = useState([]);

  const { syncWithGuest, syncToStorage, isSyncing, isLoaded } = useGuestSync(
    "cart_guest",
    fetchCart,
    cartApiAdd
  );

  const syncCart = useCallback(() => {
    syncWithGuest(isAuthenticated, token, setCartItems);
  }, [isAuthenticated, token, syncWithGuest]);

  useEffect(() => {
    syncCart();
  }, [syncCart]);

  useEffect(() => {
    syncToStorage(cartItems, isAuthenticated, isLoaded);
  }, [cartItems, isLoaded, isAuthenticated, syncToStorage]);

  const addToCart = useCallback(async (product) => {
    const existingItem = cartItems.find((item) => item.slug === product.slug);
    
    if (isAuthenticated && token) {
      try {
        setCartItems(prev => {
          if (existingItem) {
            return prev.map(i => i.slug === product.slug ? { ...i, quantity: i.quantity + 1 } : i);
          }
          return [...prev, { ...product, quantity: 1 }];
        });
        showToast(`Added ${product.name} to cart`);
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
      showToast(`Added ${product.name} to cart`);
    }
  }, [cartItems, isAuthenticated, token, showToast, syncCart]);

  const removeFromCart = useCallback(async (slug) => {
    if (isAuthenticated && token) {
      try {
        setCartItems(prev => prev.filter(i => i.slug !== slug));
        showToast("Item removed from cart");
        await removeFromCartApi(token, slug);
      } catch (err) {
        console.error("Remove from cart failed:", err);
        syncCart();
      }
    } else {
      setCartItems(prev => prev.filter(i => i.slug !== slug));
      showToast("Item removed from cart");
    }
  }, [isAuthenticated, token, showToast, syncCart]);

  const updateQuantity = useCallback(async (slug, quantity) => {
    if (quantity < 1) {
      removeFromCart(slug);
      return;
    }
    
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
  }, [isAuthenticated, token, removeFromCart, syncCart]);

  const clearCart = useCallback(async () => {
    if (isAuthenticated && token) {
      try {
        setCartItems([]);
        showToast("Bag cleared");
        await clearCartApi(token);
      } catch (err) {
        console.error("Clear cart failed:", err);
        syncCart();
      }
    } else {
      setCartItems([]);
      showToast("Bag cleared");
    }
    // Also clear guest storage
    localStorage.removeItem("cart_guest");
  }, [isAuthenticated, token, syncCart, showToast]);

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const value = useMemo(() => ({
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
    isLoaded,
    isSyncing
  }), [cartItems, isLoaded, isSyncing, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount]);

  return (
    <CartContext.Provider value={value}>
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




