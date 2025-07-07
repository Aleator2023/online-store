import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routers";

const App = () => {
  const isAuth = false; // заменить на актуальную проверку авторизации

  return (
    <Switch>
      { isAuth && authRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}

           { publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}

      <Redirect from="/" to="/shop" />

    </Switch>
  );
};

export default App;