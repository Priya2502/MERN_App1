import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import LoginComponent from "./components/auth/Login";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={LoginComponent} />
    </div>
  </Router>,
  document.getElementById("root")
); //<App />

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
