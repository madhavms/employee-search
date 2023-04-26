import { renderHook } from "@testing-library/react";
import useFilteredEmployees from "./useFilteredEmployees";
import { employees } from "../mock-data/employeeData";

describe ('useFilteredEmployees hook', () => {
    test('should return all employees when filterText is empty', () => {
        const filterText = '';
        const {result} = renderHook(() => useFilteredEmployees(employees, filterText));
        expect(result.current.filteredEmployees).toEqual(employees);
    });

    test('should filter employees by first name', () => {
        const filterText = 'Dan';
        const {result} = renderHook(() => useFilteredEmployees(employees, filterText));
        expect(result.current.filteredEmployees).toEqual([employees[0]]);
    });

    test('should filter employees by last name', () => {
        const filterText = 'Moss';
        const {result} = renderHook(() => useFilteredEmployees(employees, filterText));
        expect(result.current.filteredEmployees).toEqual([employees[2]]);
    });

    it("should filter employees by first and last name", () => {
        const filterText = "Derek Joss";
        const { result } = renderHook(() =>
          useFilteredEmployees(employees, filterText)
        );
        expect(result.current.filteredEmployees).toEqual([employees[3]]);
      });
});