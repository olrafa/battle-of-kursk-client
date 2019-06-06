import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/createUser';
import Register from './Register';

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
    setTimeout( () => this.props.history.push('/login'), 2000)
  }

  selectCountry = (val) => {
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