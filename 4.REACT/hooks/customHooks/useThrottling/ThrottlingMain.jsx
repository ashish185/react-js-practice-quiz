import { useState } from "react";
import useThrottling from "./useThrottling";

const ThrottlingMain = () => {
  const [text, onChangeText] = useState("");

  const anyApi = () =>
    Promise.resolve("Throttling API called: ".concat(text)).then((res) =>
      console.log(res)
    );

  const debounceCb = useThrottling(anyApi, 1000);
 const myOnChangeText = (e) => {
    onChangeText(e.target.value);
    debounceCb();
  };
  const onButtonClick = () => {
    debounceCb();
  };

  return (
    <div>
      InThrottlingMain
      <h3>Throttling</h3>
      <p>This is the example of Throttling:</p>
      <input type="text" value={text} onChange={myOnChangeText} />
      <div> The button</div>
      <div>
        <button onClick={onButtonClick}>Click button to fetch Api</button>
      </div>
      {/* <input type="text" value={text} onChange={myOnChangeText} /> */}
      <h3>Throttling vs Debouncing</h3>
      <p>
        In throttling When you keep typing in input key, in that case after
        every 1sec(throttling) time api will be called whereas in Debouncing the
        api will be called after the two keystroke has at least 1sec difference
      </p>
    </div>
  );
};

export default ThrottlingMain;
