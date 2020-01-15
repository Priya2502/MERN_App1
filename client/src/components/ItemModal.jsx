import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Input } from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
  state = {
    modal: false,
    name: ""
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
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={
            this.toggle
            //     () => {
            //   const name = prompt("Enter The Item");
            //   if (name) {
            //     this.setState({
            //       items: [...this.state.items, { id: uuid(), name: name }]
            //     });
            //   }
            // }
          }
        >
          Add Item
        </Button>
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
  item: state.item
});
export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
