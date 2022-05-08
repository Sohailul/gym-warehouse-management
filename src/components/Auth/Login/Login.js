import React, { useRef } from 'react'
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const [user] = useAuthState(auth);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const location = useLocation();
  const [signInWithEmailAndPassword, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  let errorElement;
  let from = location.state?.from?.pathname || "/";

  if (user) {
    const url = 'http://localhost:5000/login';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: user.email
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('accessToken', data.accessToken);
        console.log(data);
        navigate(from, { replace: true });
      });
  }


  if (error) {
    errorElement = <p className='text-danger'>Error/Invalid Login {error?.message}</p>
  }

  const handleSignIn = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else {
      toast('please enter your email address');
    }
  }
  return (
    <div className='row container'>
      <div className='col-md-6 col-sm-6 mx-auto mt-5 border p-5'>
        <h3 className='text-success text-center mb-5'>Please Login!</h3>
        <SocialLogin />
        <div className='d-flex justify-content-center align-items-center'>
          <div style={{ height: '1px' }} className='bg-primary w-25'></div>
          <p className='mt-2 px-2'>or</p>
          <div style={{ height: '1px' }} className='bg-primary w-25'></div>
        </div>
        <form onSubmit={handleSignIn}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input ref={emailRef} type="email" className="form-control" name="email" placeholder="Enter your email address" required />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input ref={passwordRef} type="password" className="form-control" name="password" placeholder="Enter Password" required />
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Remember Me</label>
            </div>
            <div className="mb-3 form-check">
              <p className='fw-bold text-center mt-2'>Forgot Password? <span><Link to='/login' className='text-decoration-none' onClick={resetPassword}>Reset Password</Link></span></p>
            </div>
          </div>
          <button type="submit" className="btn w-100 d-block" style={{ backgroundColor: "#4B4C78", color: "#fff" }}>Login</button>
        </form>
        {errorElement}
        <div className='mt-5 text-center'>
          <p className='fw-bold mt-2'>Don’t have an account? <span><Link to='/register' className='text-decoration-none'>Register now</Link></span></p>
        </div>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Login