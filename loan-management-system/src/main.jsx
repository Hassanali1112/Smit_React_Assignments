import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Layout from "./layout/Layout.jsx";

// const router = createBrowserRouter([
//      { 
//       Component : App,
//       children : [
//         {
//           path : '/',
//           Component : Layout,
//           children : [
//             {
//               path : '/',
//               Component : Dashboard
//             },
//             {
//               path : 'contact',
//               Component : Contact
//             },
//             {
//               path : 'about',
//               Component : About
//             }
//           ]
//         }
//       ]
//     }
//     ],
  
// )

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>
);
