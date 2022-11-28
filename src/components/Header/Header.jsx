import './header.css'
import CTA from './CTA'
import profile from '../../assets/profile.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container">
        <div className="header-container">
          <h5>Hello I'm</h5>
          <h1>JOHN ORUEBI</h1>
          <h5 className="text-light">FULLSTACK DEVELOPER</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={profile} alt="Me" />
          </div>

          <a href="#contact" className="scroll-down">Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header