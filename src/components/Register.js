import React from 'react'
import { connect } from 'react-redux';
import { CountryDropdown } from 'react-country-region-selector';
import { createUser } from '../actions/createUser';
import tank from '../images/tank2.png'

import './Register.css'

class Register extends React.Component {
  render() {
    console.log('Register props test', this.props)
    return (
      <div className='register'>
        <img src={tank} alt="tank"/>
        <h2>JOIN OUR TROPES</h2>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Username: &nbsp;&nbsp;
          <input
            type="text"
            name="user_name"
            value={this.props.values.user_name  || ''}
            onChange={this.props.onChange} />
          </label>
          <br />
          <label>
            E-mail: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="email"
            value={this.props.values.email  || ''}
            onChange={this.props.onChange} />
          </label>
          <br />
          <label>
            Password: &nbsp;&nbsp;
          <input
            type="password"
            name="password"
            value={this.props.values.password  || ''}
            onChange={this.props.onChange} />
          </label>
          <br />
          <label>
            First name: &nbsp;
          <input
            type="text"
            name="first_name"
            value={this.props.values.first_name  || ''}
            onChange={this.props.onChange} />
          </label>
          <br />
          <label>
            Last name: &nbsp;
          <input
            type="text"
            name="last_name"
            value={this.props.values.last_name  || ''}
            onChange={this.props.onChange} />
          </label>
          <br />
          <CountryDropdown className='dropdown'
            name="country"
            value={this.props.values.country  || ''}
            onChange={(val) => this.props.selectCountry(val)} />
          <br />
          <button type="submit">submit</button>
        </form>

      </div>
    )
  }
}

export default connect(null, {createUser})(Register)