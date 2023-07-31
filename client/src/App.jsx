import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProblemList } from "./components/ProblemList";
import { SingleProblem } from "./components/SingleProblem";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/problems",
      element: <ProblemList />,
    },
    {
      path: "/problems/:pid",
      element: <SingleProblem />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
