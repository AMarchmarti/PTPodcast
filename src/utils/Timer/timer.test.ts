import { TimerType, getTimer, formatTime } from "./timer";

describe("Timer", () => {
	it("should calculate the timer correctly", () => {
		expect(getTimer(5, TimerType.SECOND)).toBe(5000);
		expect(getTimer(10, TimerType.MINUTE)).toBe(600000);
		expect(getTimer(2, TimerType.HOUR)).toBe(7200000);
	});

	it("should format the time correctly", () => {
		expect(formatTime(5000)).toBe("00:00:05");
		expect(formatTime(600000)).toBe("00:10:00");
		expect(formatTime(7200000)).toBe("02:00:00");
	});
});
