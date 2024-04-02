import React from 'react'
import './Vehicle_Img.css'

const Vehicle_Img3 = (props) => {
  return (
    <div className='vi-bgimg'>
      <div className="vi-maindiv">
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
      </div>
    </div>
  )
}

export default Vehicle_Img3
