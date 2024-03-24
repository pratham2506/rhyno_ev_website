import React from 'react'
import './Spec.css'
import { MdOutlineOfflineBolt } from "react-icons/md";
import { PiPersonSimpleBikeFill } from "react-icons/pi";
import { PiBatteryHighBold } from "react-icons/pi";
import { MdOutlineEarbudsBattery } from "react-icons/md";
import { RxColorWheel } from "react-icons/rx";
import { RiEBike2Line } from "react-icons/ri";
import IMG1 from '../../assets/12.png'
import bolt from '../../assets/flash.png'
import battery from '../../assets/lighting.png'
import scooter from '../../assets/scooter.png'
import scooter1 from '../../assets/scooter1.png'
import wheel from '../../assets/wheel.png'
import charger from '../../assets/charger.png'


const Spec = () => {
  return (
    <div>
      <div className="spec-maindiv">
        <div className="spec-info1">
            <div className="spec-inside">
            <img src={bolt} alt="" className='spec-icon'/>
        <p>True Power</p>
        <p className='spec-grey'>Experience Acceleration like no Other 00</p>
            </div>

            <div className="spec-inside">
            <img src={battery} alt="" className='spec-icon'/>
        <p>True Power</p>
        <p className='spec-grey'>Experience Acceleration like no Other 00</p>
            </div>

            <div className="spec-inside">
            <img src={scooter} alt="" className='spec-icon'/>
        <p>True Power</p>
        <p className='spec-grey'>Experience Acceleration like no Other 00</p>
            </div>
        </div>

        <div className="spec-centerimg">
            <img src={IMG1} alt="" />
        </div>

        <div className="spec-info2">
            <div className="spec-inside">
            <img src={scooter1} alt="" className='spec-icon'/>
        <p>True Power</p>
        <p className='spec-grey'>Experience Acceleration like no Other 00</p>
            </div>

            <div className="spec-inside">
            <img src={wheel} alt="" className='spec-icon'/>
        <p>True Power</p>
        <p className='spec-grey'>Experience Acceleration like no Other 00</p>
            </div>

            <div className="spec-inside">
            <img src={charger} alt="" className='spec-icon'/>
        <p>True Power</p>
        <p className='spec-grey'>Experience Acceleration like no Other 00</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Spec
