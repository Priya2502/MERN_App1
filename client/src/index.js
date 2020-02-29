import React from "react";
import ReactDOM from "react-dom";
// import { Route } from "react-router";
// import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter, Route, HashRouter } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import "./index.css";
import App from "./App";
import Shop from "./components/Providers/Shop";
import LoginComponent from "./components/auth/Login";
import ShoppingList from "./components/ShoppingList";
import * as serviceWorker from "./serviceWorker";
const history = createBrowserHistory();

ReactDOM.render(<App />, document.getElementById("root")); //<App />

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
