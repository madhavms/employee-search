import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EmployeeList from "./EmployeeList";
import { employees } from "../mock-data/employeeData";

describe("EmployeeList Component", () => {
    test("renders correct number of employees", () => {
        render(<EmployeeList employees={employees} />);
        const employeeList = screen.getByRole("list");
        expect(employeeList).toBeInTheDocument();
        const listItemElements = screen.getAllByRole('listitem');
        expect(listItemElements).toHaveLength(employees.length);
    });
});