import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import {useEmployee} from "./hooks";
import { employees } from "./mock-data";

jest.mock("chalk", () => ({
  green: (text: string) => text,
  blue: (text: string) => text,
  red: (text: string) => text,
}));

jest.mock("./hooks/useEmployee");

describe("Given the user searches for an employee", () => {
  test("When the search query matches an employee's first name, Then the matching employee is displayed", () => {
    const data = {
      isLoading: false,
      isError: false,
      employees: employees,
    };

    (useEmployee as jest.Mock).mockReturnValue(data);
    render(<App />);
    const searchInput = screen.getByLabelText("Employee Search:");
    fireEvent.change(searchInput, { target: { value: "Jake" } });
    const jakeRoss = screen.getByText("Jake Ross - jake.ross@domain.com");
    const ianMoss = screen.queryByText("Ian Moss - 33333");
    expect(jakeRoss).toBeInTheDocument();
    expect(ianMoss).not.toBeInTheDocument();
  });

  test("When the search query does not match any employee's name, Then an error message is displayed", () => {
    const data = {
      isLoading: false,
      isError: false,
      employees: employees,
    };

    (useEmployee as jest.Mock).mockReturnValue(data);
    render(<App />);
    const searchInput = screen.getByLabelText("Employee Search:");
    fireEvent.change(searchInput, { target: { value: "RandomName" } });
    const errorMessage = screen.getByText("No employees found!");
    expect(errorMessage).toBeInTheDocument();
  });
});
