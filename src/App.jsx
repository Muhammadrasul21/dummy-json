import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Login from "./pages/Login/Login"
import Delivery from "./pages/delivery/Delivery"
import Detail from './pages/detail/Detail'
import NotFound from './pages/not-found/NotFound'

function App() {
  const [show, setShow] = React.useState(false)
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/delivery" element={<Delivery/>}/>
      <Route path="/product/:id" element={<Detail/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}
export default App
