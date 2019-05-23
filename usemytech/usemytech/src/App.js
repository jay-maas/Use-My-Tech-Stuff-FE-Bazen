import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";

import ItemsList from "./components/ItemsList";
import PrivateRoute from "./components/PrivateRoute";
import AddItemForm from "./components/AddItemForm";
import EditForm from './components/EditForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <p>Use My Tech</p>
            <div className="nav-bar">
              <Link to="/protected">Home</Link>
              <Link to='/item-form'>Add Item</Link>
            
              
            </div>
          </header>

          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/protected" component={ItemsList} />
          <PrivateRoute exact path="/item-form" component={AddItemForm} />
          <PrivateRoute  exact path="/item/edit-form/:id" component={EditForm} />
          <Route exact path="/signup" component={SignUp} />
          
        </div>
      </Router>
    );
  }
}

export default App;
