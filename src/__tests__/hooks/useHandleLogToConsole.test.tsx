import { Employee } from "../../types/employee";
import { renderHook } from "@testing-library/react";
import useHandleLogToConsole from "../../hooks/useHandleLogToConsole";
import { employees } from "../../testData/employeeData";
import { act } from "react-dom/test-utils";

jest.mock("chalk", () => ({
    green: (text: string) => text,
    blue: (text: string) => text,
    red: (text: string) => text,
  }));


describe("useHandleLogToConsole hook", () => {
  it("should log employees to console", () => {

    const { result } = renderHook(() => useHandleLogToConsole(employees));
    const { handleLogToConsole } = result.current;

    const logSpy = jest.spyOn(console, "log").mockImplementation();

    act(() => handleLogToConsole());
    expect(logSpy).toHaveBeenCalledTimes(5); // 1 for log header and 2 for employee logs
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Dan Mac"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Jake Ross"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Ian Moss"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Derek Joss"));
    logSpy.mockRestore();
  });

  it("should handle no employees found", () => {
    const mockEmployees: Employee[] = [];

    const { result } = renderHook(() => useHandleLogToConsole(mockEmployees));
    const { handleLogToConsole } = result.current;

    const logSpy = jest.spyOn(console, "log").mockImplementation();

    act(() => handleLogToConsole());

    expect(logSpy).toHaveBeenCalledTimes(2); // 1 for log header and 1 for no employees found
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("No Employees Found!"));
    logSpy.mockRestore();
  });
});
