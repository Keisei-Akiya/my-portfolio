import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
