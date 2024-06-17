1) What is Redux?
Ans)Redux is an open-source JavaScript library for managing application state.
It is most commonly used with libraries such as React or Angular for building user interfaces. 
2)What are the core principles of Redux?
Ans)
(a)single source of truth.
(b)state are read only.
(c)Changes are made with pure functions: jo changes hote h vo Reducer ki help se hote h
& Reducer ek pure function jo Intial state and action args m leta h or hmesha same result (state) deta h
without changing the any args.


3)What is mapStateToProps()?
 is a utility which helps your COMPONENT GET UPDATED STATE
 (which is updated by some other components):

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
mapDispatchToProps() is a utility which will help your component
 to fire an action event (dispatching action which may cause change of application state):

 const mapDispatchToProps = (dispatch) => ({
 action: () => dispatch(action())
})

const mapDispatchToProps = { action }

 3) What is middleware?
Ans) Milldeware in react adding extra functionalies to the code without changing the current process

4) Benefit of Redux dev tool
YOu can travel to time

5) How to add middleware?
they all come from 'redux'
createStore(store,applyMiddleware(name_))

 6) Redux?
 Redux is syncronous
 How to make it asynchrounous?
 Ans) We can use ActionCreators fo this
7) What is Provider?
The <Provider /> makes the Redux store available to any nested
components that have been wrapped in the connect() function.
8)  Redux reducer is called, the state and action are passed as parameters.
 This state is then reduced (or accumulated) 
based on the action, and then the next state is returned. Y

9)Selectors are functions that take Redux state as an argument and return some data to pass to the component.
These selectors have two main benefits,

The selector can compute derived data, allowing Redux to store the minimal possible state
The selector is not recomputed unless one of its arguments changes

In index.js
 import { Provider } from "react-redux";
ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  document.getElementById("root")
);

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
const store = createStore(
  combRed,
  composeEnhancers(applyMiddleware(logger, thunk))
);
react-redux: only Provider component
or
const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore)
 
onIncrementWithPayload: (val) => {
      dispatch({
        type: "INCREMENT_COUNTER_WITH_PAYLOAD",
        value: val // this is Identifier
      });
    }

addToTheList: (val) => dispatch(addToTheListAsync(val))    

export const addToTheListAsync = (val) => {
  return dispatch => {
      console.log("Check",val);
    setTimeout(() => {
        dispatch(saveResult(val));
    }, 2000);
  };
};

What is the use of the ownProps parameter in mapStateToProps() and mapDispatchToProps()?
If the ownProps parameter is specified, React Redux will pass the props that were passed to the component into your connect functions. So, if you use a connected component:

import ConnectedComponent from './containers/ConnectedComponent';

<ConnectedComponent user={'john'} />
The ownProps inside your mapStateToProps() and mapDispatchToProps() functions will be an object:

{ user: 'john' }
You can use this object to decide what to return from those functions.

Q)What is Babel in React?
Ans)JSX is converted to JavaScript, 
function hello() {
  return <div>Hello world!</div>;
} (JSX)
transcompiles to 
function hello() {
  return /*#__PURE__*/React.createElement("div", null, "Hello world!");
}
null:Because attribute is not given

ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
);