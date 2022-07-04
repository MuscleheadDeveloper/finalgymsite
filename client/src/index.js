import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Landing from "views/Landing";
import Login from "login/views/Login";
import Success from "success/Success";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/success" component={Success} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
