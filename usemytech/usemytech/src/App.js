import React, { Component } from "react";
import "./App.css";
import { withRouter, Link, Route } from 'react-router-dom'
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import ItemsList from "./components/ItemsList";
import PrivateRoute from "./components/PrivateRoute";
import AddItemForm from "./components/AddItemForm";
import ItemCard from './components/ItemCard';

class App extends Component {
  clickHandler = () => {
    localStorage.clear()
    this.props.history.push('/') 
  }
  render() {
    return (
        <div className="app">
          <header>
            <p>Use My Tech</p>
            <div className="nav-bar">
              <Link to="/protected">Home</Link>
              <Link to='/item-form'>Add Item</Link>
              <button onClick={this.clickHandler}>Log Out</button>
            
              
            </div>
          </header>

          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/protected" component={ItemsList} />
          <PrivateRoute exact path="/item-form" component={AddItemForm} />
          <PrivateRoute  exact path="/item/edit-form/:id" component={ItemCard} />
          <Route exact path="/signup" component={SignUp} />
          
        </div>
    );
  }
}

export default withRouter(App);
