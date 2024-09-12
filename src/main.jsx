import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Information from "./pages/Information.jsx";
import About from "./pages/About";
import Academic from "./pages/Academic";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import Home from "./pages/Home.jsx";
import Staff from "./pages/Staff.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // Default route, displays sections below HeroSection
        element: (
          <>
            <Home />
            <About />
            <Staff />
            <Academic />
            <Activities />
            <Contact />
            {/* <Information/> */}
          </>
        ),
      },
      // {
      //   path: "/information", // Route for Information page
      //   element: <Information />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
