import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import './App.scss';
import './css/signup.css';
import Register from './components/auth/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  render() {
    return (
      <Router>
            <div className="App d-flex flex-column">
            <Route exact path="/signup" component={Register} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    isRequesting: state.isRequesting,
  };
}

export default connect(
  mapStateToProps,
  null
)(hot(module)(App));
