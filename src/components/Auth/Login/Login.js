import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='row container'>
      <div className='col-md-6 col-sm-6 mx-auto mt-5 border p-5'>
        <h3 className='text-success text-center'>Please Login!</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" placeholder="Enter your email address" required />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Enter Password" required />
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Remember Me</label>
            </div>
            <div className="mb-3 form-check">
              <p className='fw-bold text-center mt-2'>Forgot Password? <span><Link to='/login' className='text-decoration-none'>Reset Password</Link></span></p>
            </div>
          </div>
          <button type="submit" className="btn w-100 d-block" style={{ backgroundColor: "#4B4C78", color: "#fff" }}>Login</button>
        </form>
        <div className='mt-5 text-center'>
          <p className='fw-bold mt-2'>Don’t have an account? <span><Link to='/register' className='text-decoration-none'>Register now</Link></span></p>
        </div>
      </div>
    </div>
  )
}

export default Login