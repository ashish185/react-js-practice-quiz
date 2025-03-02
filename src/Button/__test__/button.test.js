import { cleanup, render, screen } from '@testing-library/react';
import Button from '../Button';

afterEach(cleanup) //-> Need to clear this as, two components with same id might create issue
it("The component is rendering successfully or not", () =>{
  render(<Button label="Save"/>);
  screen.getByText("Save")
});
it("Check the content of button", () =>{
    render(<Button label="save"></Button>)
    expect(screen.getByTestId("button")).toBeInTheDocument();
    expect(screen.getByTestId("button")).toHaveTextContent("save")
});

/* it("matched snapshot",()=>{
    const obj={}.toJson();
    renderer.create(<Button label="save2"></Button>).toJson();
    expect(tree).toMatchSnapshot(obj);
}) */