import "./Testimonial.css";


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";


// import required modules
// import {  Autoplay,Pagination } from "swiper";
import { Link } from "react-router-dom";


import { FaQuoteLeft } from "react-icons/fa";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1 className="t-heading">Better Service Starts Here </h1>


        <Swiper 
        slidesPerView={2}
        breakpoints={{

          0: {
            slidesPerView: 1
          },
          800:{
            slidesPerView:1
          },
          1000:{
            slidesPerView:2
          },
  
        }}

        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}

        loop={true}
        spaceBetween={60}
        // Pagination={true}
        // modules={[Autoplay, Pagination]}
        className="  mySwiper t-slider "
        >


          <SwiperSlide  className="t-wrapper">
            <div className="w-left">
              <FaQuoteLeft />
            </div>

            <div className="w-right">
              <p>
                Indrones is one the most innovative company we have come across
                with their focus on customer problem solving. SCCL became on the
                leading Mining companies in India to deploy Drones for
                topographic surveying, pre-mining surveys and land acquisition
                strategies for new lease areas
              </p>
              <h2>Indrones Solutions Pvt. Ltd</h2>
              {/* <h4>SCCL</h4> */}
            </div>
          </SwiperSlide>

          <SwiperSlide  className="t-wrapper ">
            <div className="w-left">
              <FaQuoteLeft />
            </div>

            <div className="w-right">
              <p>
              Drone federation of India is a non-government, not-for-profit, ./Industry-led body, that promotes & strives towards building, a safer & Scalable unmanned aviation industry in India. DEI engages with Thought leaders, Industry experts, Visionaries & policymakers to th share their expertise & build a sustainable UAV industry in India.
              </p>
              <h2>Drone federation of India</h2>
              {/* <h4>SCCL</h4> */}
            </div>
          </SwiperSlide>

          <SwiperSlide  className="t-wrapper">
            <div className="w-left">
              <FaQuoteLeft />
            </div>

            <div className="w-right">
              <p>
                Pigeon Innovative solutions, is a Drone Survey, company in India Specializing in professional aerial, photography services  GIS Surveying, topographic survey. 3D models, photogrammetery consultancy, drone inspection, derial infrasture monitoring Course mining services, agriculture drones.
              </p>
              <h2>Pigeon Innovative Solutions LLP</h2>
              {/* <h4>SCCL</h4> */}
            </div>
          </SwiperSlide>

          <SwiperSlide  className="t-wrapper ">
            <div className="w-left">
              <FaQuoteLeft />
            </div>

            <div className="w-right">
              <p>
              Bramha Research foundation is a strategic research thinktank, focusing on public policy: & key issues impacting India, nationally & internationally
              </p>
              <h2>Bramha Research Foundation</h2>
              {/* <h4>SCCL</h4> */}
            </div>
          </SwiperSlide>

        </Swiper>

    </div>
  );
};

export default Testimonials;