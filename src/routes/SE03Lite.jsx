import React from 'react'
import Vehicle_Img3 from '../components/vehicle_img/Vehicle_Img3'
import Spec from '../components/vechicle_spec/Spec'
import ColorPicker from '../components/colorpicker/ColorPicker'
import Spec2 from '../components/vechicle_spec/Spec2'
import BuyNow from '../components/buynow/BuyNow'
import Vehicle_Img3N from '../components/vehicle_img/Vehicle_Img3N'

const SE03Lite = () => {
  return (
    <div>
      <Vehicle_Img3N/>
      <div className="example"><Spec/></div>
      <div className="responsivediv"><Spec2/></div>
      <div className="ap-maindiv vehicleinfo">
        <div className="ap-textdiv">
          {/* <h1>About Us</h1> */}
          <p>
          This Rhyno is an entry-level variant tailor with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno but is designed with a smaller battery and motor. Offering the same elegance, comfort, and style, this variant is tailored for those seeking an easy-on-the-pocket solution without sacrificing essential benefits. With an 80-100 km range on a single charge and 	a top speed of 55 km/h, the Rhyno SE03 Lite ensures effortless commuting. If you're in pursuit of thrills or frequently ride with a pillion, we recommend exploring our higher-power variants. Here are some technical details for the SE03 Lite that you might find valuable.
ed for medium-power, single-person usage. This machine maintains the Rhyno standards.
 </p>
        </div>
      </div>
      <ColorPicker/>
      <BuyNow/>
    </div>
  )
}

export default SE03Lite
