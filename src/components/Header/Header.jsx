import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <>
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
