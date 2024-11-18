import React from 'react'

export default function Register() {
  return (
    <div>
      <form className="box">
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
          <button className="button is-primary has-text-white" type="submit">Login</button>
        </div>
        </form>
    </div>
  )
}
