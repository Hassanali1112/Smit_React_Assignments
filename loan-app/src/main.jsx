import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './Pages/auth/Login.jsx'
import Registeration from './Pages/auth/Registeration.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
    <Routes >
      <Route path='/' element={<App />} />
      <Route path='/signup' element={<Registeration />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
