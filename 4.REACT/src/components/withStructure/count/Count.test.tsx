import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Count from "./Count";

describe("Count", () => {
    test("renders correctly", () => {
        render(<Count />);
        const countElem = screen.getByRole("heading");
        expect(countElem).toBeInTheDocument();
        const incrementBtn = screen.getByRole("button", {
            name: "Increment"
        })
        expect(incrementBtn).toBeInTheDocument();
    })

    test("renders a count of 0", () => {
        render(<Count />);
        const countElem = screen.getByRole("heading");
        expect(countElem).toHaveTextContent("0");
    })

    test("render a count of 1 after clicking Increment button", async () => {
        user.setup();
        render(<Count />);
        const incrementBtn = screen.getByRole("button", {
            name: "Increment"
        })
        await user.click(incrementBtn);
        const countElem = screen.getByRole("heading");
        expect(countElem).toHaveTextContent("1");
    })

    test("render a count of 10 after clicking Set button", async () => {
        user.setup();
        render(<Count />);
        const amtInput = screen.getByRole('spinbutton');
        await user.type(amtInput, '10');
        expect(amtInput).toHaveValue(10);
        const setBtn = screen.getByRole("button", {
            name: "Set"
        })
        await user.click(setBtn);
        const countElem = screen.getByRole("heading");
        expect(countElem).toHaveTextContent("10");
    })

    test("elements to have focus in right order", async () => {
        user.setup();
        render(<Count />);
        const amtInput = screen.getByRole('spinbutton');
        const setBtn = screen.getByRole("button", { name: "Set" });
        const incrementBtn = screen.getByRole("button", { name: "Increment" });
        await user.tab();
        expect(incrementBtn).toHaveFocus();
        await user.tab();
        expect(amtInput).toHaveFocus();
        await user.tab();
        expect(setBtn).toHaveFocus();
    })
})