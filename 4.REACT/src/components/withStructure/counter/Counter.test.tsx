import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event';
import Counter from "./Counter";

describe("Counter", () => {
    test("render correctly", () => {
        render(<Counter count={0} />);
        const textElem = screen.getByText("Counter");
        expect(textElem).toBeInTheDocument()
    })

    test("handlers are called", async () => {
        user.setup();
        const increHandler = jest.fn();
        const decreHandler = jest.fn();
        render(<Counter count={0} handleIncrement={increHandler} handleDecrement={decreHandler} />)
        const increBtn = screen.getByRole("button", { name: "Increment" });
        const decreBtn = screen.getByRole("button", { name: "Decrement" });
        await user.click(increBtn);
        await user.click(decreBtn);
        expect(increHandler).toHaveBeenCalledTimes(1);
        expect(decreHandler).toHaveBeenCalledTimes(1);
    })
})