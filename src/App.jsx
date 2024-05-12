import TOPICS from "./pages/Topics/Topics";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ListOfComponent from './ListOfComponents';
import UseEffectExercise1 from './../4.REACT/hooks/useEffect/UseEffectExercise1';
import UseEffectExercise2 from './../4.REACT/hooks/useEffect/UseEffectExercise2';
import UseEffectExercise3 from './../4.REACT/hooks/useEffect/UseEffectExercise3';
import UseEffectExercise4 from './../4.REACT/hooks/useEffect/UseEffectExercise4';
import BindingEventIssue from './../4.REACT/binding-event-issue/BindingEventIssue';
import HocMain from "../4.REACT/1.DesignPatterns/1.hoc/HocMain";
import TabMain from "../4.REACT/1.DesignPatterns/2.CompoundPattern/TabMain";

const basePath = "react-js-practice-quiz";

const components = [
  {
    path: `${basePath}/UseEffectExercise1`,
    element: <UseEffectExercise1 />,
  },
  {
    path: `${basePath}/UseEffectExercise2`,
    element: <UseEffectExercise2 />,
  },
  {
    path: `${basePath}/UseEffectExercise3`,
    element: <UseEffectExercise3 />,
  },
  {
    path: `${basePath}/UseEffectExercise4`,
    element: <UseEffectExercise4 />,
  },
  {
    path: `${basePath}/BindingEventIssue`,
    element: <BindingEventIssue />,
  },
  {
    path: `${basePath}/HocMain`,
    element: <HocMain />,
  },
  {
    path: `${basePath}/TabMain`,
    element: <TabMain />,
  },
];


const listOfComponents = [
  {
    path: "react-js-practice-quiz/Topics",
    element: <TOPICS />,
  },
  ...components
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
