import React from 'react'
import LoginForm from './LoginForm'
import {connect} from 'react-redux'
import {login} from '../actions/auth'
// import bgsound from '../sounds/bgsound.mp3'
// import Sound from 'react-sound'

class LoginFormContainer extends React.Component {
  state = { 
    username: '',
    password: '' 
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.user_name, this.state.password)
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
      values={this.state} />
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