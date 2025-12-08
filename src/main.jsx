import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact-us/Contact-us.jsx";

Contact

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {path: "/Contact-us", element: <Contact /> }
      
    ],
  },
]);

// method 2
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <route path="/" element={<App />}>
//       <route path="" element={<Home/>} />
//       <route path="" element={<About/>} />
//       <route path="" element={<Contact-us/>} />
//     </route>
//   )
// )

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
