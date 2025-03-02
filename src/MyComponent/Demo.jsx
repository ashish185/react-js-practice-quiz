import React, { Component } from 'react'
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';
import Button from './../Button/Button';

export default class Demo extends Component {
    myFunction = () => {
        
    }
    render() {
        return (
            <Demo2>
                <Demo3>HI</Demo3>
                <Demo4>Hello</Demo4>
                <Button></Button>
            </Demo2>
        )
    }
}
