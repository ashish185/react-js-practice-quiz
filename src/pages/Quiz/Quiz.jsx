import { useState, Fragment } from "react";
import "./quiz.css";

const Quiz = ({ questionList = [] }) => {
  const [selected, setSelected] = useState({});
  const handleOnClick = (event) => {
    console.log({ event });
    if (event.target.tagName === "INPUT") {
      console.log(event.target.value);
      const { id } = event.target;
      setSelected((prev) => ({ ...prev, [id]: event.target.value }));
    }
  };
  const getExplanation = (quesId, explanation = "") => {
    if (selected[quesId]) {
      const matchQuestion = questionList.find((obj) => obj.id === quesId) || {};
      if (matchQuestion.correctAnswer === selected[quesId]) {
        return "Correct ".concat(explanation);
      }
      return "Wrong ".concat(explanation);
    }
    return "";
  };
  return questionList.map(({ question, options = [], id, explanation }) => {
    return (
      <Fragment key={id}>
        <div className="card">
          <div>{`${id + 1}. `}What's the output?</div>
          <pre>
            <code>{question}</code>
          </pre>
        </div>
        <form id="quiz-form">
          <fieldset onClick={handleOnClick}>
            <legend>Select the correct answer:</legend>
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
            <div>{getExplanation(id, explanation)}</div>

            <div></div>
          </fieldset>
        </form>
      </Fragment>
    );
  });
};

export default Quiz;
