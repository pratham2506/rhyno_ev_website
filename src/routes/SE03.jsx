import React from 'react'
import Vehicle_Img from '../components/vehicle_img/Vehicle_Img'
import Spec from '../components/vechicle_spec/Spec'
import Spec2 from '../components/vechicle_spec/Spec2'
import ColorPicker from '../components/colorpicker/ColorPicker'
import ScrollToTop from '../components/scrolltotop/ScrollToTop'

const SE03 = () => {
  return (
    <div className='topstart'>
      <Vehicle_Img name="SE 03" kms={100} top={55} charge={4}/>
      <div className="example"><Spec/></div>
      <div className="responsivediv"><Spec2/></div>
      <ColorPicker/>
    </div>
  )
}

export default SE03
