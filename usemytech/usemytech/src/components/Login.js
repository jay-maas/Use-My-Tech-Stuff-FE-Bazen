import React, { Component } from "react";
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { login } from '../actions';



class Login extends Component {

  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleLoginChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    })
  }

  login = event => {
    event.preventDefault();
    this.props.login(this.state.credentials)
    .then(() => 
      this.props.history.push('/protected'));
  };

  changeRoute = () => {
    let path = "/signup"
    this.props.history.push(path)
  }

  render() {
    console.log(this.props.error)
    return (
      <div className='login-form'>
        
        <form onSubmit={this.login}>
        <h2>Login</h2>
        <label for='username'>Account</label>
          <input 
          className='input'
          type='text'
          name='username'
          placeholder='Username'
          onChange={this.handleLoginChange}
          value={this.state.credentials.username}
          />
          <label for='password'>Password</label>
          <input 
          className='input'
          type='password'
          name='password'
          placeholder='Password'
          onChange={this.handleLoginChange}
          value={this.state.credentials.password}
          />
          <button>
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              'Login'
            )}
            </button>
        </form>
        {this.props.error && <p>{this.props.error}</p>}
        <button onClick={this.changeRoute}>Register</button>
      </div>
    );
  }
}


const mapStateToProps = ({ error, loggingIn }) => ({
  error,
  loggingIn
})

export default connect(mapStateToProps, { login })(withRouter(Login))