import { useState, Fragment } from "react";
import "./quiz.css";
import { useParams } from "react-router-dom";

const Quiz = ({ questionList = [] }) => {
  const [selected, setSelected] = useState({});
  const [showOutputObj, setShowOutputObj] = useState({});
  const obj = useParams();
  console.log("use paramsssss", obj);
  const handleOnClick = (event) => {
    console.log({ event });
    if (event.target.tagName === "INPUT") {
      console.log(event.target.value);
      const { id } = event.target;
      setSelected((prev) => ({ ...prev, [id]: event.target.value }));
    }
  };
  const showOutput = (id) => {
    const newObj={ ...showOutputObj, [id]: true };
    console.log(newObj);
    setShowOutputObj(newObj);
  };

  const getExplanation = (quesId, explanation = "", correctAnswer) => {
    if (selected[quesId]) {
      const matchQuestion = questionList.find((obj) => obj.id === quesId) || {};
      if (matchQuestion.correctAnswer === selected[quesId]) {
        //return "Correct ".concat(explanation);
      }
      return `${correctAnswer}: ${explanation}`;
      // return "Wrong ".concat(explanation);
    }
    return "";
  };
  console.log("showOutputObj[id]", showOutputObj);
  return questionList.map(
    ({ question, options = ["OUTPUT"], id, explanation, correctAnswer }) => {
      return (
        <Fragment key={id}>
          <div className="card">
            <pre style={{ margin: 0 }}>
              <code>
                {`${id}.`}
                {question}
              </code>
            </pre>
          </div>
          <form id="quiz-form">
            <fieldset onClick={handleOnClick}>
              {options.map((opt) => {
                return (
                  <label key={opt}>
                    <input
                      type="radio"
                      name="answer"
                      checked={opt === selected[id]}
                      value={opt}
                      id={id}
                    />
                    {opt}
                  </label>
                );
              })}
              <div>{getExplanation(id, explanation, correctAnswer)}</div>
            </fieldset>
          </form>
        </Fragment>
      );
    }
  );
};

export default Quiz;
