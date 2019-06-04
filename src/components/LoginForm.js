import React from 'react'
import tank from '../images/tank2.png'
import './LoginForm.css'

export default function LoginForm(props) {
  return (
    <main>
      <div className="image">
        <img src={tank} alt="tank"/>
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={props.onSubmit}>
          <label>
          Username: &nbsp;
          <input 
            type="text"
            name="userName" 
            value={props.values.user_name}
            onChange={props.onChange} />
          </label>
          <br/>
          <label>
          Password: &nbsp;
          <input 
            type="password" 
            name="password" 
            value={props.values.password} 
            onChange={props.onChange} />
          </label>          
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  )
}