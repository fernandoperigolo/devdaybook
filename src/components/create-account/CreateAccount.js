import React from 'react'

function CreateAccount() {
  return (
    <div className="CreateAccount">
      <h1>Dev Day-Book</h1>
      <h2>Create Account</h2>
      <form>
        <p>
          <label htmlFor="createAccountEmail">Email</label>
          <input type="email" name="createAccountEmail" id="createAccountEmail"/>
        </p>
        <p>
          <label htmlFor="createAccountPassword">Password</label>
          <input type="password" name="createAccountPassword" id="createAccountPassword"/>
        </p>
        <p>
          <input type="submit" value="Create Account"/>
        </p>
      </form>
    </div>
  )
}

export default CreateAccount
