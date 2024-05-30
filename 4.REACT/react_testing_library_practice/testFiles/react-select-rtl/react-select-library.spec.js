import Select from "react-select";
import { render, screen,waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
};

export const ReactSelectForm = (selectProps) => {
  const animals = [
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
  ];
 
  return (
    <form aria-label={"animal form"}>
      <label htmlFor={"animals"}>Animals</label>
      <Select
        name={"animals"}
        inputId={"animals"}
        options={animals}
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
 
describe("ReactSelectForm", () => {
  // it("should render with default value selected", () => {
  //   setup(<ReactSelectForm defaultValue={{ value: "cat", label: "Cat" }} />);
  //   expect(screen.getByText("Cat")).toBeInTheDocument();
  //   expect(screen.getByRole("form")).toHaveFormValues({ animals: "cat" });
  // });
 
it("should select correct value on change", async () => {
  const { user } = setup(
    <ReactSelectForm defaultValue={{ value: "cat", label: "Cat" }} />,
  );
 
  await waitFor(async () => {
    // await user.click(screen.getByLabelText("Animals"));
    screen.getByLabelText("Animals").focus();
    await user.keyboard("[ArrowDown]");
    await user.click(screen.getByText("Zebra"));
  });
 
  expect(screen.getByRole("form")).toHaveFormValues({ animals: "zebra" });
});
  
it("should work with multi-select", async () => {
  setup(<ReactSelectForm isMulti />);
 
  await selectOptions(screen.getByLabelText("Animals"), ["Zebra", "Lion"]);
 
  expect(screen.getByRole("form")).toHaveFormValues({
    animals: ["zebra", "lion"],
  });
});

});