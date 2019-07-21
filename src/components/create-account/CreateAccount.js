import React, { Component } from 'react'
import { handleCreateUser } from '../../actions/user'
import Loading from '../loading/Loading'
import { connect } from 'react-redux'

class CreateAccount extends Component {
  state = {
    createAccountName: '',
    createAccountEmail: '',
    createAccountPassword: '',
    loading: false,
  }

  handleCreateAccountFormSubmit = (e) => {
    e.preventDefault()
    this.setState({ loading: true })
    this.props.handleCreateUser(this.state).then(something => {
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

  render() {
    const { user } = this.props
    const { loading } = this.state

    return (
      <div className="CreateAccount">
        <h2>Create Account</h2>
        {user.createAccountSuccess && 
          <p className="message success">Success: {user.createAccountSuccess}</p>
        }
        {user.createAccountError && 
          <p className="message error">Error: {user.createAccountError}</p>
        }
        {!user.createAccountSuccess && 
          <form onSubmit={this.handleCreateAccountFormSubmit}>
            <p>
              <label htmlFor="createAccountName">Name</label>
              <input type="text" name="createAccountName" id="createAccountName" onChange={this.handleChange} value={this.state.createAccountName} autoComplete="name" />
            </p>
            <p>
              <label htmlFor="createAccountEmail">Email</label>
              <input type="email" name="createAccountEmail" id="createAccountEmail" onChange={this.handleChange} value={this.state.createAccountEmail} autoComplete="email" />
            </p>
            <p>
              <label htmlFor="createAccountPassword">Password</label>
              <input type="password" name="createAccountPassword" id="createAccountPassword" onChange={this.handleChange} value={this.state.createAccountPassword} autoComplete="new-password" />
            </p>
            <p>
              <input type="submit" value="Create Account" className="button" />
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
  handleCreateUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
