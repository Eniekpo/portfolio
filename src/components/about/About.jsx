import './about.css'
import Image from '../../assets/profile.png'
import {FaAward, FaUser, FaFolder} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
     <h5>Get To Know</h5>
    <h2>ABOUT ME</h2>

    <div className="container about-container">
      <div className="about-me">
      <div className="about-me-image">
        <img src={Image} alt="Me" />
      </div>
      </div>

      <div className="about-content">
      <div className="about-cards">

        <article className="about-card">
        <FaAward className='about-icon'/>
          <h5>Experience</h5>
          <small>5+ Years Work</small>
        </article>

        <article className="about-card">
        <FaUser className='about-icon'/>
          <h5>Clients</h5>
          <small>100+ Worldwide</small>
        </article>

        <article className="about-card">
        <FaFolder className='about-icon'/>
          <h5>Projects</h5>
          <small>80+ Completed</small>
        </article>      
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Laboriosam deserunt ex ut perspiciatis quidem animi vero iste, 
        cumque ducimus mollitia!
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>

    </div>
      </section>
  )
}

export default About