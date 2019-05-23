import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchItems, deleteItem, fetchId, selectItem } from "../actions";
import EditForm from './EditForm';

import { withRouter, Redirect } from 'react-router-dom';



class Items extends Component {
  state = {
    deletingItem: null,
    editingItemId: null,
    flag: false
  }
  componentDidMount() {
    this.props.fetchItems();
    
  }

  deleteItem = id => {
    this.setState({ deletingItemId: id })
    this.props.deleteItem(id);
    this.props.fetchItems();
  }

  changeRoute = item => {
    const path = item.id
    this.props.selectItem(item)
    this.props.history.push(`item/edit-form/${path}`)
  }

  render() {
   
    return (
      <div className="item-list">
        {this.props.message && <p>{this.props.message}</p>}
        {!this.props.items ? <div>Loading...</div> : this.props.items.map(item => {
          if ( this.state.editingItemId === item.id) {
            return <EditForm editingId={this.state.editingItemId} item={item} />
          } 
          return (
            <div key={item.id} className="item-card">
            <img src={item.imgURL} />
            <div className="item-info">
              <i className="far fa-times-circle" onClick={() => this.deleteItem(item.id)} /> 
              <i class="fas fa-edit" onClick={() => this.changeRoute(item) }/>
              <h2>{item.title}</h2>
              <p>{item.type}</p>
              <p>{item.description}</p>
            </div>
          </div>
         )
          
        
        }
        )}
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

export default connect(
  mapStateToProps,
  { fetchItems, deleteItem, fetchId, selectItem }
)(Items);

// rn(
//     <div className='item-list'>

//         {this.props.error && <p>{this.props.error}</p>}
//     {this.props.items.map(item => {
//         return <Item key={item.id} item={item} />
//     })}
//         </div>
