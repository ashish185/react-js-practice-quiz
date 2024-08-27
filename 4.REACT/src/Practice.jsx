import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
const themeContext = createContext("Yellow");
let id;

const useDebounce=(time)=>{
  return function(cb){ 
    if(!id){
      id = setTimeout(() => {
        cb();
      }, time);
    }
  }
};



const Practice = (props) => {
  const [text, setText]= useState('');
  const debounce = useDebounce(2000);

  const apiCall=()=> {
    console.log("apiCalled");
  };

  const inputOnChange = (e) => {
    setText(e.target.value);
    debounce(apiCall);
  };

  return (
    <div>
      Practice
      <input onChange={inputOnChange} value={text} />
    </div>
  );
};
export default Practice;
