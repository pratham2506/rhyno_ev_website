import React, { useEffect, useState } from 'react'
import './Home.css'

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["Style", "Elegance", "Minimalism", "Comfort"];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, 1000); // Change words every 1 seconds

    return () => {
      clearInterval(ticker);
    };
  }, [textIndex]);

  const tick = () => {
    setTextIndex((textIndex + 1) % toRotate.length);
  };

  return (
    <div>
      <div className="Drone_head">
        <div className="content">
          <h1 className='aligncenter'>Let's Elevate Your <br />Ride Experience <br/>With <span className='yellow'>Rhyno</span> </h1>
          <h1 className='animation alignleft'>
            Where Superiority <br/> Meets <span className='rotate'>{toRotate[textIndex]}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
