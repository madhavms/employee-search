import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SubmitButton from "../components/SubmitButton";

describe("SubmitButton", () => {
    test("on click onClick is called", () => {
        const onClick = jest.fn();
        render(<SubmitButton handleClick={onClick} />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});