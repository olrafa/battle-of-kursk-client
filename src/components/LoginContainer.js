import React from 'react'
import LoginForm from './LoginForm'
import './LoginContainer.css'
import {connect} from 'react-redux'
import {login} from '../actions/auth'
// import bgsound from '../sounds/bgsound.mp3'
// import Sound from 'react-sound'

class LoginFormContainer extends React.Component {
  state = { 
    userName: '',
    password: '' 
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.user_name,
    this.state.password)
    this.props.history.push('/games')
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          disabled={!this.state}
          />
          <button className="registerButton" onClick={ () => this.props.history.push('/register')}>register</button>
      </div>

    )
  }
}

export default connect(null, {login})(LoginFormContainer)



