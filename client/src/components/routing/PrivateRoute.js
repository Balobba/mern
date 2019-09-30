import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// PrivateRoute checks if you are authenticated and not loading
// Passing in ...rest means passing in custom props. ...rest will grab the rest of the arguments to a single array called rest
const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && !loading ? (
        <Redirect to="/login" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
