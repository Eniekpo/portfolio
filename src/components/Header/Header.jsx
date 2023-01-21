import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Headertop from '../Headertop'
import home from '../../assets/front.png'

const Header = () => {
  return (
    <>
      <Headertop title="YOLE-TECH HUB" image={home}>
        Backend, Frontend Developer
      </Headertop>
      <header id='home'>

        <div className="container">
          <div className="header-container">
            <h2>Hello I'm</h2>
            <h1>JOHN ORUEBI</h1>
            <h2 className="text-light">Fullstack Developer</h2>
            <CTA />
            <HeaderSocials />

            <a href="/contact" className="scroll-down">SEND A MESSAGE</a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
