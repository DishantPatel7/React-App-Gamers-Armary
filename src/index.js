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
import Browseby from "./Components/BrowseBy/Browseby";
import Accessories from "./Components/BrowseBy/Accessories";
import ProductLanding from "./Components/Product/ProductLanding";
import Cont6 from "./Components/Home/container6";
import Bestsellers from "./Components/BrowseBy/Bestsellers";
import Consoles from "./Components/BrowseBy/Consoles";
import Controllers from "./Components/BrowseBy/Controllers";
import Onsale from "./Components/BrowseBy/Onsale";

const router = createBrowserRouter([
  {
    path: "/React-App-Gamers-Armary",
    element: <App />,
  },
  {
    path: "/",
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
    path: "/Accessories",
    element: <Accessories />,
  },
  {
    path: "/Best-Sellers",
    element: <Bestsellers />,
  },
  {
    path: "/Consoles",
    element: <Consoles />,
  },
  {
    path: "/Controllers",
    element: <Controllers />,
  },
  {
    path: "/On Sale",
    element: <Onsale />,
  },
  {
    path: "/gamelanding",
    element: <Gamelandpage />,
  },
  {
    path: "/ProductLanding",
    element: <ProductLanding />,
  },
  {
    path: "/login2",
    element: <Loginpage />,
  },
  {
    path: "/Contact Us",
    element: <Cont6 />,
  },
  {
    path: "/product/:id",
    element: <ProductLanding />,
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
