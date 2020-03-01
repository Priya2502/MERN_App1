import React, { Component } from "react";
import "../../App.css";
import Card from "../Card";
import store from "../../store";
import { Provider } from "react-redux";
import { loadUser } from "../../actions/authActions";

class CardProvider extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <div className="CardProvider">
        <Provider store={store}>
          <Card />
        </Provider>
      </div>
    );
  }
}

export default CardProvider;
