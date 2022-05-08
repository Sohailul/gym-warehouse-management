import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import Slider from 'react-slick';

const SlickSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container">
            <h2 className='text-center mt-5'>Our Clients and Partners</h2>
            <div className='d-flex justify-content-center align-items-center mb-3'>
                <div style={{ height: '3px', width: "100px", marginTop: "-20px" }} className='bg-primary'></div>
                <p className='px-2' style={{ marginTop: "-10px" }}><GoPrimitiveDot /></p>
                <div style={{ height: '3px', width: "100px", marginTop: "-20px" }} className='bg-primary'></div>
            </div>
            <div className='container mt-5 mb-5'>
                <Slider {...settings}>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h3 style={{ color: "yellow" }}>Cybex</h3>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h3 style={{ color: "red" }}>Matrix</h3>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h3 style={{ color: "purple" }}>TRX</h3>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h3 style={{ color: "blue" }}>Expresso</h3>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h3 style={{ color: "green" }}>Pro GYM</h3>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h3 style={{ color: "cyan" }}>KEISER</h3>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h3 style={{ color: "orange" }}>CENTURY</h3>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h3 style={{ color: "gray" }}>POWERPLATE</h3>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h3 style={{ color: "yellow" }}>BODYBOSS</h3>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h3>DIGILOCK</h3>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default SlickSlider;