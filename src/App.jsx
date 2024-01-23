import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Footer from './components/Footer'
import Home from './pages/Home'
import Exchanges from './pages/Exchanges'
import CoinDetails from './pages/CoinDetails'
import Coins from './pages/Coins'

const App = () => {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/exchanges' element={<Exchanges/>}/>
      <Route path='/coin/:id' element={<CoinDetails/>}/>
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App