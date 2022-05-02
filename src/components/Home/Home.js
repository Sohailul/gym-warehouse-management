import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Items from '../Items/Items'

const Home = () => {
  return (
    <div className='container'>
      <Banner/>
      <Items/>
      <About/>

    </div>
  )
}

export default Home