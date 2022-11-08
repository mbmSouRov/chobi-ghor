import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";
import AllServices from "../Pages/AllServices";
import Service from "../Pages/Service";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>,
      },
      {
        path: "/service/:id",
        element: <Service></Service>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
    ],
  },
]);

export default Routes;
