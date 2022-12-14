import { formatMovieLength } from "@/helpers/useFormatMovieLength";
import { describe, it, expect } from "vitest";

describe("formatMovieLength helper", () => {
  it("Formats movie length in number of minutes into a string with hours and minutes", () => {
    expect(formatMovieLength(100)).toBe("1h 40min");
  });
  it("Returns only hours string if the length is multiplication of 60", () => {
    expect(formatMovieLength(120)).toBe("2h");
  });
});
