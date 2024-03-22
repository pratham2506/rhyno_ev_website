import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Testimonials from './components/testimonials/Testimonial'
import Products from './components/products/Products'
import Contact from './components/contact/Contact'
import SnapScroll1 from './components/snap_scroll1/SnapScroll1'
import AboutPage from './components/about-page/AboutPage'
import Privacy from './components/privacy_policy/Privacy'

function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      {/* <AboutPage/> */}
      {/* <About/> */}
      {/* <Privacy/> */}
      {/* <SnapScroll1/> */}
      <Products/>
      {/* <Contact/> */}
      {/* <Testimonials/> */}
      <Footer/>
      {/* <Cursor/> */}
    </>
  )
}

export default App
