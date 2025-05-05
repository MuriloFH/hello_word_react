import { useState } from 'react'
import './App.css'
import HelloWorld from './hello-world/HelloWorld'
import Calculadora from './calculadora/Calculadora.jsx'
import CalculadoraImc from './calculadora_imc/CalculadoraImc.jsx'
import Home from './home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Compras from './compras/compras.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/hello-world' element={<HelloWorld />}></Route>
        <Route path='/calculadora' element={<Calculadora />}></Route>
        <Route path='/calcuradora_imc' element={<CalculadoraImc />}></Route>
        <Route path='/compras' element={<Compras />}></Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App
