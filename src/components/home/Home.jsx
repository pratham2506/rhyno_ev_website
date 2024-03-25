import React, { useEffect, useState } from 'react'
import './Home.css'

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Style", "Elegance", "Minimalism","Comfort"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(50); // Faster initial typing speed
  const period = 800;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText;

    if (!isDeleting) {
      updatedText = fullText.substring(0, text.length + 1); // Write the entire line at once
    } else {
      updatedText = fullText.substring(0, text.length - 1);
    }

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(50); // Reset typing speed for the next line
    }
  }

  return (
    <div>
      <div className="Drone_head">
        <div className="content">
          <h1>Let's Elevate Your Ride Experience <br /> With Rhyno</h1>
          <h1 className='animation'>Where Superiority Meets {text}<span>|</span></h1>
        </div>
      </div>
    </div>
  )
}

export default Home;
