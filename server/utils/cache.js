class MemoryCache {
  constructor() {
    this.cache = new Map();
  }

  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;
    
    // Check if item has expired
    if (Date.now() > item.expiresAt) {
      this.cache.delete(key);
      return null;
    }
    return item.value;
  }

  set(key, value, ttlMs = 300000) { // Default TTL is 5 minutes
    this.cache.set(key, {
      value,
      expiresAt: Date.now() + ttlMs
    });
  }

  clear() {
    this.cache.clear();
    console.log('[Cache] In-memory cache cleared successfully');
  }
}

export const cache = new MemoryCache();
