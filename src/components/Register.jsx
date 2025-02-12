import React from 'react'

export const Register = () => {
  return (
    <>
      <h1>Registration Component is Working</h1>
      <hr />
      <form>
        <fieldset>
          <legend>Registration</legend>
          <input type="text" placeholder='Firstname : ' /><br />
          <input type="text" placeholder='Lastname :  ' /><br />
          <input type="email" placeholder='Email :     ' /><br />
          <input type="password" placeholder='Password :' /><br />
          <br /><br />
          <button>Sign Up</button>  <button>Login</button>
        </fieldset>
      </form>
    </>

  )
}
