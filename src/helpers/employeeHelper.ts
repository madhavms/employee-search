import axios from "axios";
import { Employee, department } from "../types";

const getName = (employee: Employee): string => {
   return `${employee.firstName} ${employee.lastName}`;
};

const departmentRules = {
   [department.FINANCE]: {
      rule: (employee: Employee) => {
         return `${getName(employee)} - ${employee.email}`;
      },
   },

   [department.IT]: {
      rule: (employee: Employee) => {
         return `${getName(employee)} - ${employee.tel}`;
      },
   },
};

export const getEmployeeResultByDept = (employee: Employee): string => {
   return departmentRules[employee.department].rule(employee);
};

export const filterEmployeeList = (employee: Employee, filterText: string) => {
   const { firstName, lastName, email, tel } = employee;
   const searchText = filterText.toLowerCase();
   return (
      `${firstName} ${lastName}`.toLowerCase().includes(searchText) ||
      email.toLowerCase().includes(searchText) ||
      `${tel}`.includes(searchText)
   );
};

let abortController: AbortController;
let pathToEmployeeData: string = process.env.REACT_APP_EMPLOYEE_DATA_PATH
   ? `${process.env.REACT_APP_EMPLOYEE_DATA_PATH}`
   : "/employees.json";

export const getEmployees = async () => {
   abortController = new AbortController();
   const signal = abortController.signal;

   try {
      const { data } = await axios(pathToEmployeeData, {signal});
      return data;
   }
   catch (error) {
      throw new Error("Unable to fetch employees data.");
   }
};

export const getEmployeesCleanUp = () => {
   if(abortController.signal)
      abortController.abort();
};
