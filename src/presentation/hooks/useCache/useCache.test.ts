import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useCache } from "./useCache.hook";
import { TimerType, getTimer } from "@/utils/Timer/timer";


beforeEach(() => {
  vi.clearAllMocks();
});

describe("useCache", () => {
  const LOCAL_STORAGE_KEY = "nonexistentKey";

  const getItemSpy = vi.spyOn(Storage.prototype, "getItem");
  const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

  afterEach(() => {
    localStorage.clear();

    getItemSpy.mockClear();
    setItemSpy.mockClear();
  });

  // get data when key exists and is not expired
  it("should return null when data is expired", async () => {
    // Arrange
    const { get, set } = useCache({ expiresIn: getTimer(1, TimerType.MINUTE) });
    const key = LOCAL_STORAGE_KEY;
    const data = { value: "testData" };
    // Act
    set(key, data);
    const result = get(key);

    // Assert
    expect(result).toEqual(data);
  });

  // get returns null when key is not found in cache
  it("should return null when key is not found in cache", () => {
    // Arrange
    const { get } = useCache();
    const key = LOCAL_STORAGE_KEY;

    // Act
    const result = get(key);

    // Assert
    expect(result).toBeNull();
  });

  // get returns null when is expired
  it("should return null when data is expired", async () => {
    // Arrange
    const { get, set } = useCache({ expiresIn: 0 });
    const key = LOCAL_STORAGE_KEY;

    const expiration = 500 * 1; // 1 minute

    // Act
    set(key, "testData");
    await new Promise((r) => setTimeout(r, expiration));
    const result = get(key);

    // Assert
    expect(result).toBeNull();
  });

  // get returns null when cache is empty
  it("should return null when cache is empty", () => {
    // Arrange
    const { get } = useCache();
    const key = LOCAL_STORAGE_KEY;
    localStorage.setItem("cache", "{}");

    // Act
    const result = get(key);

    // Assert
    expect(result).toBeNull();
  });

  // get returns null when cache is malformed
  it("should return null when cache is malformed", () => {
    // Arrange
    const { get } = useCache();
    const key = LOCAL_STORAGE_KEY;
    localStorage.setItem(LOCAL_STORAGE_KEY, "malformedCache");

    // Act
    const result = get(key);

    // Assert
    expect(result).toBeNull();
  });
});
