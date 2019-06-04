import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import {connect} from 'react-redux'

class Login extends Component {


  render() {

    return (
      <main className="login">
        <div className="loginForm">
          <form>
            <label>
              Username
          <input
                type="text"
                onChange={this.props.onChange}
                value={this.props.values.name}
                name="name"
              />
            </label>

            <label>
              Password
          <input
                type="text"
                onChange={this.props.onChange}
                value={this.props.values.name}
                name="name"
              />
            </label>
          </form>
        </div>
      </main>
    )
  }
}




export default connect(null, {createEvent})(Login)