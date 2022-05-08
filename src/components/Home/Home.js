import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Items from '../Items/Items'
import SlickSlider from '../SlickSlider/SlickSlider'

const Home = () => {
  return (
    <div className='container'>
      <Banner />
      <Items />
      <About />
      <SlickSlider />

    </div>
  )
}

export default Home