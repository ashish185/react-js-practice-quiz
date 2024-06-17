import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
    test("renders correctly", () => {
        render(<Form />);

        const h1Elem = screen.getByRole("heading", {
            level: 1
        });
        expect(h1Elem).toBeInTheDocument();

        const h5Elem = screen.getByRole("heading", {
            level: 5
        });
        expect(h5Elem).toBeInTheDocument();

        const customElem = screen.getByTestId("custom-elem");
        expect(customElem).toBeInTheDocument();

        const closeElem = screen.getByTitle("open");
        expect(closeElem).toBeInTheDocument();

        const paraElem = screen.getByText("Fill up all your basic information");
        expect(paraElem).toBeInTheDocument();

        const imgElem = screen.getByAltText("Random women image");
        expect(imgElem).toBeInTheDocument();

        const nameElem = screen.getByRole("textbox", {
            name: "Name"
        });
        expect(nameElem).toBeInTheDocument();

        const nameElem2 = screen.getByLabelText("Name", {
            selector: "input"
        });
        expect(nameElem2).toBeInTheDocument();

        const nameElem3 = screen.getByPlaceholderText("Enter Name");
        expect(nameElem3).toBeInTheDocument();

        const descElem = screen.getByRole("textbox", {
            name: "Description"
        });
        expect(descElem).toBeInTheDocument();

        const locationElem = screen.getByRole("combobox");
        expect(locationElem).toBeInTheDocument();

        const termsElem = screen.getByRole("checkbox");
        expect(termsElem).toBeInTheDocument();

        const termsElem2 = screen.getByLabelText("All is agreed");
        expect(termsElem2).toBeInTheDocument();

        const submitElem = screen.getByRole("button");
        expect(submitElem).toBeInTheDocument();
    })
})