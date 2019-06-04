import React from 'react'

export default function LoginForm(props) {
  return (
    <div>
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
  )
}