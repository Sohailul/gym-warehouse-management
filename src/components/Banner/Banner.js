import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner row d-flex justify-content-center align-items-center'>
      <div className='col-sm-12 col-md-6 mb-3 mt-5'>
        <h2>We Offer Fitness Equipement To Home Users, Commercial GYM And Corporate Fitness Facilities all over the world.</h2>
        <button className='btn btn-lg text-white'>View Equipement</button>
      </div>
      <div className='col-sm-12 col-md-6 mt-5 bounce'>
        <img src="https://live.staticflickr.com/65535/52043404457_e56702e81c_c.jpg" className='img-fluid' alt="GYM_Fitness" />
      </div>
    </div>
  )
}

export default Banner