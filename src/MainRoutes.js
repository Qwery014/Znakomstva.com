import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";


const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/register",
      element: <Register />,
      id: 2,
    },
    {
      link: "/login",
      element: <Login />,
      id: 3,
    },
    {
      link: "/profile",
      element: <Profile />,
      id: 4,
    }
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;