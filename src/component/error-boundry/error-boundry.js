import React, { Component } from 'react';
import './error-boundry.css'
import ErrorIndicator from "../error-indicator";

class ErrorBoundry extends Component {

  state = {
    hasError: false
  };


  componentDidCatch(error, errorInfo) {
    console.error(`Atention!!! ${error}, ${errorInfo}`);

    this.setState({ hasError: true })
  }

  render () {
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator/>
    }

    return (
      this.props.children
    )
 }
}
export default ErrorBoundry;