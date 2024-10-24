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
import Gallery from "./pages/Gallery.jsx";
import MaintenancePage from "./Components/Maintenance.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // Route for Information page
        element: <Home />,
      },
      {
        path: "/about", // Route for Information page
        element: <About />,
      },
      {
        path: "/staff", // Route for Information page
        element: <Staff />,
      },
      {
        path: "/academic", // Route for Information page
        element: <Academic />,
      },
      {
        path: "/activities", // Route for Information page
        element: <Activities />,
      },
      {
        path: "/contact", // Route for Information page
        element: <Contact />,
      },
      {
        path: "/gallery", // Route for Information page
        element: <Gallery />,
      },
      
      {
        path: "/information", // Route for Information page
        // element: <Information />,
        element: <MaintenancePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
