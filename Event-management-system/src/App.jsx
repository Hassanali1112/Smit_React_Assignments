import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./pages/Home.jsx"
import { Toaster } from "react-hot-toast";
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { AuthContextProvider } from './context/AuthContextProvider.jsx'
import { useState } from 'react';
import DashboardLayout from './DashboardLayout.jsx';
import DashboardHome from './pages/dashboard/DashboardHome.jsx';
import CreateEvent from './pages/dashboard/CreateEvent.jsx';
import AllEvents from './pages/dashboard/AllEvents.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <SignIn />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <DashboardHome /> },
      { path: "create-event", element: <CreateEvent /> },
      { path: "all-events", element: <AllEvents /> },
    ],
  },
]);

function App() {
  const [user, setUser] = useState({})
  

  return (
    <>
      <AuthContextProvider value={{ user, setUser }}>
        <Toaster position="top-right" />
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}

export default App
