import React from 'react'
import Vehicle_Img from '../components/vehicle_img/Vehicle_Img'
import Spec from '../components/vechicle_spec/Spec'
import ColorPicker from '../components/colorpicker/ColorPicker'

const SE03Max = () => {
  return (
    <div>
      <Vehicle_Img name="SE 03 Max" kms={100} top={55} charge={4}/>
      <Spec/>
      <ColorPicker/>
    </div>
  )
}

export default SE03Max
