import React from 'react';
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { FaTwitterSquare, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='container-fluid bg-dark mt-5 text-white p-3'>
      <div className='container mt-5'>
        <div className='row d-flex align-items-center'>
          <div className='col-md-3'>
            <ul className='navbar-nav'>
              <h5 className='mb-3 text-info'>Important Links</h5>
              <li className="nav-item"><Link className="nav-link text-white fs-6" to="">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link text-white fs-6" to="">Refund Policy</Link></li>
              <li className="nav-item"><Link className="nav-link text-white fs-6" to="">Terms and Conditions</Link></li>
              <li className="nav-item"><Link className="nav-link text-white fs-6" to="">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h5 className='mb-3 text-info'>Features</h5>
            <ul className='navbar-nav'>
              <li className="nav-item"><Link className="nav-link text-white fs-6" to="">Client Management</Link></li>
              <li className="nav-item"><Link className="nav-link text-white fs-6" to="">Lead Management</Link></li>
              <li className="nav-item"><Link className="nav-link text-white fs-6" to="">Schedulers</Link></li>
              <li className="nav-item"><Link className="nav-link text-white fs-6" to="">Point of Sale</Link></li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h5 className='mb-3 text-info'>GYM Warehouse Management</h5>
            <p className='fs-6 d-flex align-items-center'><span><FaMapMarker /></span>&nbsp;County Route, New York, United States</p>
            <p className='fs-6 d-flex align-items-center'><span><AiOutlineMail /></span>&nbsp;contact@gymwarehouse.com</p>
            <p className='fs-6 d-flex align-items-center'><span><AiFillPhone /></span>&nbsp;Helpline: +9109383723, +092738262</p>
            <p className='fs-2 d-flex'>
              <span><a className='text-white' href="https://facebook.com" target="_blank" rel="noreferrer"><AiFillFacebook /></a></span>&nbsp;
              <span><a className='text-white' href="https://instagram.com" target="_blank" rel="noreferrer"><AiFillInstagram /></a></span>&nbsp;
              <span><a className='text-white' href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitterSquare /></a></span>&nbsp;
              <span><a className='text-white' href="https://linkedin.com" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></span>&nbsp;
            </p>
          </div>
          <div className='col-md-3'>
            <img src="https://live.staticflickr.com/65535/52045356540_0f454dd648_n.jpg" className="img-fluid rounded" alt="" />
          </div>
        </div>
      </div>
      <h6 className='text-center mt-5'>Copyright {year} || All right reserved</h6>
    </div>
  )
}

export default Footer