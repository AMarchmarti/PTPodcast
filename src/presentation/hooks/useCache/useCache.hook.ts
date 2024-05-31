interface CacheState<T> {
  data: T;
  timestamp: number;
  expirationTime: number;
}


interface CacheHook {
  expiresIn?: number;
}

export const useCache = ({ expiresIn = 0 }: CacheHook = {}) => {
  const get = <T>(key: string): T | null => {
    const cache = JSON.parse(localStorage.getItem("cache") || "{}") as Record<
      string,
      CacheState<T>
    >;
    const cached = cache[key];
    if (!cached) return null;
    if (Date.now() > cached.expirationTime) {
      delete cache[key];
      localStorage.setItem("cache", JSON.stringify(cache));
      return null;
    }
    return cached.data;
  };

  const set = <T>(key: string, data: T) => {
    const cache = JSON.parse(localStorage.getItem("cache") || "{}") as Record<
      string,
      CacheState<T>
    >;

    cache[key] = {
      data,
      timestamp: Date.now(),
      expirationTime: Date.now() + expiresIn,
    };
    localStorage.setItem("cache", JSON.stringify(cache));
  };

  const _delete = (key: string) => {
    const cache = JSON.parse(localStorage.getItem("cache") || "{}") as Record<
      string,
      CacheState<unknown>
    >;
    delete cache[key];
    localStorage.setItem("cache", JSON.stringify(cache));
  };

  return { get, set, delete: _delete };
};
