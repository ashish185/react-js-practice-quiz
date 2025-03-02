import ReactDOM from 'react-dom';
import Button from '../Button';
import React from 'react'
import {cleanup,screen, render} from '@testing-library/react';
import {renderer} from 'react-test-render';
//There may two compenets rendenring with same id therefore need to clean up
/* https://www.youtube.com/watch?v=ML5egqL3YFE */
it("The component is rendering successfully or not", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
});
/* 
it("Assert button label", () =>{
    const {getByTestId} = render(<Button label="save"></Button>)
    expect(getByTestId("button")).toHaveTextContent("save");
}); */

/* it("matched snapshot",()=>{
    renderer.create(<Button label="save2"></Button>).toJson();
    expect(tree).toMatchSnapshot();
}
)
 */
///* ReactDOM.render(element, container[, callback])