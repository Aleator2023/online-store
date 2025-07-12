import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routers";
import { Context } from "../index";

const AppRouter = () => {
  const { user } = React.useContext(Context);

  console.log(user);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}

      <Route path="*" element={<Navigate to="/shop" replace />} />
    </Routes>
  );
};

export default AppRouter;