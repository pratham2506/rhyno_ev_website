import React from 'react'
import Vehicle_Img from '../components/vehicle_img/Vehicle_Img'
import Spec from '../components/vechicle_spec/Spec'
import ColorPicker from '../components/colorpicker/ColorPicker'
import Spec2 from '../components/vechicle_spec/Spec2'

const SE03Lite = () => {
  return (
    <div>
      <Vehicle_Img name="SE 03 Lite" kms={100} top={55} charge={4}/>
      <div className="example"><Spec/></div>
      <div className="responsivediv"><Spec2/></div>
      <ColorPicker/>
    </div>
  )
}

export default SE03Lite
