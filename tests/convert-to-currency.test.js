import { describe, it, expect } from "vitest";
import convertToCurrency from "../src/convert-to-currency";

describe("convertToCurrency", () => {
  it("Converts a whole integer to currency format", () => {
    const result = convertToCurrency(5, "ZAR");
    expect(result).toBe("R5.00");
  });

  it("Converts a decimal to currency format", () => {
    const result = convertToCurrency(2.5, "ZAR");
    expect(result).toBe("R2.50");
  });

  it("Converts a decimal from more than two decimal places", () => {
    const resultOne = convertToCurrency(3.1415, "ZAR");
    expect(resultOne).toBe("R3.14");

    const resultTwo = convertToCurrency(99.999, "ZAR");
    expect(resultTwo).toBe("R100.00");
  });
});
