"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { fetchSiteSettings } from "@/lib/api";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    // Try to load from localStorage on initial render
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("site_settings");
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });
  const [loading, setLoading] = useState(true);

  const loadSettings = async () => {
    try {
      const data = await fetchSiteSettings();
      if (data && data.settings) {
        setSettings(data.settings);
        // Cache the latest "truth"
        localStorage.setItem("site_settings", JSON.stringify(data.settings));
      }
    } catch (error) {
      console.error("Error loading site settings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      await loadSettings();
    };
    init();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, loading, refreshSettings: loadSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
