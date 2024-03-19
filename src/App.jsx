import { TOPICS_QUIZ } from "./pages/Quiz/topics/topics-mappings";
import TOPICS from "./pages/Topics";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quiz from "./pages/Quiz/Quiz";
import { Outlet } from "react-router-dom";
import ListOfComponent from './ListOfComponents';

const listOfComponents = [
  {
    path: "react-js-practice-quiz/Topics",
    element: <TOPICS />,
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div>Navbar</div> <Outlet />
      </>
    ),
    errorElement: <div>Error</div>,
    children: [
      {
        path: "react-js-practice-quiz",
        element: <ListOfComponent list={listOfComponents} />,
      },
      ...listOfComponents,
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
