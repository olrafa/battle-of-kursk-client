import React from 'react'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions/auth'

class LoginFormContainer extends React.Component {
  state = {
    userName: '',
    password: ''
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  goToRegister = () => {
    return <button>
      <Link
        to={`/register`}>Register
      </Link>
    </button>
  }

  render() {
    return (
      <div>
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state} />
        {this.goToRegister()}
      </div>
    )
  }
}

export default connect(null, { login })(LoginFormContainer)