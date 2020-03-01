import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./templateCSS/card.css";
import card from "./templateCSS/card.jpg";
import { Button } from "reactstrap";
import { getItems, deleteItem } from "../actions/itemActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = {
      backgroundImage: "url(" + image + ")"
    };
    return (
      <div>
        <header style={style} id={image} className="card-header1">
          <h4 className="card-header1--title">News</h4>
          <Button color="warning m-2" size="sm">
            &times;
          </Button>
        </header>
      </div>
    );
  }
}

// class Button extends React.Component {
//   render() {
//     return (
//       <button className="button button-primary">
//         <i className="fa fa-chevron-right"></i> Find out more
//       </button>
//     );
//   }
// }

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body1">
        <p className="date">March 20 2015</p>

        <h2>{this.props.title}</h2>

        <p className="body-content">{this.props.text}</p>

        <Button />
      </div>
    );
  }
}

class Card extends React.Component {
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
    // const { image } = this.props;
    var style = {
      backgroundImage: "url(" + card + ")"
    };
    if (this.props.isAuthenticated == false) {
      return <Redirect to="/" />;
    }
    return (
      <div className="cardFlex">
        {items.map(({ _id, name }) => (
          <article key={_id} className="card1">
            <div>
              <header style={style} id={card} className="card-header1">
                <Button
                  color="warning"
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
                <h4 className="card-header1--title">{name}</h4>
              </header>
            </div>
            {/* <CardHeader image={card} /> */}
            {/* <CardBody
          title={"What happened in Thialand?"}
          text={
            "Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence"
          }
        /> */}
          </article>
        ))}
      </div>
      //   <html className="h1">
      // <body className="b1">

      // </body>
      //   </html>
    );
  }
}

// ReactDOM.render(<Card />, document.getElementById("app"));
// export default Card;
const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(Card);
