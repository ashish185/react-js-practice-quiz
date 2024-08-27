import React from "react";
import { useState, useCallback } from "react";
import useDebounce from "./useDebounce.js";

const DebounceMain = () => {
  const [text, onChangeText] = useState("");
  const [batchCount, setBatchCount] = useState(0);
  //const debounce = useDebounce();

  const anyApi = () =>
    Promise.resolve("Debounce API called: ".concat(text)).then((res) =>
      console.log(res)
    );

  //   const debounceCb = useCallback(useDebounce(anyApi, 1000), []);

  const debounceCb = useDebounce(anyApi, 1000);

  //const debounceCb = useDebounceWithRef(anyApi, 1000);

  const myOnChangeText = (e) => {
    onChangeText(e.target.value);
    debounceCb();
  };
  const onButtonClick = () => {
    debounceCb();
    setBatchCount(batchCount+1);
    setBatchCount(batchCount+1);
    setBatchCount(batchCount+1);
    setBatchCount(batchCount+1);
  };

  return (
    <div>
      DebounceMain
      <h3>Debouncing</h3>
      <p>
        Debouncing delays the execution of your code until the user stops
        performing a certain action for a specified amount of time. Throttling
        limits the execution of your code to once in every specified time
        interval.
      </p>
      <p>
        This is the example of Debouncing: When you type text in input the api
        called on onChange, but not with every keyPress. Check console log for
        the output of api
      </p>
      <input type="text" value={text} onChange={myOnChangeText} />
      <div> The button</div>
      <div>
        <button onClick={onButtonClick}>Click button to fetch Api</button>
      </div>
      <div>Batch count{batchCount}</div>
      <div>
        ----------------------------------------------------------------------------------------------
      </div>
    </div>
  );
};

export default DebounceMain;
