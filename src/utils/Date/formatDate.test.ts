import { describe, expect, it } from "vitest";

import { formatDate } from "./formatDate";

describe("formatDate", () => {
	it("should format the date correctly", () => {
		const dateString = "2022-01-01";
		const expected = "1/1/2022";

		const result = formatDate(dateString);

		expect(result).toBe(expected);
	});

	it("should handle different date formats", () => {
		const dateString = "2022-12-31";
		const expected = "31/12/2022";

		const result = formatDate(dateString);

		expect(result).toBe(expected);
	});

	it("should handle invalid date strings", () => {
		const dateString = "invalid-date";
		const expected = "Invalid Date";

		const result = formatDate(dateString);

		expect(result).toBe(expected);
	});
});
