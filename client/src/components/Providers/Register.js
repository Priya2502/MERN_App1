import React, { Component } from "react";
import "../../App.css";
import RegisterComponent from "../auth/Register";
import store from "../../store";
import { Provider } from "react-redux";
import { loadUser } from "../../actions/authActions";

class Register extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <div className="Shop">
        <Provider store={store}>
          <RegisterComponent />
        </Provider>
      </div>
    );
  }
}

export default Register;
