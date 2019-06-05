import React from 'react';
import { connect } from 'react-redux';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { createUser } from '../actions/createUser';
import Register from './Register';
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory({
//   forceRefresh: true
// });

class RegisterContainer extends React.Component {
  state = {
    user_name: null,
    email: null,
    password: null,
    first_name: null,
    last_name: null,
    country: null,
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
      user_name: null,
      email: null,
      password: null,
      first_name: null,
      last_name: null,
      country: null,
    })
    alert("You have successfully created your account")
    setTimeout( () => this.props.history.push('/'), 2000)
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