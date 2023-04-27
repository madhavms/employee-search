import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { employees } from "../mock-data";
import { useEmployee } from "./useEmployee";

describe("Given the useEmployee hook", () => {
  test("When an error response is received, Then the hook should handle the error and return no employees", async () => {
    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet("/employees.json").reply(404, "Not Found");
    const { result } = renderHook(() => useEmployee());
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe("Unable to fetch employees data.");
    expect(result.current.employees).toEqual([]);
  });

  test("When a successful response is received, Then the hook should return the list of employees", async () => {
    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet("/employees.json").reply(200, employees);
    const { result } = renderHook(() => useEmployee());
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe("");
    expect(result.current.employees).toEqual(employees);
  });
});
