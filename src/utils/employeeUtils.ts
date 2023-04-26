import { Employee, department } from "../types/employee";

export const getEmployeeResultByDept = (employee: Employee): string => {
  const name = `${employee.firstName} ${employee.lastName}`;
  switch (employee.department) {
    case department.FINANCE:
      return `${name} - ${employee.email}`;
    case department.IT:
      return `${name} - ${employee.tel}`;
    default:
      return name;
  }
};
