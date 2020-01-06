import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchItems, deleteItem, fetchId, selectItem } from '../actions';
import EditForm from './EditForm';

class Items extends Component {
  state = {
    deletingItem: null,
    editingItemId: null,
    flag: false
  };
  componentDidMount() {
    this.props.fetchItems();
  }

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
      <div className='list-body'>
        <img
          className='banner'
          alt='camera equipment'
          src={require('../images/banner.jpg')}
        />
        <div className='item-list'>
          {this.props.message && <p>{this.props.message}</p>}
          {!this.props.items ? (
            <div>Loading...</div>
          ) : (
            this.props.items.map(item => {
              if (this.state.editingItemId === item.id) {
                return (
                  <EditForm editingId={this.state.editingItemId} item={item} />
                );
              }
              return (
                <div key={item.id} className='item-card'>
                  <img className='item-img' alt='sale item' src={item.imgURL} />
                  <div className='item-info'>
                    <h4>{item.title}</h4>
                    <p>{item.type}</p>
                    <p>{item.description}</p>
                    <div className='btn-container'>
                      <button
                        className='delete-btn'
                        onClick={() => this.deleteItem(item.id)}
                      >
                        Delete
                      </button>
                      <button
                        class='edit-btn'
                        onClick={() => this.changeRoute(item)}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetchingItems: state.fetchingItems,
  error: state.error,
  items: state.items,
  deletingItem: state.deletingItem,
  message: state.message,
  editingItemId: state.editingItemId
});

export default connect(mapStateToProps, {
  fetchItems,
  deleteItem,
  fetchId,
  selectItem
})(Items);
