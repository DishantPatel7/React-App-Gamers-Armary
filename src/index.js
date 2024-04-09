import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Head from "./Components/Header/header";
import Games from "./Components/Game/games";
import Gamepage from "./Pages/gamesPage";
import Loginpage from "./Pages/loginpage";
import Gamelandpage from "./Pages/gameLandingPage";
import Browseby from "./Components/Product/Browseby";
import Test from "./Components/Product/Test";

const router = createBrowserRouter([
  {
    path: "/React-App-Gamers-Armary",
    element: <App />,
  },
  {
    path: "/games",
    element: <Gamepage />,
  },
  {
    path: "/Browseby",
    element: <Browseby />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/gamelanding",
    element: <Gamelandpage />,
  },
  {
    path: "/login2",
    element: <Loginpage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
