import React from 'react'

export const Login = () => {
  return (
  <>
 <h1>Login Component is Working</h1>
      <hr />
      <form>
        <fieldset>
          <legend>Login</legend>
          <input type="email" placeholder='Email :     ' /><br />
          <input type="password" placeholder='Password :' /><br />
          <br /><br />
          <button>Login</button> <button>Sign Up</button>  
        </fieldset>
      </form>
  </>
  )
}
