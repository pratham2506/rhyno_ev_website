import React, { useEffect, useState } from 'react'
import './Home.css'

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Soar Above Ordinary", "From Fields to Skies", "Drones on Demand"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 50);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0 ,text.length + 1);


        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText ===  fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }


    }
  return (
    <div>
      <div className="Drone_head">
            <div className="content">
            <h1>Transforming the Way <br /> You See the World</h1>
            <h1 className='animaton'>{text}<span>|</span></h1>
            </div>
        </div>
    </div>
  )
}

export default Home
