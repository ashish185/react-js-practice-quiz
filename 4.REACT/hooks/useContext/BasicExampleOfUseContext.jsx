import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext("pink");

const BasicExampleOfUseContext = () => {
  const [color, setColor] = useState("light");
  const colorObj = { color, setColor };
  return (
    <ThemeContext.Provider value={colorObj}>
      <PrintContext />
    </ThemeContext.Provider>
  );
};

const PrintContext = () => {
  const colorObj = useContext(ThemeContext);
  const { color, setColor } = colorObj;

  const onBtnClick = () => {
    if (color === "light") {
      setColor("Dark");
    } else {
      setColor("light");
    }
  };

  return (
    <div>
      <button onClick={onBtnClick}>Change Theme</button>
      <h1>The color is {color}</h1>
    </div>
  );
};
export default BasicExampleOfUseContext;
