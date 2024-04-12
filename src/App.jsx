import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Products from './components/products/Products'
import Contact from './components/contact/Contact'
import SnapScroll1 from './components/snap_scroll1/SnapScroll1'
import AboutPage from './components/about-page/AboutPage'
import Privacy from './components/privacy_policy/Privacy'
import Vehicle_Img from './components/vehicle_img/Vehicle_Img'
import Vehicle_Img2 from './components/vehicle_img/Vehicle_Img2'
import Spec from './components/vechicle_spec/Spec'
import ColorChange from './components/colorchange/ColorChange'
import BackToTop from './components/backtotop/BackToTop'
import Example from './components/rotate/HorizontalScrollCarousel'
import ColorPicker from './components/colorpicker/ColorPicker'
import CompareTable from './components/comparetable/CompareTable'
import Vehicle_Img3 from './components/vehicle_img/Vehicle_Img3'
import ResponsiveCard from './components/responsive-cards/ResponsiveCard'
import './App.css'
import Form from './components/form/Form'
import BuyNow from './components/buynow/BuyNow'


function App() {
  

  return (
    <div className='mainscroll'>
      {/* <Navbar/> */}
      <Home/>
      {/* <CompareTable/> */}
      {/* <AboutPage/> */}
      {/* <About/> */}
      <Vehicle_Img name="SE 03" kms={100} top={55} charge={4}/>
      <Vehicle_Img2 name="SE 03 LITE" kms={100} top={55} charge={4}/>
      <Vehicle_Img3 name="SE 03 MAX" kms={100} top={55} charge={4}/>
      
      {/* <div className="example"> <Example/></div> */}
      {/* <div className="responsivediv"> <ResponsiveCard/></div> */}
      {/* <Form/> */}
      <BuyNow/>
      {/* <ColorPicker/> */}
      {/* <Spec/> */}
      {/* <ColorChange/> */}
      {/* <Privacy/> */}
      {/* <SnapScroll1/> */}
      {/* <Products/> */}
      {/* <Contact/> */}
      {/* <Footer/> */}
      {/* <BackToTop/> */}
      {/* <Cursor/> */}
    </div>
  )
}

export default App
