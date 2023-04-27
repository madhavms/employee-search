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
    // Given: A SubmitButton and an onClick handler
    const onClick = jest.fn();
    render(<SubmitButton handleClick={onClick} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    
    // When: The user clicks the button
    fireEvent.click(button);
    
    // Then: The onClick handler is called
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("When the user clicks the Submit button, Then visible employees are logged to the console", () => {
    // Given: A SubmitButton and the useHandleLogToConsole hook
    const logSpy = jest.spyOn(console, "log").mockImplementation();
    const { result } = renderHook(() => useHandleLogToConsole(employees));
    render(<SubmitButton handleClick={result.current.handleLogToConsole} />);
    const button = screen.getByText("Submit");

    // When: The user clicks the Submit button
    fireEvent.click(button);
    
    // Then: Visible employees are logged to the console
    expect(logSpy).toHaveBeenCalledTimes(5); // 1 for log header and 2 for employee logs
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Dan Mac"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Jake Ross"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Ian Moss"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Derek Joss"));

    logSpy.mockRestore(); // restore console.log to original implementation
  });
});
