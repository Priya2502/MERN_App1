import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button, Container } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getItems, deleteItem } from "../actions/itemActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

class ShoppingList extends Component {
  state = {};
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };
  componentDidMount() {
    this.props.getItems();
  }
  onDelete = id => {
    this.props.deleteItem(id);
  };
  render() {
    const { items } = this.props.item;
    if (this.props.isAuthenticated == false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    color="danger m-2"
                    size="sm"
                    onClick={
                      //   this.setState({
                      //     items: [...items.filter(item => item.id !== id)]
                      //   })
                      this.onDelete.bind(this, _id)
                    }
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
