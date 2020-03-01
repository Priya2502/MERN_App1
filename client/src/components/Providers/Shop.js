import React, { Component } from "react";
import "../../App.css";
import AppNavbar from "../AppNavbar";
import ItemModal from "../ItemModal";
import ShoppingList from "../ShoppingList";
import Card from "../Card";
import { Container } from "reactstrap";
import store from "../../store";
import { Provider } from "react-redux";
import { loadUser } from "../../actions/authActions";

class Shop extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <div className="Shop">
        <Provider store={store}>
          <AppNavbar />
          <Container>
            <ItemModal />
            {/* <ShoppingList /> */}
            <Card />
          </Container>
        </Provider>
      </div>
    );
  }
}

export default Shop;
