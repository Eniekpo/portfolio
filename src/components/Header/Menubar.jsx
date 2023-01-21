import './menubar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import { links } from './data'
import { MdOutlineClose } from 'react-icons/md'
import { GoThreeBars } from 'react-icons/go'

import React, { useState } from 'react'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false)


    return (
        <nav>
            <div className="container nav-container">
                <Link to='/' className='logo' onClick={() => setIsNavShowing(false)}>
                    <img src={logo} alt="Logo" width='200' />
                </Link>
                <ul className={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>

                <button className='nav-toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar
