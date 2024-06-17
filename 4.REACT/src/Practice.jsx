import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
const themeContext = createContext("Yellow");

const ThemeChanger = () => {
  const contextValue = useContext(themeContext);
  const [color, setColor] = useState(contextValue);
  return (
    <>
      <p>Current color is {color}</p>
      <button>Change Theme</button>
    </>
  );
};

const ThemeChangerMain = () => {
  const contextValue = useContext(themeContext);
  const [color, setcolor] = useState(contextValue);
  return (
    <>
      <ThemeChanger />
    </>
  );
};

const HOC= (Component)=>{

    const NewComponent= () => {
        const [width, setWidth] = useState();
        const ref = useRef();
        useEffect(()=> {
            console.log(ref.current.offset);
        },[])

        return <Component ref={ref}>

        </Component>;
    }
    

}

const HocMain=()=> {

    return(
        <div>
           Hoc Main
        </div>
    )
}


const Practice = (props) => {
  return (
    <div>
      Practice
      <HocMain />
    </div>
  );
};
export default Practice;
