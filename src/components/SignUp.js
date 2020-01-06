import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

import { signUp } from "../actions";

class SignUp extends Component {
  state = {
    user: {
      username: "",
      email: "",
      password: ""
    }
  };

  handleSignUpChange = event => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    });
  };

  signup = event => {
    event.preventDefault();
    this.props.signUp(this.state.user).then(() => this.props.history.push("/"));
  };

  render() {
    return (
      <div className="register-form">
        <form onSubmit={this.signup}>
          <h2>Sign Up</h2>
          Name:{" "}
          <input
            className="input"
            placeholder="Name"
            name="username"
            type="text"
            value={this.state.user.username}
            onChange={this.handleSignUpChange}
          />
          Email:{" "}
          <input
            className="input"
            placeholder="Email"
            name="email"
            type="text"
            value={this.state.user.email}
            onChange={this.handleSignUpChange}
          />
          Password:{" "}
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.user.password}
            onChange={this.handleSignUpChange}
          />
          <button>
            {this.props.signingUp ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ signingUp, error }) => ({
  signingUp,
  error
});

export default connect(
  mapStateToProps,
  { signUp }
)(SignUp);
