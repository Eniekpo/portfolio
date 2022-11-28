import './testimonials.css'
import Avatar from '../../assets/profile.png'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Avatar,
    name: 'John Rose',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi reiciendis perferendis cumque in odit sed id, ducimus culpa recusandae iusto.'
  },
  {
    avatar: Avatar,
    name: 'John Rose',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi reiciendis perferendis cumque in odit sed id, ducimus culpa recusandae iusto.'
  },
  {
    avatar: Avatar,
    name: 'John Rose',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi reiciendis perferendis cumque in odit sed id, ducimus culpa recusandae iusto.'
  },
  {
    avatar: Avatar,
    name: 'John Rose',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi reiciendis perferendis cumque in odit sed id, ducimus culpa recusandae iusto.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>TESTIMONIALS</h2>

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
  )
}

export default Testimonials
