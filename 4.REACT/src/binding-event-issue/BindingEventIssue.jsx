import React, { Component } from 'react'

export default class BindingEventIssue extends Component {
    /* 4 ways to bind a function correctly in React class based componets
    1) By calling arrow func () => this.inc1()
    2) By making fun as Arrow func
    3) By bind this.
    4) Binding fun thorugh constructor
    */
   constructor(props){
    super(props)
    this.inc4 = this.inc4.bind(this)
   }

    state = {
        count: 0
    }
    inc() {
        //lossing this
        console.log("This in inc:", this); //it does not find this here
    }
    inc1() {
        console.log("By calling arrow func", this);
        this.setState((prev) => {
            return {
                count: prev.count + 1
            }
        });
    }
    inc2 = () => {
        this.setState((prev) => {
            return {
                count: prev.count + 1
            }
        });
    }

    inc4() {
        this.setState((prev) => {
            return {
                count: prev.count + 1
            }
        });
    }
    render() {
        console.log("this at render",this);
        return (
            <div>
                <h2>Count for binding: {this.state.count}</h2>
                <button onClick={this.inc}>Give undefined on console Click</button>
                <button onClick={() => this.inc1()} >By calling through arrow func</button>
                <button onClick={ this.inc2} >By making fun as Arrow func</button>
                <button onClick={ this.inc1.bind(this)} >By bind this</button>
                <button onClick={ this.inc4}> Binding fun thorugh constructor</button>
            </div>
        )
    }
}
