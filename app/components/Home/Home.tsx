import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Courses from './Courses/Courses'
import Features from './Features/Features'

const Home = () => {
  return (
    <div >
      <Hero/>
      <About />
      <Courses />
      <Features />
    </div>
  )
}

export default Home