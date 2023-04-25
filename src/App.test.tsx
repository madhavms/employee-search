import { render, screen,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EmployeeList from "./components/EmployeeList";
import { Employee, department, active } from "./types/employee";
import App from './App';
import useEmployee from "./hooks/useEmployee";

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
        expect(employeeListItem).toBeInTheDocument();
      }
    });
  });
});

jest.mock('chalk', () => ({
  green: (text: string) => text,
  blue: (text: string) => text,
  red: (text: string) => text,
}));

jest.mock('./hooks/useEmployee');



describe('Employee Search', () => {
  test('should show only matching employees when a search query is entered', async () => {
    const employees = [
      { id: 1, firstName: 'John', lastName: 'Doe', department: 'Finance', email: 'johndoe@example.com', tel: '444-444-4445' },
      { id: 2, firstName: 'Jane', lastName: 'Doe', department: 'IT', email: 'janedoe@example.com', tel: '555-555-5555' },
      { id: 3, firstName: 'Bob', lastName: 'Smith', department: 'Finance', email: 'bobsmith@example.com', tel: '333-333-3335' },
    ];

    const data = {
      isLoading: false,
      isError: false,
      employees: employees
    };

    (useEmployee as jest.Mock).mockReturnValue(data)
    const { getByLabelText, getByText, queryByText } = render(<App />);
    const searchInput = await getByLabelText('Employee Search:');
    fireEvent.change(searchInput, { target: { value: 'Doe' } });
    const johnDoe = getByText('John Doe - johndoe@example.com');
    const janeDoe = getByText('Jane Doe - 555-555-5555');
    const bobSmith = queryByText('Bob Smith - bobsmith@example.com');
    expect(johnDoe).toBeInTheDocument();
    expect(janeDoe).toBeInTheDocument();
    expect(bobSmith).not.toBeInTheDocument();
  });
});

