import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Courses from './Courses/Courses'
import Features from './Features/Features'
import Review from './Review/Review'
import Article from './Article/Article'

const Home = () => {
  return (
    <div >
      <Hero/>
      <About />
      <Courses />
      <Features />
      <Review />
      <Article />
    </div>
  )
}

export default Home