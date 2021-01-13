import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import Logo from '../../logo.jpg';


const Nav = () => {
    

    return (
        <div className = 'Nav'>

            <div id = 'logo-holder'>

                <img src = { Logo } id = 'logo' alt = 'logo' />
                <div id = 'linker'>
                    <Link className = 'Link' to = '#' >Product </Link>
                    <Link className = 'Link' to = '#' >Pricing</Link>
                    <Link className = 'Link' to = '#' >Enterprise</Link>
                    <Link className = 'Link' to = '#' >Support</Link>
                </div>

                
            </div>

            <div>
                <Link className = 'Link' to = '#' >Contact Sales</Link>
                <Link className = 'Link' to = '#' >Login</Link>
                <Link id = 'free-trial' className = 'Link' to = '#' >Try for free > </Link>
            </div>

            

        </div>
    )
}

export default Nav;