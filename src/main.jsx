import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Coffees from "./Components/Coffees.jsx";
import CoffeeDetails from "./Components/CoffeeDetails.jsx";
import CoffeeShop from "./Components/CoffeeShop.jsx";
import CoffeesUpdate from "./Components/CoffeesUpdate.jsx";
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
