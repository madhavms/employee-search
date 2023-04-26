import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Employee, department, active } from "../../types/employee";
import EmployeeList from "../../components/EmployeeList";

let employees: Employee[] = [
    {
        id: 1,
        firstName: "Dan",
        lastName: "Mac",
        email: "dan.mac@abc.com",
        department: department.FINANCE,
        tel: 11111,
        isActive: active.Yes,
    },
    {
        id: 2,
        firstName: "Jake",

        lastName: "Ross",
        email: "jake.ross@abc.com",
        department: department.FINANCE,
        tel: 44444,
        isActive: active.Yes,
    },
];

describe("EmployeeList Component", () => {
    test("renders correct number of employees", () => {
        render(<EmployeeList employees={employees} />);
        const employeeList = screen.getByRole("list");
        expect(employeeList).toBeInTheDocument();
        const listItemElements = screen.getAllByRole('listitem');
        expect(listItemElements).toHaveLength(employees.length);
    });
});