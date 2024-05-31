import { describe, expect, it } from "vitest";
import { TimerType, getTimer } from "./timer";


describe("getTimer", () => {
  it("should return the correct time in milliseconds for seconds", () => {
    const time = 10;
    const type = TimerType.SECOND;

    const result = getTimer(time, type);

    expect(result).toBe(10000);
  });

  it("should return the correct time in milliseconds for minutes", () => {
    const time = 5;
    const type = TimerType.MINUTE;

    const result = getTimer(time, type);

    expect(result).toBe(300000);
  });

  it("should return the correct time in milliseconds for hours", () => {
    const time = 2;
    const type = TimerType.HOUR;

    const result = getTimer(time, type);

    expect(result).toBe(7200000);
  });
});
