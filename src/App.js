import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Home from './Components/Home.js'
import Filter from './Components/Filter.js'
import Nav from './Components/Nav'
import BuyPage from './Components/BuyPage.js'

const App = () => {
  return (
  <Router>
    <Nav/>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/:genre" element={<Filter/>}></Route>
      <Route path="/buy/:title" element={<BuyPage/>}></Route>
    </Routes>
  </Router>
  )
}

export default App