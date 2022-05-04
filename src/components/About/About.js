import React from 'react';
import {GoPrimitiveDot} from 'react-icons/go';

const About = () => {
    return (
        <div id="about">
            <h2 className='text-center mt-5'>About Us</h2>
            <div className='d-flex justify-content-center align-items-center mb-3'>
                <div style={{ height: '3px', width: "50px", marginTop: "-20px" }} className='bg-primary'></div>
                <p className='px-2' style={{marginTop: "-10px"}}><GoPrimitiveDot/></p>
                <div style={{ height: '3px', width: "50px", marginTop: "-20px" }} className='bg-primary'></div>
            </div>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-6 mb-5 bounce'>
                    <img src="https://live.staticflickr.com/65535/52044098077_a3e8e101a5_c.jpg" className='img-fluid' alt="" />
                </div>
                <div className='col-md-6 fs-5'>
                    <h2>GYM Warehouse Management PVT. Limited</h2>
                    <p>GYM Warehouse Management PVT. Limited, established in 2001, has been growing dramatically fast during last 19 years. It is a self-owned production factory that integrates R&D, production and sales, and has comprehensive foreign trade qualifications.  Moreover, Xiamen Golden Huanan Imp.&Exp.Co.,Ltd won the prize of “Top100 Enterprises” and “Exports of Key Enterprises” in Xiamen city each year. </p>
                </div>
            </div>
        </div>
    );
};

export default About;