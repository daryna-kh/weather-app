import { convertTemperature, findIcon } from "./index";

describe("find icon util", () => {
  test("success", () => {
    expect(findIcon(741)).toContain("50d");
  });

  test("error", () => {
    expect(findIcon(654)).toContain("no-icon");
  });
});

describe("convertTemperature", () => {
  describe("from K to C", () => {
    test("normal", () => {
      expect(convertTemperature(300, "C")).toBe(27);
    });

    test("absolute zero", () => {
      expect(convertTemperature(0, "C")).toBe(-273);
    });

    test("the least value", () => {
      expect(convertTemperature(1e-6, "C")).toBe(-273);
    });

    test("the biggest value", () => {
      expect(convertTemperature(1e6, "C")).toBe(999727);
    });

    test("negative value treated as absolute zero", () => {
      expect(convertTemperature(-5, "C")).toBe(-273);
    });
  });

  describe("from K to F", () => {
    test("normal", () => {
      expect(convertTemperature(300, "F")).toBe(80);
    });

    test("absolute zero", () => {
      expect(convertTemperature(0, "F")).toBe(-460);
    });

    test("the least value", () => {
      expect(convertTemperature(1e-6, "F")).toBe(-460);
    });

    test("the biggest value", () => {
      expect(convertTemperature(1e6, "F")).toBe(1799540);
    });

    test("negative value treated as absolute zero", () => {
      expect(convertTemperature(-5, "F")).toBe(-460);
    });
  });
});
