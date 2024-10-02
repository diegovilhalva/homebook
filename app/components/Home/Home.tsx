import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Courses from './Courses/Courses'
import Features from './Features/Features'
import Review from './Review/Review'

const Home = () => {
  return (
    <div >
      <Hero/>
      <About />
      <Courses />
      <Features />
      <Review />
    </div>
  )
}

export default Home