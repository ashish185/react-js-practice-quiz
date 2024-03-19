import TOPICS from "./pages/Topics/Topics";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
