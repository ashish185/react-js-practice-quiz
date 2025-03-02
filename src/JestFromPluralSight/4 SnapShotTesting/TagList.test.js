import React from 'react'
import renderer from 'react-test-renderer';
import TagList from './TagList';

describe('The Tag component', () => {
    it("Renders as expected",()=>{
        const tree= renderer.create(<TagList tags={['css','bootstrap']}/>).toJSON();
        //Esko likhte hi ek new folder __snapshots__ k name se create ho jata h
        expect(tree).toMatchSnapshot();
    })
    
})
