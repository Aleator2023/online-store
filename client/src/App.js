// App.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routers";

const App = () => {
  const isAuth = false; // замените на проверку авторизации

  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}

      {/* редирект по умолчанию */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;