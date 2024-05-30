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
import SearchUi from "../4.REACT/1.MACHINE_CODING/searchUI/SearchUi";
import BasicForm from "../4.REACT/1.MACHINE_CODING/basicForm/BasicForm";
import CustomHookMain from "../4.REACT/hooks/customHooks/CustomHookMain";
import UseEffectCounterProblem from "../4.REACT/UseEffectCounterProblem/UseEffectCounterProblem";
import CallbackRunAtParticularTime from "../4.REACT/UseEffectCounterProblem/CallbackRunAtParticularTime";
import UseUpdateEffectMain from "../4.REACT/hooks/customHooks/useUpdateEfffect/UseUpdateEffectMain";
import UseOnceMain from "../4.REACT/hooks/customHooks/useOnce/UseOnceMain";
import DebounceMain from "../4.REACT/hooks/customHooks/useDebounce/DebounceMain";
import Practice from "../4.REACT/Practice";
import ReactMemoMain from "../4.REACT/components/ReactApi/ReactMemoMain";

const basePath = "react-js-practice-quiz";

const components = [
  {
    path: `${basePath}/Practice`,
    element: <Practice />,
  },
  {
    path: `${basePath}/ReactMemoMain`,
    element: <ReactMemoMain />,
  },
  {
    path: `${basePath}/DebounceMain`,
    element: <DebounceMain />,
  },
  {
    path: `${basePath}/UseOnceMain`,
    element: <UseOnceMain />,
  },
  {
    path: `${basePath}/UseUpdateEffectMain`,
    element: <UseUpdateEffectMain />,
  },
  // {
  //   path: `${basePath}/CallbackRunAtParticularTime`,
  //   element: <CallbackRunAtParticularTime />,
  // },
  {
    path: `${basePath}/UseEffectCounterProblem`,
    element: <UseEffectCounterProblem />,
  },
  {
    path: `${basePath}/CustomHookMain`,
    element: <CustomHookMain />,
  },
  {
    path: `${basePath}/SearchUi`,
    element: <SearchUi />,
  },
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
  {
    path: `${basePath}/BasicForm`,
    element: <BasicForm />,
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
  return <RouterProvider router={router} />;
}

export default App;
