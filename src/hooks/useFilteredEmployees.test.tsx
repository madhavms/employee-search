import { renderHook } from "@testing-library/react";
import { employees } from "../mock-data";
import { useFilteredEmployees } from "./useFilteredEmployees";

describe("Given the useFilteredEmployees hook and a list of employees", () => {
  test("When filterText is empty, Then all employees should be returned", () => {
    const filterText = "";
    const { result } = renderHook(() =>
      useFilteredEmployees(employees, filterText)
    );
    expect(result.current.filteredEmployees).toEqual(employees);
  });

  test("When filtering by first name, Then only employees with matching first names should be returned", () => {
    const filterText = "Dan";
    const { result } = renderHook(() =>
      useFilteredEmployees(employees, filterText)
    );
    expect(result.current.filteredEmployees).toEqual([employees[0]]);
  });

  test("When filtering by last name, Then only employees with matching last names should be returned", () => {
    const filterText = "Moss";
    const { result } = renderHook(() =>
      useFilteredEmployees(employees, filterText)
    );
    expect(result.current.filteredEmployees).toEqual([employees[2]]);
  });

  test("When filtering by first and last name, Then only employees with matching first and last names should be returned", () => {
    const filterText = "Derek Joss";
    const { result } = renderHook(() =>
      useFilteredEmployees(employees, filterText)
    );
    expect(result.current.filteredEmployees).toEqual([employees[3]]);
  });
});
