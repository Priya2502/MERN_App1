import React, { Component } from "react";
import AppNavbar from "./AppNavbar";
import ItemModal from "./ItemModal";
import ShoppingList from "./ShoppingList";
import Card from "./Card";
import { Container } from "reactstrap";
import { loadUser } from "../actions/authActions";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <AppNavbar />
        <Container>
          <ItemModal />
          {/* <ShoppingList /> */}
          <Card />
        </Container>
      </div>
    );
  }
}

export default HomePage;
