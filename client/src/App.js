import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import store from "./store";
import { loadUser } from "./actions/authActions";

import { BrowserRouter, Route, HashRouter } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import HomePage from "./components/HomePage";
import RegisterComponent from "./components/auth/Register";
import LoginComponent from "./components/auth/Login";

import { Provider } from "react-redux";

const history = createBrowserHistory();

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter history={history}>
            <div>
              <Route exact path="/" component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <Route path="/register" component={RegisterComponent} />
              <Route path="/shopping" component={HomePage} />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
