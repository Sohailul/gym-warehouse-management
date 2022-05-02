import React from 'react';
import {AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiOutlineMail, AiFillPhone} from 'react-icons/ai';
import {FaTwitterSquare, FaMapMarker} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
   const year = new Date().getFullYear();
  return (
    <div className='container-fluid bg-dark mt-5 text-white p-3'>
      <div className='container'>
        <div className='row d-flex justify-centent-center align-items-center'>
          <div className='col-md-4'>
            <h3 className='mb-3'>GYM Warehouse Management</h3>
            <p className='fs-5'><FaMapMarker/>&nbsp;County Route, New York, United States</p>
            <p className='fs-5'><AiOutlineMail/>&nbsp;contact@gymwarehouse.com</p>
            <p className='fs-5'><AiFillPhone/>&nbsp;Helpline: +9109383723, +092738262</p>
            <p className='fs-2'>
              <span><a className='text-white' href="https://facebook.com" target="_blank" rel="noreferrer"><AiFillFacebook/></a></span>&nbsp;
              <span><a className='text-white' href="https://instagram.com" target="_blank" rel="noreferrer"><AiFillInstagram/></a></span>&nbsp;
              <span><a className='text-white' href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitterSquare/></a></span>&nbsp;
              <span><a className='text-white' href="https://linkedin.com" target="_blank" rel="noreferrer"><AiFillLinkedin/></a></span>&nbsp;
            </p>
          </div>
          <div className='col-md-4'>
            <ul className='navbar-nav'>
              <li className="nav-item"><Link className="nav-link text-white fs-5" to="">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link text-white fs-5" to="">Refund Policy</Link></li>
              <li className="nav-item"><Link className="nav-link text-white fs-5" to="">Terms and Conditions</Link></li>
              <li className="nav-item"><Link className="nav-link text-white fs-5" to="">Privacy Policy</Link></li>
            </ul>

          </div>
          <div className='col-md-4'>
            <img src="https://live.staticflickr.com/65535/52045356540_0f454dd648_n.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <h6 className='text-center mt-5'>Copyright {year} || All right reserved</h6>
    </div>
  )
}

export default Footer