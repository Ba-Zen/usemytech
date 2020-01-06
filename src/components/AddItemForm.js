import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";
import Loader from "react-loader-spinner";

class AddItemForm extends Component {
  state = {
    items: {
      owner: 1,
      title: "",
      description: "",
      type: "",
      price: "",
      availability: true,
      imgURL: ""
    }
  };

  handleItemChange = event => {
    this.setState({
      items: {
        ...this.state.items,
        [event.target.name]: event.target.value
      }
    });
  };

  addItem = event => {
    event.preventDefault();
    this.props.addItem(this.state.items).then(() => {
      this.props.history.push("/protected");
    });
    this.setState({
      items: {
        owner: '',
        title: "",
        description: "",
        type: "",
        price: "",
        availability: '',
        imgURL: "",
      }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          Title:{" "}
          <input
            type="text"
            name="title"
            value={this.state.items.title}
            onChange={this.handleItemChange}
          />
          Type:{" "}
          <input
            type="text"
            name="type"
            value={this.state.items.type}
            onChange={this.handleItemChange}
          />
          Price:{" "}
          <input
            type="text"
            name="price"
            value={this.state.items.price}
            onChange={this.handleItemChange}
          />
          Description:{" "}
          <input
            type="text"
            name="description"
            value={this.state.items.description}
            onChange={this.handleItemChange}
          />
          Availability:{" "}
          <input
            type="boolean"
            name="availability"
            value={this.state.items.availability}
            onChange={this.handleItemChange}
          />
          Owner:{" "}
          <input
            type="integer"
            name="owner"
            value={this.state.items.owner}
            onChange={this.handleItemChange}
          />
          Image:{" "}
          <input
            type="text"
            name="imgURL"
            value={this.state.items.imgURL}
            onChange={this.handleItemChange}
          />
          <button className='add-btn'>
            {this.props.addingItem ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Add Item"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addingItem: state.addingItem,
  error: state.error
});

export default connect(
  mapStateToProps,
  { addItem }
)(AddItemForm);
