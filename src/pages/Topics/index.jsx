import { useState } from "react";

import { TOPICS_QUIZ } from "../Quiz/topics/topics-mappings";
import Quiz from "../Quiz/Quiz";

const TOPICS = () => {
  const [topic, setTopic] = useState();
  const onClickHandler = (event) => {
    console.log(event.target.innerText);
    setTopic(event.target.innerText);
  };

  const showOutput = (event) => {
    console.log(event.target.innerText);
    setTopic(event.target.innerText);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <a
        style={{ font: "20px", fontWeight: "bold" }}
        href="https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/javascript/javascript-quiz.md"
      >
        Linkedin js quiz
      </a>
      {Object.keys(TOPICS_QUIZ).map((topic) => (
        <div key={topic}>
          <button onClick={onClickHandler}>{topic}</button>
        </div>
      ))}
      {topic && <Quiz questionList={TOPICS_QUIZ[topic]} />}
    </div>
  );
};

export default TOPICS;
