import React from 'react'

const Banner = () => {
  return (
    <div className='row d-flex justify-content-center align-items-center'>
      <div className='col-sm-12 col-md-6'>
        <h1>We offer fitness equipement to home users, Commercial GYM And Corporate Fitness Facilities all over the world.</h1>
        <button className='btn btn-lg text-white' style={{ backgroundColor: "#4B4C78" }}>View Equipement</button>
      </div>
      <div className='col-sm-12 col-md-6'>
        <img src="https://live.staticflickr.com/65535/52043404457_e56702e81c_c.jpg" className='img-fluid' alt="GYM_Fitness" />
      </div>
    </div>
  )
}

export default Banner