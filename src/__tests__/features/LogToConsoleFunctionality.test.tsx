import { render, fireEvent, screen, renderHook } from "@testing-library/react";
import useHandleLogToConsole from "../../hooks/useHandleLogToConsole";
import SubmitButton from "../../components/SubmitButton";
import { Employee, active, department } from "../../types/employee";

jest.mock("chalk", () => ({
  green: (text: string) => text,
  blue: (text: string) => text,
  red: (text: string) => text,
}));

describe("Submit Button", () => {
  test("clicking the Submit button logs visible employees to the console", () => {
    const mockEmployees: Employee[] = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        department: department.FINANCE,
        email: "john.doe@abc.com",
        tel: 444444444,
        isActive: active.Yes,
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        department: department.IT,
        email: "jane.doe@abc.com",
        tel: 5555555555,
        isActive: active.Yes,
      },
    ];

    const logSpy = jest.spyOn(console, "log").mockImplementation();


    // Render the SubmitButton component with the useHandleLogToConsole hook
    const { result } = renderHook(() => useHandleLogToConsole(mockEmployees));
    render(<SubmitButton handleClick={result.current.handleLogToConsole} />);
    const button = screen.getByText("Submit");
    fireEvent.click(button);

    expect(logSpy).toHaveBeenCalledTimes(3); // 1 for log header and 2 for employee logs
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("John Doe"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Jane Doe"));

    logSpy.mockRestore(); // restore console.log to original implementation

  });
});