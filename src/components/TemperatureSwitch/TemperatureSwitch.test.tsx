import { TempUnit } from "@/global";
import { render, screen } from "@testing-library/react";
import { Mock } from "vitest";
import { TemperatureSwitch } from "./TemperatureSwitch";
import userEvent from "@testing-library/user-event";

type MockState = {
  tempUnit: "C" | "F";
  setTempUnit: Mock<(u: TempUnit) => void>;
};

const mockSetTempUnit = vi.fn();
let storeState: MockState = {
  tempUnit: "C",
  setTempUnit: mockSetTempUnit,
};

vi.mock("./TemperatureSwitch.module.scss", () => ({
  default: {
    controls: "controls",
    switch: "switch",
    slider: "slider",
    right: "right",
    option: "option",
    active: "active",
  },
}));

vi.mock("@/store/useCommonStore", () => ({
  useCommonStore: (selector: (s: MockState) => unknown) => selector(storeState),
}));

const renderWithTemp = (t: "C" | "F" | "K" = "C") => {
  // 'K' for edge-case (but if 'k' , then 'C' becomes default);
  storeState.tempUnit = t as any;
  mockSetTempUnit.mockClear();
  return render(<TemperatureSwitch />);
};

describe("TemperatureSwitch", () => {
  beforeEach(() => {
    // base state before any tests
    storeState.tempUnit = "C";
    mockSetTempUnit.mockClear();
  });

  test("initial: tempUnit=C", () => {
    renderWithTemp("C");

    const button = screen.getByRole("button");
    const cOption = screen.getByText("°C");
    const fOption = screen.getByText("°F");
    expect(cOption).toHaveClass("option", "active");
    expect(fOption).toHaveClass("option");
    expect(fOption).not.toHaveClass("active");

    const slider = button.querySelector(".slider")!;
    expect(slider).not.toHaveClass("right");
  });

  test('initial: tempUnit="F"', () => {
    renderWithTemp("F");

    const button = screen.getByRole("button");

    const cOption = screen.getByText("°C");
    const fOption = screen.getByText("°F");
    expect(fOption).toHaveClass("option", "active");
    expect(cOption).not.toHaveClass("active");

    const slider = button.querySelector(".slider")!;
    expect(slider).toHaveClass("right");
  });

  test("toggle: C → F", async () => {
    renderWithTemp("C");

    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(mockSetTempUnit).toHaveBeenCalledTimes(1);
    expect(mockSetTempUnit).toHaveBeenCalledWith("F");

    expect(button).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText("°F")).toHaveClass("active");
    expect(screen.getByText("°C")).not.toHaveClass("active");
    expect(button.querySelector(".slider")).toHaveClass("right");
  });

  test("toggle twice: C → F → C", async () => {
    renderWithTemp("C");
    const button = screen.getByRole("button");

    await userEvent.click(button); // C → F
    await userEvent.click(button); // F → C

    expect(mockSetTempUnit.mock.calls.map((c) => c[0])).toEqual(["F", "C"]);
    expect(button).toHaveAttribute("aria-pressed", "false");
    expect(screen.getByText("°C")).toHaveClass("active");
    expect(screen.getByText("°F")).not.toHaveClass("active");
  });

  test("no extra effects: only setTempUnit is called on click", async () => {
    renderWithTemp("C");
    await userEvent.click(screen.getByRole("button"));
    expect(mockSetTempUnit).toHaveBeenCalledTimes(1);
  });

  test('edge: store returned "K" → treat as C (aria-pressed=false, °C active)', () => {
    renderWithTemp("K" as any);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-pressed", "false");
    expect(screen.getByText("°C")).toHaveClass("active");
    expect(screen.getByText("°F")).not.toHaveClass("active");
  });

  test("robustness: fast double-click does not desynchronize the state", async () => {
    renderWithTemp("C");
    const button = screen.getByRole("button");

    await userEvent.dblClick(button);

    expect(mockSetTempUnit.mock.calls.map((c) => c[0])).toEqual(["F", "C"]);

    expect(button).toHaveAttribute("aria-pressed", "false");
    expect(screen.getByText("°C")).toHaveClass("active");
  });
});
