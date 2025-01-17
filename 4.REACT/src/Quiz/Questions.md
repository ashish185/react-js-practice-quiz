## Guess the React output

1.  State is changed then child component re render
```js
// This is a React Quiz from BFE.dev 
import * as React from 'react'
import { useState, useEffect, memo } from 'react'
import { createRoot } from 'react-dom/client'

function A() {
  console.log('A')
  return <B/>
}

const B = memo(() => {
  console.log('B')
  return <C/>
})

function C() {
  console.log('C')
  return null
}

function D() {
  console.log('D')
  return null
}

function App() {
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(state => state + 1)
  }, [])
  console.log('App')
  return (
    <div>
      <A state={state}/>
      <D/>
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)

```
**Output**
App
A
B
C
D
APP
A(since B is memoised it will not run)
D

2. ## Set state jitni bar bhi call hoga utni bar return call hoga, chahe return state use hi nhi hue
```js
import * as React from "react";
import { useState, useEffect, memo } from "react";
import { createRoot } from "react-dom/client";

function A({ children }) {
  console.log('A')
  return children
}

function B() {
  console.log('B')
  return <C/>
}

function C() {
  console.log('C')
  return null
}

function D() {
  console.log('D')
  return null
}

function App() {
  const [state, setState] = useState(0)
  useEffect(() => {
   let id = setTimeout(() => {
     setState((state) => state + 1);
   });
   return ()=>{
    clearTimeout(id);
   }
  }, [state])
  console.log('App')
  return (
    <div>
      <A><B/></A>
      <D/>
    </div>
  )
}

export const QuizMainReact = () => {
  return (
    <div>
      QuizMainReact
      <App />
    </div>
  );
};
```
3. ## Explanation of the Change
Because A renders its children directly, the re-render of A triggered by useEffect does not cause B or C to re-render. This avoids unnecessary renders, aligning with React's efficient re-rendering principles—something that could be particularly useful in larger React projects like your JavaScript quiz implementation.
```js
// This is a React Quiz from BFE.dev 

import * as React from 'react'
import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

function A({ children }) {
  console.log('A')
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(state => state + 1)
  }, [])
  return children
}

function B() {
  console.log('B')
  return <C/>
}

function C() {
  console.log('C')
  return null
}

function D() {
  console.log('D')
  return null
}

function App() {
  console.log('App')
  return (
    <div>
      <A><B/></A>
      <D/>
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)

```
**OUTPUT**
- App
- A
- B
- C
- D
- A (does not re render B because it is handled by A not use effect )


4. ## Automatic batching 
```js
// This is a React Quiz from BFE.dev 

import * as React from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { screen, fireEvent } from '@testing-library/dom'

function App() {
  const [state, setState] = useState(0)
  console.log("App " + state)
  return (
    <div>
      <button onClick={() => {
        setState(count => count + 1)
        setState(count => count * 2)
      }}>click me</button>
    </div>
  )
}

(async () => {
  const root = createRoot(document.getElementById('root'));
  root.render(<App/>)

  fireEvent.click(await screen.findByText('click me'))
})()

```
**Output**
2

5. ## Context Related
Learning thought context component B is in memo with A
still the components re render on state change.

```js
import { useState, memo, createContext, useEffect, useContext} from 'react'
import { createRoot } from 'react-dom/client'

const MyContext = createContext(0);

function B() {
  const count = useContext(MyContext)
  console.log('B')
  return null
}

const A = memo(() => {
  console.log('A')
  return <B/>
})

function C() {
  console.log('C')
  return null
}
function App() {
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(state => state + 1)
  }, [])
  console.log('App')
  return <MyContext.Provider value={state}>
    <A/>
    <C/>
  </MyContext.Provider>
}

export const QuizMainReact = () => {
  return (
    <div>
      QuizMainReact3
      <App />
    </div>
  );
};
```

**Output**
- App
- A
- B
- C
- App
- B
- C

6.
```js

function App() {
  const [state, setState] = useState(0)
  console.log(state)

  useEffect(() => {
    setState(state => state + 1)
  }, [])

  useEffect(() => {
    console.log(state)
    setTimeout(() => {
      console.log(state)
    }, 100)
  }, [])

  return null
}
```

**Output**
- 0
- 0
- 1
- 0

6. 
```js
 

import {
  useState,
  useRef,
  memo,
  createContext,
  useEffect,
  useContext,
} from "react";
import { createRoot } from 'react-dom/client'

const MyContext = createContext(0);

function App() {
  const ref = useRef(null)
  const [state, setState] = useState(1)

  useEffect(() => {
    setState(2)
  }, [])

  console.log(ref.current?.textContent)

  return <div>
    <div ref={state === 1 ? ref : null}>1</div>
    <div ref={state === 2 ? ref : null}>2</div>
  </div>
}

export const QuizMainReact = () => {
  return (
    <div>
      QuizMainReact3
      <App />
    </div>
  );
};

```

//Output:
1

6. ## Lazy initial state
```js
// This is a React Quiz from BFE.dev

import * as React from 'react'
import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
function App() {
  const [state1, setState1] = useState(1);

  const [state2] = useState(() => {
    console.log(2);
    return 2;
  });

  console.log(state1);

  useEffect(() => {
    setState1(3);
  }, []);

  return null;
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
```
**OUTPUT**
- 2
- 1
Since component return component does not re render again