import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EmployeeList from "./components/EmployeeList";
import { Employee, department, active } from "./types/employee";

let employees: Employee[] = [
  {
    id: 1,
    firstName: "Dan",
    lastName: "Mac",
    email: "dan.mac@domain.com",
    department: department.FINANCE,
    tel: 11111,
    isActive: active.Yes,
  },
  {
    id: 2,
    firstName: "Jake",
    lastName: "Ross",
    email: "jake.ross@domain.com",
    department: department.FINANCE,
    tel: 44444,
    isActive: active.Yes,
  },
  {
    id: 3,
    firstName: "Ian",
    lastName: "Moss",
    email: "ian.moss@domain.com",
    department: department.IT,
    tel: 33333,
    isActive: active.No,
  },
];

describe("EmployeeList", () => {
  test("renders correct number of employees", () => {
    render(<EmployeeList employees={employees} />);
    const employeeList = screen.getByRole("list");
    expect(employeeList).toBeInTheDocument();
    expect(employeeList.children).toHaveLength(employees.length);
  });

  test("displays correct information for employees in Finance department", () => {
    const employees: Employee[] = [
      {
        id: 1,
        firstName: "Mike",
        lastName: "Strong",
        email: "mike.strong@domain.com",
        department: department.FINANCE,
        tel: 11111,
        isActive: active.Yes,
      },
      {
        id: 2,
        firstName: "Jos",
        lastName: "Kate",
        email: "jos.kate@domain.com",
        department: department.FINANCE,
        tel: 22222,
        isActive: active.Yes,
      },
    ];

    render(<EmployeeList employees={employees} />);

    employees.forEach((employee) => {
      if (employee.department === "Finance") {
        const employeeListItem = screen.getByText(
          `${employee.firstName} ${employee.lastName} - ${employee.email}`
        );
        expect(employeeListItem).toBeInTheDocument();
      }
    });
  });

  test("displays correct information for employees in IT department", () => {
    const employees: Employee[] = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@domain.com",
        department: department.IT,
        tel: 11111,
        isActive: active.Yes,
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@domain.com",
        department: department.IT,
        tel: 22222,
        isActive: active.Yes,
      },
    ];

    render(<EmployeeList employees={employees} />);
    employees.forEach((employee) => {
      if (employee.department === "IT") {
        const employeeListItem = screen.getByText(
          `${employee.firstName} ${employee.lastName} - ${employee.tel}`
        );
        console.log("employeeListItem=", employeeListItem);
        expect(employeeListItem).toBeInTheDocument();
      }
    });
  });
});
