import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {signUp} from '../../actions/signUpAction';

// import food from '../../images/food.jpg';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      username:'',
      telephone:'',
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
      email: this.state.email,
      password: this.state.password,
      telephone:this.state.telephone
    };
    this.props.signUp(newUser);
    
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

                    <label forhtml="Email"><b>Email</b></label>
                    <input 
                      type="email" 
                      placeholder="example@gmail.com" 
                      name="email" 
                      value={this.state.email}
                      onChange={this.onChange} 
                      required/>

                    <label forhtml="telephone"><b>Phone number</b></label>
                    <input 
                      type="text" 
                      id="telephone" 
                      placeholder="+256-703-492035" 
                      pattern="\+[0-9]{1,3}-[0-9]{3}-[0-9]{6}"
                      value={this.state.telephone}
                      onChange={this.onChange} 
                      name="telephone" 
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

                      <input type="submit" className="signupbtn" value="Register"/>
              </div>
        </form>
    </div>
      
    );
    return <div className="flex-grow-1">{userInformation}</div>;
  }
}

// Register.prototype={
//   signUp:PropTypes.func.isRequired
// }

export default connect(null, {signUp})(Register);