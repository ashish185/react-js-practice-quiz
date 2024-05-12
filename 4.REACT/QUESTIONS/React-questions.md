1. What is the diff between React.PureComponent and React.Component ?
  Ans) React.Component doesn’t implement shouldComponentUpdate(),
    but React.PureComponent implements it with a shallow prop and state comparison.

2. What are HOC ?
1) HOC is an advanced techqnique in React for resuing component logic.
2) A hoc is a function that takes a component and returns a new component.
3) Used with third - party React libraries.

3. What are PureComponent ?
Ans
(a) PureComponent in React is used to avoid reRendering of Component if there is no new change.
(b) It implements shouldComponentUpdate lifecycle method by performing a shallow comparison
on the props and state of the Component.    
(c) It's good idea to ensure every childern are also pure Component.
  (d) Never mutate the state directly.

4. What is state ?
The State of a component is an object that holds some information
that may change over the lifetime of the component.

5. What are props in React ?
  (a)define What
    (b)purpose Why
      (c)how How
Props are inputs to components.They are single values or objects that
are passed to components.
They are data passed down from a parent component to a child component.

The primary purpose of props in React is to provide following component functionality:
1) Pass custom data to your component.
2) Trigger state changes.

6. Diff between State vs Props ?
  Props : (a)Props get passed tp component similar like function parameters
  (b)Props of components can't be changed.(immutable)
State: (a)state is used to interact with in the component.
(b) Can be change

7. What is the difference between HTML and React event handling ?
  In HTML: a) Event name is lower case and passed as string
    < button onclick = 'activateLasers()' >
      b) <a href='#' onclick='console.log("The link was clicked."); return false;' />
In React: a) Event name is in camelCasing
  < button onClick = { activateLasers } >
    b) function handleClick(event) {
      event.preventDefault()
      console.log('The link was clicked.')
    }


8. How to bind methods or events in JSX callbacks ?
Ans a) Binding in constructor
constructor(props) {
  super(props)
  this.handleClick = this.handleClick.bind(this)
}
b) calling the arrow function
  c) calling function as Arrow callback


9. What is Virtual DOM ?
  The Virtual DOM(VDOM) is an in -memory representation of Real DOM.
The representation of a UI is kept in memory and synced with the "real" DOM.
This entire process is called reconciliation.

10. What is reconciliation ?
  When a component's props or state change, React decides whether an actual DOM update is necessary 
by comparing the newly returned element with the previously rendered one.
When they are not equal, React will update the DOM.This process is called reconciliation.

11. What's wrong in this?
render() {
  // Wrong: handleClick is called instead of passed as a reference!
  return <button onClick={this.handleClick()}>{'Click Me'}</button>
    / It should be < button onClick = { this.handleClick } >
}
12. Why React uses className over class attribute?
Ans class is keyword in javascript.

13. What are portals in React ?
  Ans) To render children into a DOM node that exists outside the DOM hierarchy of the parent component.
    ReactDOM.createPortal(child, container)

14. What is the use of react - dom package ?
  The react - dom package provides DOM - specific methods that can be used at the top level of your app.
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode >,
      document.getElementById("root")
    );
render()
hydrate()
unmountComponentAtNode()
findDOMNode()
createPortal()

15. react - dom / server ?
  renderToString() : These methods are generally use for SSR  
renderToStaticMarkup()

16. What will happen if you use props in initial state ?
constructor(props) {
  super(props)

  this.state = {
    records: [],
    inputValue: this.props.inputValue
  };
}
//Esse kya hoga ki Jab props change honge to constructor reinitalise nhi krega state ko
therfore reRendering nhi hogi

17. What is the difference between super() and super(props) in React using ES6 classes ?
 constructor(props) {
  super()//not give
  console.log(this.props) // { name: 'John', ... } ye undefined aayeg
}

18. Why we need to pass a function to setState() or Why function is preferred over object for setState() ?
Ans)React may batch multiple setState() calls into a single update for performance.
         Because this.props and this.state may be updated asynchronously,

19. Config files in project
package.json, which includes everything you need to bundle with webpack
webpack.config.js, which contains the configuration needed for webpack to create the bundles
  .babelrc, which contains the Babel settings needed to compile JSX files

20. What is Babel or Do browsers understand JSX code ?
Ans) No, browsers can't understand JSX code. 
a) You need a transpiler to convert your JSX to regular Javascript that browsers can understand.
The most widely used transpiler right now is Babel.
  b) Use next generation JavaScript, today.Babel will turn your ES6 + code into ES5 friendly code,
    so you can start using it right now without waiting for browser support

21. Webpack
Webpack is, among other things, a dependency analyzer and module bundler.
For example, if module A requires B as a dependency, and
module B requires C as a dependency, then webpack will generate a dependency map like C -> B -> A.

22. What are hooks ?
Hooks is a new feature(React 16.8) that lets you use state and other React features without writing a class.

Call Hooks only at the top level of your react functions.
  i.e, You shouldn’t call Hooks inside loops, conditions, or nested functions
Call Hooks from React Functions only.i.e, You shouldn’t call Hooks from regular JavaScript functions.

23. PureFunctions in JS?
Ans) Pure function vo hote h jo koi input le or output de without changing the 
input or uss par koi side effect bhi na ho.
Ex:
const arr=[1,2];
function pF(arr,element)
{
    //arr.push(element) //It creates the side effect
    return [...arr,element];
}
pF(arr,3);

24. In react all DOM properties and attributes (including event handlers) should be camelCased.
tabindex -> tabIndex
onchange->onChange
Except-aria-label and data-*
//Since for is a reserved keyword in JS
//we need to use htmlFor
<label for="username">user name</label>

1. What is React Fiber?
Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.


1. What is the main goal of React Fiber?
The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

1. What is Jest?
Jest is a JavaScript unit testing framework created by Facebook based on Jasmine and provides automated mock creation and a jsdom environment. It's often used for testing components.

1. What are render props?
Render Props is a simple technique for sharing code between components using a prop whose value is a function. The below component uses render prop which returns a React element.

<DataProvider render={data => (
  <h1>{`Hello ${data.target}`}</h1>
)}/>
Libraries such as React Router and DownShift are using this pattern.

3. export default withRouter(Navigation);
jo bhi component use krega Routing it must be wrap with 
export default withRouter(Navigation);

1. How to implement default or NotFound page?
A <Switch> renders the first child <Route> that matches. A <Route> with no path always matches. So you just need to simply drop path attribute as below

<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/user" component={User}/>
  <Route component={NotFound} />
</Switch>

1. const parsed = queryString.parse(props.location.search);
You can also use URLSearchParams if you want something native:

const params = new URLSearchParams(props.location.search)
const foo = params.get('name')

1. In which scenarios error boundaries do not catch errors?
Below are the cases in which error boundaries doesn't work,

Inside Event handlers
Asynchronous code using setTimeout or requestAnimationFrame callbacks
During Server side rendering
When errors thrown in the error boundary code itself