import { render, fireEvent, screen, renderHook } from "@testing-library/react";
import useHandleLogToConsole from "../hooks/useHandleLogToConsole";
import SubmitButton from "../components/SubmitButton";
import { employees } from "../mock-data/employeeData";

jest.mock("chalk", () => ({
  green: (text: string) => text,
  blue: (text: string) => text,
  red: (text: string) => text,
}));

describe("Submit Button", () => {
  test("clicking the Submit button logs visible employees to the console", () => {

    const logSpy = jest.spyOn(console, "log").mockImplementation();


    // Render the SubmitButton component with the useHandleLogToConsole hook
    const { result } = renderHook(() => useHandleLogToConsole(employees));
    render(<SubmitButton handleClick={result.current.handleLogToConsole} />);
    const button = screen.getByText("Submit");
    fireEvent.click(button);

    expect(logSpy).toHaveBeenCalledTimes(5); // 1 for log header and 2 for employee logs
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Dan Mac"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Jake Ross"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Ian Moss"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Derek Joss"));

    logSpy.mockRestore(); // restore console.log to original implementation

  });
});
