import React from 'react'
import './Vehicle_Img.css'

const Vehicle_Img = () => {
  return (
    <div className='vi-bgimg'>
      <div className="vi-maindiv">
        <h1>Jeet X</h1>
        <div className="vi-info">
            <div className="vi-one">
            <small>Certified Range</small>
            <p>100 KMS</p>
            </div>

            <div className="vi-one">
            <small>Top Speed</small>
            <p>65 kmph</p>
            </div>

            <div className="vi-one">
            <small>0 - 50% Charge</small>
            <p>2 HRS</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Vehicle_Img
