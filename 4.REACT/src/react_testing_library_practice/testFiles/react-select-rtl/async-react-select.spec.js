import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select, { AsyncCreatable } from "react-select";
 
export const ReactAsyncSelectForm = (selectProps) => {
  const loadOptions = () => {
    return new Promise((resolve) => {
      resolve([
        { value: "dog", label: "Dog" },
        { value: "cat", label: "Cat" },
        { value: "lion", label: "Lion" },
        { value: "tiger", label: "Tiger" },
        { value: "elephant", label: "Elephant" },
        { value: "giraffe", label: "Giraffe" },
        { value: "zebra", label: "Zebra" },
        { value: "penguin", label: "Penguin" },
        { value: "panda", label: "Panda" },
        { value: "koala", label: "Koala" },
      ]);
    });
  };
 
  return (
    <form aria-label={"animal form"}>
      <label htmlFor={"animals"}>Animals</label>
      <Select
        name={"animals"}
        inputId={"animals"}
        loadOptions={loadOptions}
        defaultOptions
        {...selectProps}
      />
    </form>
  );
};

function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}
 
describe("ReactAsyncSelectForm", () => {
  it("should render with default value selected", async () => {
    setup(
      <ReactAsyncSelectForm defaultValue={{ value: "cat", label: "Cat" }} />,
    );
    expect(await screen.findByText("Cat")).toBeInTheDocument();
    expect(screen.getByRole("form")).toHaveFormValues({ animals: "cat" });
  });
});