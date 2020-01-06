import React, { Component } from 'react';
import './App.css';
import { withRouter, NavLink, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';

import ItemsList from './components/ItemsList';
import PrivateRoute from './components/PrivateRoute';
import AddItemForm from './components/AddItemForm';
import ItemCard from './components/ItemCard';

class App extends Component {
  clickHandler = () => {
    localStorage.clear();
    this.props.history.push('/');
  };
  render() {
    return (
      <div className='app'>
        <header>
          <img
            src={require('../src/images/rent tech.JPG')}
            alt='logo'
            className='logo'
          />
          <div className='nav-bar'>
            <NavLink className='Nav_link' to='/protected'>
              Home
            </NavLink>
            <NavLink className='Nav_link' to='/item-form'>
              Add Item
            </NavLink>
            <NavLink className='Nav_link' onClick={this.clickHandler} to='/'>
              Login/Logout
            </NavLink>
          </div>
        </header>

        <Route exact path='/' component={Login} />
        <PrivateRoute exact path='/protected' component={ItemsList} />
        <PrivateRoute exact path='/item-form' component={AddItemForm} />
        <PrivateRoute exact path='/item/edit-form/:id' component={ItemCard} />
        <Route exact path='/signup' component={SignUp} />
      </div>
    );
  }
}

export default withRouter(App);
