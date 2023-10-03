import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Services from '../components/Services'
import Students from '../components/Students'
import About from '../components/About'
import Footer from '../components/Footer'
import FooterLine from '../components/FooterLine'

const Home = () => {
  return (
    <div className="Home">
			<Navbar/>
			<Slider />
			<Services />
      <Students />
      <About />
      <Footer />
      <FooterLine />
    </div>
  )
}

export default Home