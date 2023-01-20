import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>SERVICES</h2>

      <div className="container services-container">

        {/* UI/UX DESIGN */}
        <article className="service">
          <div className='service-head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

          </ul>
        </article>

        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className='service-head'>
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

          </ul>
        </article>

        {/* CONTENT CREATION */}
        <article className="service">
          <div className='service-head'>
            <h3>CONTENT CREATION</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
