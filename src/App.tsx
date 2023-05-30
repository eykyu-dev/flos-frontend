import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='nav-bar'>
      <h1>GREENMIND</h1>
      <div className='header-buttons'>
        <button>Home</button>
        <button>Products</button>
        <button>Contacts</button>
      </div>
      <button className='cart-button'>Cart</button>
    </div>
  )
}

export default App
