import { act } from "react-dom/test-utils";
import { Employee } from "../types";
import { employees } from "../mock-data";
import { renderHook } from "@testing-library/react";
import {useHandleLogToConsole} from "./useHandleLogToConsole";

jest.mock("chalk", () => ({
   green: (text: string) => text,
   blue: (text: string) => text,
   red: (text: string) => text,
}));

describe("Given the useHandleLogToConsole hook and a list of employees", () => {
   test("When handleLogToConsole is called, Then employees should be logged to the console", () => {
      const { result } = renderHook(() => useHandleLogToConsole(employees));
      const { handleLogToConsole } = result.current;
      const logSpy = jest.spyOn(console, "log").mockImplementation();

      act(() => handleLogToConsole());

      expect(logSpy).toHaveBeenCalledTimes(5);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Dan Mac"));
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Jake Ross"));
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Ian Moss"));
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Derek Joss"));
      logSpy.mockRestore();
   });

   test("When there are no employees, Then a message should be logged to the console", () => {
      const mockEmployees: Employee[] = [];
      const { result } = renderHook(() => useHandleLogToConsole(mockEmployees));
      const { handleLogToConsole } = result.current;
      const logSpy = jest.spyOn(console, "log").mockImplementation();

      act(() => handleLogToConsole());

      expect(logSpy).toHaveBeenCalledTimes(2);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("No Employees Found!"));
      logSpy.mockRestore();
   });
});
