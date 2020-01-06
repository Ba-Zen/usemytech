import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

// const mapStateToProps = ({ token }) => ({
//   token
// });

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(PrivateRoute)
);
