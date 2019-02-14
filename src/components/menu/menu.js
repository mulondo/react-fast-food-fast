/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMenu } from '../../actions/menuAction';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const API_HOST_URL = process.env.API_URL;

export class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      console.log(this.props)
    const postItem = (
      <section  id="dashboard-page" className="flex-grow-1">
       <div class="topnav">
            <h2>FAST FOOD FAST</h2>
            <h4 className="logout">Logout</h4> 
        </div>
        <section className="mt-5 mb-2">
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto">
                <div className="card mb-3">
                  <div className="card-body">
                    
                    <h5 className="card-title">Food:&nbsp;  </h5>
                    <h5 className="card-text">Price:&nbsp;  /=</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
    return (
      <div>
        {postItem}
        <div className="container d-flex flex-row justify-content-end mb-3">
        </div>
      </div>
    );
  }
}



export default(Menu);
