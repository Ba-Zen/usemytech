import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editItem, deleteItem } from '../actions';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

class ItemCard extends Component {
  state = {
    items: {
      owner: this.props.selectedItem.owner,
      title: this.props.selectedItem.title,
      description: this.props.selectedItem.description,
      type: this.props.selectedItem.type,
      price: this.props.selectedItem.price,
      availability: this.props.selectedItem.availability,
      id: this.props.selectedItem.id
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

  editItem = event => {
    event.preventDefault();
    const item = this.state.items;
    console.log(item);
    this.props.editItem(item).then(() => {
      this.props.history.push('/protected');
    });
  };

  deleteItem = id => {
    this.setState({ deletingItemId: id });
    this.props.deleteItem(id);
    this.props.fetchItems();
  };

  changeRoute = item => {
    const path = item.id;
    this.props.selectItem(item);
    this.props.history.push(`item/edit-form/${path}`);
  };

  render() {
    return (
      <div>
        {this.props.selectedItem && (
          <form className='edit-form' onSubmit={this.addItem}>
            Title:{' '}
            <input
              type='text'
              name='title'
              value={this.state.items.title}
              onChange={this.handleItemChange}
            />
            Type:{' '}
            <input
              type='text'
              name='type'
              value={this.state.items.type}
              onChange={this.handleItemChange}
            />
            Price:{' '}
            <input
              type='text'
              name='price'
              value={this.state.items.price}
              onChange={this.handleItemChange}
            />
            Description:{' '}
            <input
              type='text'
              name='description'
              value={this.state.items.description}
              onChange={this.handleItemChange}
            />
            Availability:{' '}
            <input
              type='boolean'
              name='availability'
              value={this.state.items.availability}
              onChange={this.handleItemChange}
            />
            Owner:{' '}
            <input
              type='integer'
              name='owner'
              value={this.state.items.owner}
              onChange={this.handleItemChange}
            />
            <button className='add-btn' onClick={this.editItem}>
              {this.props.editingItem ? (
                <Loader
                  type='ThreeDots'
                  color='#1f2a38'
                  height='12'
                  width='26'
                />
              ) : (
                'Update Item'
              )}
            </button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  editingItem: state.editingItem,
  error: state.error,
  selectedItem: { ...state.selectedItem },
  selecting: state.selecting
});

export default connect(mapStateToProps, { deleteItem, editItem })(
  withRouter(ItemCard)
);
