import React from 'react';
import { connect } from 'react-redux';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { createUser } from '../actions/createUser';
import Register from './Register';

class RegisterContainer extends React.Component {
  state = {
    userName: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    country: '',
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    console.log("OnSubmit test")
    event.preventDefault()
    this.props.createUser(this.state)
    this.setState({
      userName: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      country: '',
    })
  }

  selectCountry = (val) => {
    console.log('testing value for country:', val)
    this.setState(
    {
      country: val
    });
  }

  render() {
    return (
      <Register
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        selectCountry={this.selectCountry}
      />)
  }
}

export default connect(null, { createUser })(RegisterContainer)