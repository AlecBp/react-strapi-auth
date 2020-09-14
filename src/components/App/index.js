import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "../../components/PrivateRoute";

import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import LogoutPage from "../../pages/LogoutPage";
import SecretPage from "../../pages/SecretPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/logout" component={LogoutPage} />
          <PrivateRoute path="/secret" component={SecretPage} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
