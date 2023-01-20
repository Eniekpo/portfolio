import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>CONTACT ME</h2>

      <div className="container contact-container">
        <div className="contact-options">

          <article className="contact-option">
            <MdOutlineEmail className='contact-option-icon' />
            <h4>Email</h4>
            <a href="mailto:johneniekpo@outlook.com" target='_blank' rel='noreferrer noopener'>Contact Me</a>
          </article>

          <article className="contact-option">
            <RiMessengerLine className='contact-option-icon' />
            <h4>Messenger</h4>
            <a href="https://m.me/Eniekpo" target='_blank' rel='noreferrer noopener'>Contact Me</a>
          </article>

          <article className="contact-option">
            <BsWhatsapp className='contact-option-icon' />
            <h4>WhatsApp</h4>
            <a href="https://wa.me/+2347032767758" target='_blank' rel='noreferrer noopener'>Contact Me</a>
          </article>

        </div>

        {/* END OF CONTACT OPTIONS  */}

        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="2" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
