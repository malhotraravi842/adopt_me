// mostly code from reactjs.org/docs/error-boundaries.html

import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("ErrorBounday caught an error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This listing has an Error! <Link to="/">Click Here</Link> to go back
          to the Homepage or wait five seconds.
        </h2>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
