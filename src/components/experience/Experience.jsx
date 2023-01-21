import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import experience from '../../assets/front.png'
import Headertop from '../Headertop'

const Experience = () => {
  return (
    <>
      <Headertop title="EXPERIENCE" image={experience}>
        What I Skills I Have
      </Headertop>

      <section id='experience'>
        <div className="container experience-container">

          <div className="experience-frontend">
            <h3>FRONTEND DEVELOPMENT</h3>
            <div className="experience-content">

              <article className="experience-details">
                <BsPatchCheckFill className='experience-details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsPatchCheckFill className='experience-details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className="experience-details">
                <BsPatchCheckFill className='experience-details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsPatchCheckFill className='experience-details-icon' />
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsPatchCheckFill className='experience-details-icon' />
                <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsPatchCheckFill className='experience-details-icon' />
                <div>
                  <h4>React Js</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience-backend">
            <h3>BACKEND DEVELOPMENT</h3>
            <div className="experience-content">

              <article className="experience-details">
                <BsPatchCheckFill className='experience-details-icon' />
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsPatchCheckFill className='experience-details-icon' />
                <div>
                  <h4>Django</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className="experience-details">
                <BsPatchCheckFill className='experience-details-icon' />
                <div>
                  <h4>Node Js</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className="experience-details">
                <BsPatchCheckFill className='experience-details-icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsPatchCheckFill className='experience-details-icon' />
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsPatchCheckFill className='experience-details-icon' />
                <div>
                  <h4>PostgreSQL</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

            </div>
          </div>

        </div>
      </section >
    </>
  )
}

export default Experience
