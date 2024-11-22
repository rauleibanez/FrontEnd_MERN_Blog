import React from 'react'

export default function Register() {
  return (
    <section className='section'>
      <div className='container'>
      <h1 className="title has-text-white has-text-centered">Sign Up</h1>
      <form className="box block has-background-dark register">
        <div className="field">
          <label className="label has-text-white">Username</label>
          <div className="control">
            <input
              className="input"
              type="text"              
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label has-text-white">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"              
              required
            />
          </div>
        </div>
        <div className="control">
          <button className="button is-primary has-text-white" type="submit">Register</button>
        </div>
        </form>
      </div>      
    </section>
  )
}
