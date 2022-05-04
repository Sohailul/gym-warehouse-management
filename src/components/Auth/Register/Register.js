import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [agree, setAgree] = useState(false);
  
  return (
    <div className='row container'>
      <div className='col-md-6 col-sm-6 mx-auto mt-5 border p-5'>
        <h3 className='text-success text-center'>Please Register!</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" placeholder="Enter your name" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter your email address" required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Enter Password" required />
          </div>
            <div className="mb-3 form-check">
              <input onClick={() => setAgree(!agree)} type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className={agree ? 'text-success' : 'text-danger'} for="exampleCheck1">I agree to terms and conditions</label>
            </div>
          <button disabled={!agree} type="submit" className="btn w-100 d-block" style={{ backgroundColor: "#4B4C78", color: "#fff" }}>Register</button>
        </form>
        <div className='mt-5 text-center'>
          <p className='fw-bold mt-2'>Already have an account? <span><Link to='/login' className='text-decoration-none'>Login</Link></span></p>
        </div>
      </div>
    </div>
  )
}

export default Register