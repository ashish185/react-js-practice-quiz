import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/1.Greet';
import Status from './components/2.Status';
import { STATUS_CODE } from './components/enumsConstant';
import StylesContainer from './components/4.Style';
import PersonContainer from './components/5.Person';
import { UserReducerContainer } from './components/7.UserReducerContainer';
import { ThemeContainer } from './components/10.ThemeContainer';
import UserContainer from './components/11.UserContainer';

const persons=[{
  firstName:'Donald',
  lastName: 'Trump'
},
{
  firstName:'Narendra',
  lastName: 'Modi'
},
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet persons={persons} />
        {/* <Status status={'OTHER STATUS'} /> */}{' '}
        {/* Type '"OTHER STATUS"' is not assignable to type 'STATUS_CODE' */}
        <Status status={STATUS_CODE.ERROR} />
        <StylesContainer />
        <PersonContainer />
        <UserReducerContainer />
        <ThemeContainer />
        <UserContainer />
      </header>
    </div>
  );
}

export default App;
