import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EmployeeSearch from "../components/EmployeeSearch";

describe("EmployeeSearch Component", () => {
   test("on value change onChange is called", () => {
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
