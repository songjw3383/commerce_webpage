import React, { useEffect, useState } from 'react'
import "./Nav.css"
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Nav({totalItems}) {
    const [show, handleShow] = useState(false);
    const [burgerButton, setburgerButton] = useState(false)
    //console.log(totalItems)
    const responsiveHandling = () => {
        setburgerButton(!burgerButton)
    }

    // console.log(burgerButton)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 50) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[])

    return (
        <nav className={`navBar ${show && "nav__anim"}`}>
             <Link to="/"><div className="nav__logo">
               <img src={logo} alt="" />
            </div></Link>
            
                <ul className={burgerButton? "nav__contents unactive" : "nav__contents"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Project">Project</Link></li>
                    <li><Link to="/Products">Store</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                </ul>
            <Link to="/Cart">
                <div className="nav__cart">
                    <ShoppingCartIcon fontSize="medium" />
                    <span>{totalItems}</span>
                </div>
            </Link> 
            <div className="nav__burger" onClick={responsiveHandling}><MenuIcon /></div>
        </nav>
    )
}

export default Nav
