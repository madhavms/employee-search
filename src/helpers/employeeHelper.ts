import { Employee, department } from "../types";

const getName = (employee: Employee): string => {
   return `${employee.firstName} ${employee.lastName}`;
};

const departmentRules = {
   [department.FINANCE]: {
      callback: (employee: Employee) => {
         return `${getName(employee)} - ${employee.email}`;
      },
   },

   [department.IT]: {
      callback: (employee: Employee) => {
         return `${getName(employee)} - ${employee.tel}`;
      },
   },
};

export const getEmployeeResultByDept = (employee: Employee): string => {
   return departmentRules[employee.department].callback(employee);
};
