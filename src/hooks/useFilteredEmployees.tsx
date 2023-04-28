import { useEffect, useState } from "react";
import { Employee } from "../types";
import { filterEmployeeList } from "../helpers/employeeHelper";

export const useFilteredEmployees = (
   employees: Employee[],
   filterText: string
) => {
   const [filteredEmployees, setFilteredEmployees] =
      useState<Employee[]>(employees);

   useEffect(() => {
      const filtered = filterText
         ? employees.filter(employee => filterEmployeeList(employee, filterText))
         : employees;
      setFilteredEmployees(filtered);
   }, [employees, filterText]);

   return { filteredEmployees };
};
