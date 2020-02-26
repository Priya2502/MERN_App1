import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Input } from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class ItemModal extends Component {
  state = {
    modal: false,
    name: ""
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = () => {
    const newItem = {
      name: this.state.name
    };
    this.props.addItem(newItem);
    this.toggle();
  };
  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            color="dark"
            style={{ marginBottom: "2rem" }}
            onClick={this.toggle}
          >
            Add Item
          </Button>
        ) : (
          <h4 className="mb-3 ml-3">Please login to manage items</h4>
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
          <ModalBody>
            <Input
              type="text"
              name="name"
              id="item"
              placeholder="Enter the item name"
              onChange={this.onChange}
            />
            <Button
              color="dark"
              style={{ marginTop: "2rem" }}
              onClick={this.onSubmit.bind(this)}
              block
            >
              Add Item
            </Button>
          </ModalBody>
        </Modal>
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
  { addItem }
)(ItemModal);
