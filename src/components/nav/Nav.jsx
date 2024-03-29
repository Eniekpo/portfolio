import React, { useState } from 'react'

import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <div className='nav-transparent'>
      <Link to="/" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><AiOutlineHome /></Link>
      <Link to="/about" onClick={() => setActiveNav('/about')} className={activeNav === '/about' ? 'active' : ''}><AiOutlineUser /></Link>
      <Link to="/experience" onClick={() => setActiveNav('/experience')} className={activeNav === '/experience' ? 'active' : ''}><BiBook /></Link>
      <Link to="/services" onClick={() => setActiveNav('/services')} className={activeNav === '/services' ? 'active' : ''}><RiServiceLine /></Link>
      <Link to="/contact" onClick={() => setActiveNav('contact')} className={activeNav === '/contact' ? 'active' : ''}><BiMessageSquareDetail /></Link>
    </div>
  )
}

export default Nav
