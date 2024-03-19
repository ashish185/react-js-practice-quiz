
import Quiz from "./pages/Quiz/Quiz";
import { thisQuestions } from "./pages/Quiz/topics/this-questions";

function App() {
  return <Quiz questionList={thisQuestions} />;
}

export default App;
