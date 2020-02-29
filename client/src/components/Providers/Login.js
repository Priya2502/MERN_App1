import React, { Component } from "react";
import "../../App.css";
import LoginComponent from "../auth/Login";
import store from "../../store";
import { Provider } from "react-redux";
import { loadUser } from "../../actions/authActions";

class Login extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <div className="Shop">
        <Provider store={store}>
          <LoginComponent />
        </Provider>
      </div>
    );
  }
}

export default Login;
