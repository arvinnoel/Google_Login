import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '/Google__G__logo.svg.webp';
const Login = () => {
    const loginwithgoogle = () => {
        window.open("http://localhost:6005/auth/google/callback", "_self");
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
                <h1 className="text-center mb-4">Login</h1>
                <form className="mb-3">
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Username"/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>
                <p className="text-center mb-3">
                    Not Registered? <Link to="/register">Create an Account</Link>
                </p>
                <button className="btn btn-danger w-100 d-flex align-items-center justify-content-center" onClick={loginwithgoogle}>
                    <img src={googleLogo} alt="Google Logo" style={{ width: '20px', marginRight: '10px' }}/> Sign in With Google</button>
            </div>
        </div>
    );
};

export default Login;