import './footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer-logo'>YOLE-TECH HUB</a>

      <ul className='permalinks'>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/experience">EXPERIENCE</Link></li>
        <li><Link to="/services">SERVICES</Link></li>
        <li><Link to="/portfolio">PORTFOLIO</Link></li>
        <li><Link to="/testimonials">TESTIMONIALS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>

      <div className="footer-socials">
        <a href="https://facebook.com/Eniekpo" target='_blank' rel='noreferrer noopener'><FaFacebook /></a>
        <a href="https://twitter.com/Eniekpo" target='_blank' rel='noreferrer noopener'><FaTwitter /></a>
        <a href="https://instagram.com/Eniekpo12" target='_blank' rel='noreferrer noopener'><FaInstagram /></a>
        <a href="https://linkedin.com/in/Eniekpo" target='_blank' rel='noreferrer noopener'><FaLinkedin /></a>
      </div>

      <div className="footer-copyright">
        <small>Copyright &copy; Yole-Tech 2023, All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
