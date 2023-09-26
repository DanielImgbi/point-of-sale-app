import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
// import Signup from "./components/Signup";
import LoginForm from "./components/LoginForm";
import Cart from "./components/platformComponents/Cart";
import Records from "./components/platformComponents/Records";
import Platform from "./components/platformComponents/Platform";
import Settings from "./components/platformComponents/Settings";
import Menu from "./components/menuComponents/Menu";
import Home from "./components/homeComponents/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LoginForm /> },
      {
        path: "platform",
        element: <Platform />,
        children: [
          { path: "home", element: <Home /> },
          { path: "menu", element: <Menu /> },
          { path: "cart", element: <Cart /> },
          { path: "records", element: <Records /> },
          { path: "settings", element: <Settings /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
