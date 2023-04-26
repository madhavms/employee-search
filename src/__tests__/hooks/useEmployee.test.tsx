import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { renderHook, waitFor } from "@testing-library/react";
import useEmployee from "../../hooks/useEmployee";
import { employees } from "../../testData/employeeData";

describe("useEmployee hook", () => {
  test("should handle errors", async () => {
    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet("/employees.json").reply(404, "Not Found");
    const { result } = renderHook(() => useEmployee());
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe("Unable to fetch employees data.");
    expect(result.current.employees).toEqual([]);
  });

  test('should return employees, isLoading, and error', async () => {
    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet("/employees.json").reply(200,employees);
    const { result } = renderHook(() => useEmployee());
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.employees).toEqual(employees);
  });
});
