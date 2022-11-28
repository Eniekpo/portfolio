import React from 'react'
// import './header.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header-socials'>
<a href="https://linkedin.com/in/Eniekpo" target='_blank' rel='noreferrer noopener'><BsLinkedin/></a>
<a href="https://github.com/Eniekpo" target='_blank' rel='noreferrer noopener'><FaGithub/></a>
<a href="https://wa.me/+2347032767758" target='_blank' rel='noreferrer noopener'><FaWhatsapp/></a>
<a href="https://t.me/+2347032767758" target='_blank' rel='noreferrer noopener'><FaTelegram/></a>
    </div>
  )
}

export default HeaderSocials