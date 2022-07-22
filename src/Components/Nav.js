import '../Css/Fonts.css'
import React from 'react'
import {NavLink} from 'react-router-dom';
import  '../Css/NavStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Nav() {
    return (
        
    <header>
         <div className='container-nav'>
            <nav>
                <div className='nav-bar'>
                    <ul>
                        <NavLink exact to="/" className='nav-items'>Home</NavLink>
                        <NavLink to="/About" className='nav-items'>About</NavLink>
                        <NavLink to="/MyWork" className='nav-items'>My work</NavLink>
                        <NavLink to="/Contact" className='nav-items-right ms-lg-auto contact-link'>Contact</NavLink>
                    </ul>
                </div>
            </nav>
        </div>
     </header>
        
     
    )
}

export default Nav
