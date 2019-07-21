import React, { Component } from 'react'
import { handleLogin } from '../../actions/user'
import Loading from '../loading/Loading'
import { connect } from 'react-redux'

class Login extends Component {
  state = {
    loginEmail: '',
    loginPassword: '',
    loading: false,
  }

  handleLoginFormSubmit = (e) => {
    e.preventDefault()

    const { loginEmail, loginPassword } = this.state

    this.setState({ loading: true })
    this.props.handleLogin(loginEmail, loginPassword).then(something => {
      this.setState({ loading: false })
    })
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
    const { loading } = this.state

    return (
      <div className="Login">
        <h2>Login</h2>
        {user.loginSuccess && 
          <p className="message success">Success: {user.loginSuccess}</p>
        }
        {user.loginError && 
          <p className="message error">Error: {user.loginError}</p>
        }
        {!user.loginSuccess &&
          <form onSubmit={this.handleLoginFormSubmit}>
            <p>
              <label htmlFor="loginEmail">Email</label>
              <input type="email" name="loginEmail" id="loginEmail" onChange={this.handleChange} value={this.state.loginEmail} autoComplete="email" />
            </p>
            <p>
              <label htmlFor="loginPassword">Password</label>
              <input type="password" name="loginPassword" id="loginPassword"  onChange={this.handleChange} value={this.state.loginPassword} autoComplete="password" />
            </p>
            <p>
              <input type="submit" value="Login" className="button" />
            </p>
          </form>
        }
        {loading && 
          <Loading />
        }
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
