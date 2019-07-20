import React, { Component } from 'react'
import { handleLogin } from '../../actions/user'
import { connect } from 'react-redux'

class Login extends Component {
  state = {
    loginEmail: '',
    loginPassword: '',
  }

  handleLoginFormSubmit = (e) => {
    e.preventDefault()

    const { loginEmail, loginPassword } = this.state

    this.props.handleLogin(loginEmail, loginPassword)
  }

  handleChange = (e) => {
    const stateItem = e.target.id
    const value = e.target.value

    this.setState(() => ({
      [stateItem]: value
    }))
  }

  render(){
    const { user } = this.props

    return (
      <div className="Login">
        <h2>Login</h2>
        {user.loginSuccess && 
          <p>Success: {user.loginSuccess}</p>
        }
        {user.loginError && 
          <p>Error: {user.loginError}</p>
        }
        <form onSubmit={this.handleLoginFormSubmit}>
          <p>
            <label htmlFor="loginEmail">Email</label>
            <input type="email" name="loginEmail" id="loginEmail" onChange={this.handleChange} value={this.state.loginEmail} autocomplete="email" />
          </p>
          <p>
            <label htmlFor="loginPassword">Password</label>
            <input type="password" name="loginPassword" id="loginPassword"  onChange={this.handleChange} value={this.state.loginPassword} autocomplete="password" />
          </p>
          <p>
            <input type="submit" value="Login" className="button" />
          </p>
        </form>
      </div>
    )
  }
}

function mapStateToProps({user}) {
  return {
      user,
  }
}

const mapDispatchToProps = {
  handleLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
