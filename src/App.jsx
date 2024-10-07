import TOPICS from "./pages/Topics/Topics";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ListOfComponent from './ListOfComponents';
import BindingEventIssue from '../4.REACT/src/binding-event-issue/BindingEventIssue';
import HocMain from "../4.REACT/src/1.DesignPatterns/1.hoc/HocMain";
import TabMain from "../4.REACT/src/1.DesignPatterns/2.CompoundPattern/TabMain";
import SearchUi from "../4.REACT/src/1.MACHINE_CODING/searchUI/SearchUi";
import BasicForm from "../4.REACT/src/1.MACHINE_CODING/basicForm/BasicForm";
import CustomHookMain from "../4.REACT/src/hooks/customHooks/CustomHookMain";
// import UseEffectCounterProblem from "../4.REACT/src/UseEffectCounterProblem/UseEffectCounterProblem";
import CallbackRunAtParticularTime from "../4.REACT/src/UseEffectCounterProblem/CallbackRunAtParticularTime";
import UseUpdateEffectMain from "../4.REACT/src/hooks/customHooks/useUpdateEfffect/UseUpdateEffectMain";
import UseOnceMain from "../4.REACT/src/hooks/customHooks/useOnce/UseOnceMain";
import DebounceMain from "../4.REACT/src/hooks/customHooks/useDebounce/DebounceMain";
import Practice from "../4.REACT/src/Practice";
import ReactMemoMain from "../4.REACT/src/components/ReactApi/ReactMemoMain";
import ResponsiveWebDesign from "../4.REACT/src/ResponsiveWebDesign/ResponsiveWebDesign";
import FetchPractice from "../4.REACT/src/fetch/FetchPractice";

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
    path: `${basePath}/CustomHookMain`,
    element: <CustomHookMain />,
  },
  {
    path: `${basePath}/SearchUi`,
    element: <SearchUi />,
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
  {
    path: `${basePath}/ResponsiveWebDesign`,
    element: <ResponsiveWebDesign />,
  },
  {
    path: `${basePath}/FetchPractice`,
    element: <FetchPractice />,
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
