import React from 'react'
import { connect } from 'react-redux';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { createUser } from '../actions/createUser';

class Register extends React.Component {
  render() {
    console.log('Register props test', this.props)
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Username:
          <input
            type="text"
            name="user_name"
            value={this.props.values.user_name}
            onChange={this.props.onChange} />
          </label>
          <br />
          <label>
            E-mail:
          <input
            type="text"
            name="email"
            value={this.props.values.email}
            onChange={this.props.onChange} />
          </label>
          <br />
          <label>
            Password:
          <input
            type="password"
            name="password"
            value={this.props.values.password}
            onChange={this.props.onChange} />
          </label>
          <br />
          <label>
            First name:
          <input
            type="text"
            name="first_name"
            value={this.props.values.first_name}
            onChange={this.props.onChange} />
          </label>
          <br />
          <label>
            Last name:
          <input
            type="text"
            name="last_name"
            value={this.props.values.last_name}
            onChange={this.props.onChange} />
          </label>
          <br />
          <CountryDropdown
            name="country"
            value={this.props.values.country}
            onChange={(val) => this.props.selectCountry(val)} />
          <br />
          <button type="submit">Register</button>
        </form>

      </div>
    )
  }
}

export default connect(null, {createUser})(Register)