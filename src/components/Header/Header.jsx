import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import logo from '../../assets/Logo.png'

const Header = () => {
  return (
    <>
      <div className='h-text'>
        <img src={logo} alt="Logo" />
        <h1>YOLE-TECH HUB</h1>
      </div>
      <header id='home'>

        <div className="container">
          <div className="header-container">
            <h2>Hello I'm</h2>
            <h1>JOHN ORUEBI</h1>
            <h2 className="text-light">FULLSTACK DEVELOPER</h2>
            <CTA />
            <HeaderSocials />

            <a href="#contact" className="scroll-down">Scroll Down</a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
