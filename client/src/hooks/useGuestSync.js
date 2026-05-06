import { useState, useCallback } from 'react';

export function useGuestSync(storageKey, apiFetch, apiAdd) {
  const [isSyncing, setIsSyncing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const mergeGuestItems = useCallback(async (guestItems, userToken, setItems) => {
    try {
      setIsSyncing(true);
      const backendData = await apiFetch(userToken);
      const backendItems = backendData.items || [];
      const itemMap = new Set(backendItems.map(item => item.slug));
      
      const itemsToSync = guestItems.filter(item => !itemMap.has(item.slug));

      if (itemsToSync.length > 0) {
        await Promise.all(itemsToSync.map(item => apiAdd(userToken, item)));
      }
      
      localStorage.removeItem(storageKey);
      const finalData = await apiFetch(userToken);
      setItems(finalData.items || []);
    } catch (err) {
      console.error(`Failed to merge ${storageKey}:`, err);
    } finally {
      setIsSyncing(false);
      setIsLoaded(true);
    }
  }, [storageKey, apiFetch, apiAdd]);

  const syncWithGuest = useCallback(async (isAuthenticated, token, setItems) => {
    const savedGuest = localStorage.getItem(storageKey);
    const guestItems = savedGuest ? JSON.parse(savedGuest) : [];

    if (isAuthenticated && token) {
      if (guestItems.length > 0) {
        await mergeGuestItems(guestItems, token, setItems);
      } else {
        try {
          setIsSyncing(true);
          const data = await apiFetch(token);
          setItems(data?.items || []);
        } catch (err) {
          console.error(`Failed to sync ${storageKey}:`, err);
        } finally {
          setIsSyncing(false);
          setIsLoaded(true);
        }
      }
    } else {
      setItems(guestItems);
      setIsLoaded(true);
    }
  }, [storageKey, apiFetch, mergeGuestItems]);

  const syncToStorage = useCallback((items, isAuth, loaded) => {
    if (loaded && !isAuth) {
      localStorage.setItem(storageKey, JSON.stringify(items));
    }
  }, [storageKey]);

  return { syncWithGuest, syncToStorage, isSyncing, isLoaded, setIsLoaded, setIsSyncing };
}
