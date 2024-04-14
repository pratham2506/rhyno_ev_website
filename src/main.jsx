import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import ContactUs from './routes/ContactUs.jsx'
import Footer from './components/footer/Footer.jsx'
import Spec from './components/vechicle_spec/Spec.jsx'
import SE03 from './routes/SE03.jsx'
import SE03Max from './routes/SE03Max.jsx'
import SE03Lite from './routes/SE03Lite.jsx'
import AboutUs from './routes/AboutUs.jsx'
import BackToTop from './components/backtotop/BackToTop.jsx'
import Privacyp from './routes/Privacyp.jsx'
import CompareTable from './components/comparetable/CompareTable.jsx'
import DetailsForm from './routes/DetailsForm.jsx'
import ScrollToTop from './components/scrolltotop/ScrollToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <ScrollToTop/> */}
      <Navbar/>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/Contact' element={<ContactUs/>}/>
      <Route path='/SE03' element={<SE03/>}/>
      <Route path='/SE03MAX' element={<SE03Max/>}/>
      <Route path='/SE03LITE' element={<SE03Lite/>}/>
      <Route path='/About' element={<AboutUs/>}/>
      <Route path='/Privacy' element={<Privacyp/>}/>
      <Route path='/Compare' element={<CompareTable/>}/>
      <Route path='/Form' element={<DetailsForm/>}/>
    </Routes>
    <Footer/>
    <BackToTop/>
    </BrowserRouter>
  </React.StrictMode>,
)
