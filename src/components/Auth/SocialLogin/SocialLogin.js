import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (googleUser) {
        navigate('/');
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