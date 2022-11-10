import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";
import Login from "../LogInOut/Login";
import Signup from "../LogInOut/Signup";
import AddServices from "../Pages/AddServices";
import AllServices from "../Pages/AllServices";
import Blog from "../Pages/Blog";
import Service from "../Pages/Service";
import MyReviews from "../PrivatePages/MyReviews";
import PrivateRoutes from "./PrivateRoutes";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoutes>
            <MyReviews></MyReviews>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addservices",
        element: (
          <PrivateRoutes>
            <AddServices></AddServices>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default Routes;
