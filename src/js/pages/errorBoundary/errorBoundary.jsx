import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './styles.scss';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div className={classes.root}>
          <h1>
          Oops! Something went wrong
          </h1>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  classes: PropTypes.shape().isRequired
};
