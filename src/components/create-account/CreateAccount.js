import React, { Component } from 'react'
import { auth } from '../../utils/firebase'

class CreateAccount extends Component {
  state = {
    createAccountName: '',
    createAccountEmail: '',
    createAccountPassword: '',
  }

  handleCreateAccountFormSubmit = (e) => {
    e.preventDefault()

    const { createAccountEmail, createAccountPassword, createAccountName } = this.state

    auth.createUserWithEmailAndPassword(createAccountEmail, createAccountPassword).then(credential => {
      console.log('credential >>>>>>>>>', credential)
      return auth.currentUser.updateProfile({
        displayName: createAccountName,
      })
    }).then((something) => {
      console.log('something >>>>>>>>>', something)
      console.log('User created')
    }).catch(error => {
      console.error('handleCreateAccountFormSubmit:', error.message)
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
    return (
      <div className="CreateAccount">
        <h1>Dev Day-Book</h1>
        <h2>Create Account</h2>
        <form onSubmit={this.handleCreateAccountFormSubmit}>
          <p>
            <label htmlFor="createAccountName">Name</label>
            <input type="text" name="createAccountName" id="createAccountName" onChange={this.handleChange} value={this.state.createAccountName} />
          </p>
          <p>
            <label htmlFor="createAccountEmail">Email</label>
            <input type="email" name="createAccountEmail" id="createAccountEmail" onChange={this.handleChange} value={this.state.createAccountEmail} />
          </p>
          <p>
            <label htmlFor="createAccountPassword">Password</label>
            <input type="password" name="createAccountPassword" id="createAccountPassword" onChange={this.handleChange} value={this.state.createAccountPassword} />
          </p>
          <p>
            <input type="submit" value="Create Account"/>
          </p>
        </form>
      </div>
    )
  }
}

export default CreateAccount
