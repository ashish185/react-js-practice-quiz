import { useState } from "react";
import "./quiz.css";
import { scopeQuestions } from "../Quiz/topics/scope-and-hoisting";

const Question = () => {
    const [selected, setSelected] = useState({});
    const handleOnClick=(event)=> {
        console.log({event});
        if(event.target.tagName === 'INPUT'){
            console.log(event.target.value);
            const {id} = event.target;
            setSelected((prev)=> ({...prev, [id]: event.target.value}));
        }
    }

    const getExplanation=(quesId, explanation='')=> {
        if(selected[quesId]){
            const matchQuestion =
              scopeQuestions.find((obj) => obj.id === quesId) || {};
            if(matchQuestion.correctAnswer=== selected[quesId] ){
                return 'Correct '.concat(explanation)
            }
            return 'Wrong '.concat(explanation)
        }
        return '';
    }

  return (
    <section id="question-container">
      {scopeQuestions.map(({ question, options, id, explanation }) => {
        return (
          <>
            <div className="card">
              <div>What's the output?</div>
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
                <div>
                    {getExplanation(id,explanation)}
                </div>
                
                <div></div>
              </fieldset>
            </form>
          </>
        );
      })}
    </section>
  );
};

const Quiz = () => {
  return <Question />;
};

export default Quiz;
