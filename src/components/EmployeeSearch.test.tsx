import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { EmployeeSearch } from "./EmployeeSearch";

describe("Given EmployeeSearch component and when onSearch handler is provided", () => {
  test("then it calls onSearch handler when onChange event is fired", () => {
    const onChange = jest.fn();
    render(<EmployeeSearch onSearch={onChange} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "Dan" } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue("Dan");
  });
});
