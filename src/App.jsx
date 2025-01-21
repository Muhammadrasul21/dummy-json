import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Products from './components/products/Product'

function App() {
  const [show, setShow] = React.useState(false)
 
  return (
    <>
   <Header/>
      <Products/>
    </>
  )
}

export default App
