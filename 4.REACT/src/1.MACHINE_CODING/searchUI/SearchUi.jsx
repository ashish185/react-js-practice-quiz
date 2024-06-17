import "./search-ui.scss";
import { useState, useEffect } from "react";

const anyApi = () => {
  console.log("Any api called");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        "elon musk",
        "elon musk net worth",
        "elon musk net worth in rupees",
        "elon musk son name",
        "elon musk net worth in billion",
        "elon musk wife",
        "elon musk children",
        "elongated meaning in hindi",
        "elon musk age",
        "elongated meaning",
      ]);
    }, 2000);
  });
};

let timerId;
const cache = {};
const SearchUi = () => {
  const [text, setText] = useState("");
  const [listOfData, setListOfData] = useState([]);

  const apiCall = async function (text) {
    if (!cache[text]) {
      const res = await fetch(
        `https://www.google.com/complete/search?client=firefox&q=${text}`
      );
      const data = await res.json();
      cache[text] = data[1];
      setListOfData(data[1]);
    } else {
      setListOfData(cache[text]);
    }
  };

  //   useEffect(() => {
  //     async function fetchFun() {
  //       const res = await fetch(
  //         `https://www.google.com/complete/search?client=firefox&q=${text}`
  //       );
  //       const data = await res.json();
  //       setListOfData(data[1]);
  //     }
  //     fetchFun();
  //   }, [text]);

  const onTextChange = (e) => {
    setText(e.target.value);
    if (!timerId) {
      timerId = setTimeout(() => {
        timerId = "";
        apiCall(e.target.value);
      }, 1000);
    }
  
  };

  return (
    <div>
      <input
        value={text}
        className="text-box"
        type="text"
        onChange={onTextChange}
      />
      <ul className="list">
        {listOfData.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchUi;
