import { render, screen, fireEvent, renderHook } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SubmitButton } from "./SubmitButton";
import { useHandleLogToConsole } from "../hooks";
import { employees } from "../mock-data";

jest.mock("chalk", () => ({
  green: (text: string) => text,
  blue: (text: string) => text,
  red: (text: string) => text,
}));

describe("Given the SubmitButton component and useHandleLogToConsole hook", () => {
  test("When the user clicks the button, Then the onClick handler is called", () => {
    const onClick = jest.fn();
    render(<SubmitButton handleClick={onClick} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("When the user clicks the Submit button, Then visible employees are logged to the console", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation();
    const { result } = renderHook(() => useHandleLogToConsole(employees));
    render(<SubmitButton handleClick={result.current.handleLogToConsole} />);
    const button = screen.getByText("Submit");
    fireEvent.click(button);
    expect(logSpy).toHaveBeenCalledTimes(5);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Dan Mac"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Jake Ross"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Ian Moss"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Derek Joss"));
    logSpy.mockRestore(); 
  });
});
