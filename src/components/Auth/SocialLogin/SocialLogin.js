import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [user] = useAuthState(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        const url = 'https://glacial-stream-19491.herokuapp.com/login';
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

    const googleSignIn = () => {
        signInWithGoogle();
    }
    return (
        <div>
            <div className='form-group'>
                <button
                    onClick={googleSignIn}
                    className="btn w-50 d-flex justify-content-center align-items-center mx-auto"
                    style={{ backgroundColor: "#c5cdf1" }}><FcGoogle />&nbsp;SignIn with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;