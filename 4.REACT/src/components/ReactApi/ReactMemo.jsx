import { useState, memo } from "react";

const ToDo = ({ toDoList = [] }) => {
  console.log("Inside ToDo List");
  return (
    <div>
      {toDoList.map((el, index) => {
        return <div key={index}>{el.text}</div>;
      })}
    </div>
  );
};

const MemoToDo = memo(ToDo);
const createToDo = () => {
  const toDoList = [];
  for (let index = 0; index < 500; index++) {
    toDoList.push({ id: index, text: `Todo ${index + 1}` });
  }
  return toDoList;
};
const list = createToDo();
const ReactMemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          Increase Count
        </button>
        <div>{count}</div>
      </div>
      <div style={{ marginLeft: "250px" }}>
        <MemoToDo toDoList={list} />
      </div>
    </div>
  );
};

export default ReactMemo;
