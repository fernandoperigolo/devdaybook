import React from 'react'

function Login() {
  return (
    <div className="Login">
      <h1>Dev Day-Book</h1>
      <h2>Login</h2>
      <form>
        <p>
          <label htmlFor="loginEmail">Email</label>
          <input type="email" name="loginEmail" id="loginEmail"/>
        </p>
        <p>
          <label htmlFor="loginPassword">Password</label>
          <input type="password" name="loginPassword" id="loginPassword"/>
        </p>
        <p>
          <input type="submit" value="Login"/>
        </p>
      </form>
    </div>
  )
}

export default Login
