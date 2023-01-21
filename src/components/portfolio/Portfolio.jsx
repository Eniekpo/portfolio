import './portfolio.css'
import port1 from '../../assets/Gallery0.png'
import Headertop from '../Headertop'
import portfolio from '../../assets/front.png'

const data = [
  {
    id: 1,
    Image: port1,
    title: 'E-Commerce Website',
    github: 'https://github.com/Eniekpo',
    demo: 'https://yoletech.vercel.app'
  },
  {
    id: 2,
    Image: port1,
    title: 'Portfolio Website',
    github: 'https://github.com/Eniekpo',
    demo: 'https://yoletech.vercel.app'
  },
  {
    id: 3,
    Image: port1,
    title: 'Company Website',
    github: 'https://github.com/Eniekpo',
    demo: 'https://yoletech.vercel.app'
  },
  {
    id: 4,
    Image: port1,
    title: 'School Website',
    github: 'https://github.com/Eniekpo',
    demo: 'https://yoletech.vercel.app'
  },
  {
    id: 5,
    Image: port1,
    title: 'Online Student Portal',
    github: 'https://github.com/Eniekpo',
    demo: 'https://yoletech.vercel.app'
  },
  {
    id: 6,
    Image: port1,
    title: 'Data Website',
    github: 'https://github.com/Eniekpo',
    demo: 'https://yoletech.vercel.app'
  },
]

const Portfolio = () => {
  return (
    <>
      <Headertop title="PORTFOILIO" image={portfolio}>
        My Most Recent Relrvant Works
      </Headertop>

      <section id='portfolio'>
        <div className="container portfolio-container">
          {
            data.map(({ id, Image, title, github, demo }) => {
              return (
                <article key={id} className="portfolio-item">
                  <div className="portfolio-item-image">
                    <img src={Image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio-item-cta">
                    <a className='btn' href={github} rel='noreferrer noopener' target='_blank'>Github</a>
                    <a className='btn btn-primary' href={demo} rel='noreferrer noopener' target='_blank'>Live Demo</a>
                  </div>
                </article>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Portfolio
