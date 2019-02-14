import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Login} from '../../actions/login';

// import food from '../../images/food.jpg';

export class Userlogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    return this.setState({ [e.target.name]: e.target.value });
  }
  
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.Login(newUser, this.props.history);  
  }

  render() {
    let userInformation = (
      <div className="signupmodal">
          <form className="modal-content animate" name="sigin" onSubmit={this.onSubmit}>
              <h1>Fast-Food-Fast</h1>
              <div className="imgcontainer">    
                  {/* <img src={food} alt="User" className="food"/> */}
              </div>
              <div className="container">
                    <label forhtml="username"><b>Username</b></label>
                    <input type="text"
                      placeholder="Enter Username" 
                      value={this.state.username} 
                      onChange={this.onChange} 
                      name="username" 
                      required/>

                    <label forhtml="password"><b>Password</b></label>
                    <input 
                      type="password" 
                      id="pwd"
                      value={this.state.password}
                      onChange={this.onChange}
                      placeholder="***************"
                      name="password" 
                      required/>
                      <input type="submit" className="signupbtn" value="Login"/>
                      <Link to="/signup">
                      <h4>Sign up</h4>
                      </Link>
              </div>
        </form>
    </div>
      
    );
    return <div className="flex-grow-1">{userInformation}</div>;
  }
}


export default connect(null, {Login})(Userlogin);