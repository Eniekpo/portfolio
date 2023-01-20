import './footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer-logo'>YOLE-TECH HUB</a>

      <ul className='permalinks'>
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#testimonials">TESTIMONIALS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://facebook.com/Eniekpo" target='_blank' rel='noreferrer noopener'><FaFacebook /></a>
        <a href="https://twitter.com/Eniekpo" target='_blank' rel='noreferrer noopener'><FaTwitter /></a>
        <a href="https://instagram.com/Eniekpo" target='_blank' rel='noreferrer noopener'><FaInstagram /></a>
        <a href="https://linkedin.com/in/Eniekpo" target='_blank' rel='noreferrer noopener'><FaLinkedin /></a>
      </div>

      <div className="footer-copyright">
        <small>Copyright &copy; Yole-Tech 2023, All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
