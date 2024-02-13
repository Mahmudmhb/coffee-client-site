import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Coffees from "./Components/Coffees.jsx";
import CoffeeDetails from "./Components/CoffeeDetails.jsx";
import CoffeeShop from "./Components/CoffeeShop.jsx";
import CoffeesUpdate from "./Components/CoffeesUpdate.jsx";
import SignUp from "./Login/SignUp.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Login from "./Login/Login.jsx";
import Users from "./Components/Users.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "coffees",
        element: <Coffees></Coffees>,
      },
      {
        path: "/coffeedetails/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "/coffeeshop",
        element: <CoffeeShop></CoffeeShop>,
        loader: () => fetch("http://localhost:5000/coffees"),
      },
      {
        path: "/coffeeupdate/:id",
        element: <CoffeesUpdate></CoffeesUpdate>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "users",
        element: <Users></Users>,
        loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
