import React from 'react'
import LoginForm from './LoginForm'
import './LoginContainer.css'
import {connect} from 'react-redux'
import {login} from '../actions/auth'
import { Link } from 'react-router-dom'
// import bgsound from '../sounds/bgsound.mp3'
// import Sound from 'react-sound'

class LoginFormContainer extends React.Component {
  state = { 
    userName: '',
    password: '' 
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.user_name, this.state.password)
    this.props.history.push('/romans')
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // goToRegister = () => {
  //   return <button>
  //     <Link
  //       to={`/register`}>Register
  //     </Link>
  //   </button>
  // }

  render() {
    return (
      <div>
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state} />
          <button className="registerButton" onClick={ () => this.props.history.push('/register')}>Register</button>
        {/* {this.goToRegister()} */}
      </div>

    )
  }
}

export default connect(null, {login})(LoginFormContainer)

/* <Sound
url={bgsound}
playStatus={Sound.status.PLAYING}
playFromPosition={100 /* in milliseconds */
// onLoading={this.handleSongLoading}
// onPlaying={this.handleSongPlaying}
// loop={true}
// /> */}

