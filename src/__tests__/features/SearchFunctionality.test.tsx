import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../../App";
import useEmployee from "../../hooks/useEmployee";

jest.mock("chalk", () => ({
    green: (text: string) => text,
    blue: (text: string) => text,
    red: (text: string) => text,
  }));
  
  jest.mock("../../hooks/useEmployee");

describe("Employee Search Functionality", () => {
    test("should show only matching employees when a search query is entered", async () => {
      const employees = [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          department: "Finance",
          email: "johndoe@example.com",
          tel: "444-444-4445",
        },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Doe",
          department: "IT",
          email: "janedoe@example.com",
          tel: "555-555-5555",
        },
        {
          id: 3,
          firstName: "Bob",
          lastName: "Smith",
          department: "Finance",
          email: "bobsmith@example.com",
          tel: "333-333-3335",
        },
      ];
  
      const data = {
        isLoading: false,
        isError: false,
        employees: employees,
      };
  
      (useEmployee as jest.Mock).mockReturnValue(data);
      render(<App />);
      const searchInput = screen.getByLabelText("Employee Search:");
      fireEvent.change(searchInput, { target: { value: "Doe" } });
      const johnDoe = screen.getByText("John Doe - johndoe@example.com");
      const janeDoe = screen.getByText("Jane Doe - 555-555-5555");
      const bobSmith = screen.queryByText("Bob Smith - bobsmith@example.com");
      expect(johnDoe).toBeInTheDocument();
      expect(janeDoe).toBeInTheDocument();
      expect(bobSmith).not.toBeInTheDocument();
    });
  
    test("dispaly error message when no employees found", async () => {
      const employees = [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          department: "Finance",
          email: "johndoe@example.com",
          tel: "444-444-4445",
        },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Doe",
          department: "IT",
          email: "janedoe@example.com",
          tel: "555-555-5555",
        },
        {
          id: 3,
          firstName: "Bob",
          lastName: "Smith",
          department: "Finance",
          email: "bobsmith@example.com",
          tel: "333-333-3335",
        },
      ];
  
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
  })