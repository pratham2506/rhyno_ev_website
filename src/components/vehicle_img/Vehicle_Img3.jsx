import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Vehicle_Img.css';
import { Link } from 'react-router-dom';

const Vehicle_Img3 = (props) => {
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 800) {
      Aos.init({
        duration: 600,
        easing: 'ease',
        once: true,
      });
    }
  }, []);

  return (
    <div className='vi-bgimg'>
      <div className="vi-maindiv" data-aos="flip-right" data-aos-delay="100">
        <h1>{props.name}</h1>
        <div className="vi-info">
          <div className="vi-one">
            <small>Certified Range</small>
            <p>{props.kms} KMS</p>
          </div>

          <div className="vi-one">
            <small>Top Speed</small>
            <p>{props.top} kmph</p>
          </div>

          <div className="vi-one">
            <small>0 - 100% Charge</small>
            <p>{props.charge} HRS</p>
          </div>
        </div>
        <Link to="/SE03LITE"><button className='btn'>See More</button></Link>
      </div>
    </div>
  );
};

export default Vehicle_Img3;
