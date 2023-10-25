import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React from 'react'
import Header from "./component/Header"
import Home from './component/Home'
import About from './component/About'
import Certificates from './component/Certificates'
import Newspaper from './component/Newspaper'
import Donate from './component/Donate'
import Footer from "./component/Footer"

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/newsPaper" element={<Newspaper />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>

      <Footer />
    </Router>
  )
}
