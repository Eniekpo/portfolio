import React from 'react'
import Header from './Header/Header'
import Nav from './nav/Nav'
import About from './about/About'
import Experience from './experience/Experience'
import Services from './services/Services'
import Portfolio from './portfolio/Portfolio'
import Testimonials from './testimonials/Testimonials'
import Contact from './contact/Contact'
const Home = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
        </>
    )
}

export default Home
