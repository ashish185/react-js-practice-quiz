 

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
  const ref = useRef()
  
  console.log(!!ref.current); //false
  useEffect(() => {
    console.log('After first render',!!ref.current)
  }, [ref.current]) //

  const [state, setState] = useState(0)
  console.log(1) //1
  
  useEffect(() => {
    console.log(2)
    setState(state => state + 1)
  }, [])

  return <div ref={ref}/>
}

export const QuizMainReact = () => {
  return (
    <div>
      QuizMainReact3
      <App />
    </div>
  );
};
