import React from 'react'
import Vehicle_Img from '../components/vehicle_img/Vehicle_Img'
import Spec from '../components/vechicle_spec/Spec'
import Spec2 from '../components/vechicle_spec/Spec2'
import About from '../components/about/About'
import ColorPicker from '../components/colorpicker/ColorPicker'
import ScrollToTop from '../components/scrolltotop/ScrollToTop'
import BuyNow from '../components/buynow/BuyNow'

const SE03 = () => {
  return (
    <div className='topstart'>
      <Vehicle_Img/>
      <div className="example"><Spec/></div>
      <div className="responsivediv"><Spec2/></div>
      <div className="ap-maindiv vehicleinfo">
        <div className="ap-textdiv">
          {/* <h1>About Us</h1> */}
          <p>
          Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
 </p>
        </div>
      </div>
      
      <ColorPicker/>
      <BuyNow/>
    </div>
  )
}

export default SE03
