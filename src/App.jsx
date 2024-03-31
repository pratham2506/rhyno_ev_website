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
import Spec from './components/vechicle_spec/Spec'
import ColorChange from './components/colorchange/ColorChange'
import BackToTop from './components/backtotop/BackToTop'
import Example from './components/rotate/HorizontalScrollCarousel'
import ColorPicker from './components/colorpicker/ColorPicker'
import CompareTable from './components/comparetable/CompareTable'

function App() {
  

  return (
    <>
      {/* <Navbar/> */}
      <Home/>
      {/* <CompareTable/> */}
      {/* <AboutPage/> */}
      {/* <About/> */}
      <Vehicle_Img/>
      <Example/>
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
    </>
  )
}

export default App
