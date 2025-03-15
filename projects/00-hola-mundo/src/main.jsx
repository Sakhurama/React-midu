import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'

// Así también funciona, esta es la base de como funciona react
const Boton = ({texto}) => {
  return (<button>{texto}</button>)
}

createRoot(document.getElementById('root')).render(
  <>
    <div style={{marginBottom: '50px'}}>
      <button>boton 1</button>
      <button>boton 1</button>
      <button>boton 1</button>
      <Boton texto="botonsin"/>
      <Boton texto="botonson"/>
    </div>
    <App />
  </>
)
