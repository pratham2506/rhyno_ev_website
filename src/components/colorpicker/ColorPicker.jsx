import React, { useState } from 'react';
import './ColorPicker.css';
import IMG1 from '../../assets/1.png';
import IMG2 from '../../assets/2.png';
import IMG3 from '../../assets/3.png';
import IMG4 from '../../assets/4.png';
import IMG5 from '../../assets/5.png';
import IMG6 from '../../assets/6.png';

const ColorPicker = () => {
  const imageList = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const changeImage = (index) => {
    setActiveImageIndex(index);
  };

  return (
    <div>
      <div id="output">
        <img src={imageList[activeImageIndex]} alt="Selected Image" />
      </div>
      <div id="color-container">
        {imageList.map((image, index) => (
          <div
            key={index}
            className={`color-pick ${activeImageIndex === index ? 'active' : ''}`}
            // style={{ backgroundImage: `url(${image})` }}
            onClick={() => changeImage(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
