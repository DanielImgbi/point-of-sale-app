import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import Signup from "./components/Signup";
import LoginForm from "./components/LoginForm";
import Cart from "./components/platformComponents/Cart";
import Records from "./components/platformComponents/Records";
import Platform from "./components/platformComponents/Platform";
import Settings from "./components/platformComponents/Settings";
import Menu from "./components/platformComponents/menuComponents/Menu";
import Home from "./components/platformComponents/homeComponents/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LoginForm /> },
      { path: "signup", element: <Signup /> },
      {
        path: "platform",
        element: <Platform />,
        children: [
          { index: true, element: <Home /> },
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
