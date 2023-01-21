import './testimonials.css'
import Avatar from '../../assets/profile.png'
import testimonial from '../../assets/front.png'
import Headertop from '../Headertop';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Avatar,
    name: 'John Rose',
    review: 'He Designed my e-commerce website and it is wonderful, I will recommend him for any web development job.'
  },
  {
    avatar: Avatar,
    name: 'John Rose',
    review: 'He Designed my e-commerce website and it is wonderful, I will recommend him for any web development job.'
  },
  {
    avatar: Avatar,
    name: 'John Rose',
    review: 'He Designed my e-commerce website and it is wonderful, I will recommend him for any web development job.'
  },
  {
    avatar: Avatar,
    name: 'John Rose',
    review: 'He Designed my e-commerce website and it is wonderful, I will recommend him for any web development job.'
  },
]

const Testimonials = () => {
  return (
    <>
      <Headertop title="TESTIMONIALS" image={testimonial}>
        Review from my clients
      </Headertop>

      <section id='testimonials'>
        <Swiper className="container testimonials-container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {
            data.map(({ avatar, name, review }, index) => {
              return (
                <SwiperSlide key={index} className="testimonials">
                  <div className="client-avatar">
                    <img src={avatar} alt={name} />
                  </div>
                  <h5 className='client-name'>{name}</h5>
                  <small className="client-review">{review}</small>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </section>
    </>
  )
}

export default Testimonials
