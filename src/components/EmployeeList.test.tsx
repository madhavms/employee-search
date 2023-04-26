import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EmployeeList from "./EmployeeList";
import { department } from "../types/employee";
import { employees } from "../mock-data/employeeData";

describe("List Functionality", () => {
    test("renders correct number of employees", async () => {
      render(<EmployeeList employees={employees} />);
      const employeeList = await screen.findAllByRole("listitem");
      employeeList.forEach((employeeListItem) => {
        expect(employeeListItem).toBeInTheDocument();
      });
      expect(employeeList).toHaveLength(employees.length);
    });
  
    test("displays correct information for employees in Finance department", () => {
  
      render(<EmployeeList employees={employees} />);
      
      const financeEmployees = employees
        .filter((employee) => employee.department === department.FINANCE)
        .map(
          (employee) =>
            `${employee.firstName} ${employee.lastName} - ${employee.email}`
        );
  
        financeEmployees.forEach((financeEmployee) => {
          const employeeListItem = screen.getByText(financeEmployee);
          expect(employeeListItem).toBeInTheDocument();
        });
    });
  
    test("displays correct information for employees in IT department", () => {
  
      render(<EmployeeList employees={employees} />);
      const itEmployees = employees
        .filter((employee) => employee.department === department.IT)
        .map(
          (employee) =>
            `${employee.firstName} ${employee.lastName} - ${employee.tel}`
        );
  
      itEmployees.forEach((itEmployee) => {
        const employeeListItem = screen.getByText(itEmployee);
        expect(employeeListItem).toBeInTheDocument();
      });
    });
  });