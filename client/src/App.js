import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import store from "./store";
import { loadUser } from "./actions/authActions";

import { BrowserRouter, Route, HashRouter } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Shop from "./components/Providers/Shop";
import Login from "./components/Providers/Login";
import Register from "./components/Providers/Register";
import CardProvider from "./components/Providers/Card";

const history = createBrowserHistory();

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter history={history}>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/shopping" component={Shop} />
            <Route path="/card" component={CardProvider} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
