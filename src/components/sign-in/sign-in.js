import React from 'react';
import './sign-in.css';
import Logo from '../../logo.jpg';
import { Link } from 'react-router-dom';


const SignIn = () => {
    

    return (
        <div className = 'Sign-in'>
            
            <div id = 'top'>
                <img src = { Logo } id = 'sign-logo' alt = 'logo' />
                <div>
                    <Link className = 'Link' to = '#'>New Customers?</Link>
                    <Link id = 'free-trial'  className = 'Link' to = '#'>Try for free</Link>
                </div>
            </div>

            <div id = 'middle'>
                <h3>Sign In</h3>
                <p>Welcome back!</p>

                <div className = 'Sign-input-div'>
                    <div className = 'Sign-input-holder'>
                        <label for = 'email'>Email/Username</label>
                        <input className = 'Sign-input' name = 'email' type = 'email' />
                    </div>
                    <div className = 'Sign-input-holder'>
                        <label for = 'password'>Password</label>
                        <input className = 'Sign-input' name = 'email' type = 'password' />
                    </div>
                    <button id = 'login-submit'>Log In</button>
                </div>
                <Link className = 'Sign-link' to = '#'>Forgot Password</Link>

                <div>
                    
                    <p>- Or sign in with</p>

                    <p  id = 'sign-rights'>©2020 Oneburner.com All rights reserved.</p>
                </div>
            </div>

        </div>
    )
}

export default SignIn;