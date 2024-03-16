import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Testimonials from './components/testimonials/Testimonial'
import Products from './components/products/Products'

function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Products/>
      {/* <Testimonials/> */}
      <Footer/>
      {/* <Cursor/> */}
    </>
  )
}

export default App
