import { render, screen } from "@testing-library/react";
export const Select = ({ options, ...props }) => {
  return (
    <select {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
 
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
 
describe("Native select wrapper", () => {
  it("should render with default value selected", () => {
    render(<Select options={animals} defaultValue={"cat"} />);
    expect(screen.getByRole("combobox")).toHaveValue("cat");
    expect(screen.getByRole("option", { name: "Cat" }).selected).toBe(true);
  });
});