import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { renderHook, waitFor } from "@testing-library/react";
import { useEmployee } from "./useEmployee";
import { employees } from "../mock-data";

describe("Given the useEmployee hook", () => {
  test("When an error response is received, Then the hook should handle the error and return no employees", async () => {
    // Given: A mocked Axios instance that returns a 404 error
    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet("/employees.json").reply(404, "Not Found");

    // When: The useEmployee hook is rendered
    const { result } = renderHook(() => useEmployee());

    // Then: The hook should handle the error and return no employees
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe("Unable to fetch employees data.");
    expect(result.current.employees).toEqual([]);
  });

  test("When a successful response is received, Then the hook should return the list of employees", async () => {
    // Given: A mocked Axios instance that returns a list of employees
    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet("/employees.json").reply(200, employees);

    // When: The useEmployee hook is rendered
    const { result } = renderHook(() => useEmployee());

    // Then: The hook should return the list of employees
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe("");
    expect(result.current.employees).toEqual(employees);
  });
});
