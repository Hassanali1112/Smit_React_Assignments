import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
     <Header />
     <Home />
     <Footer />
    </>
  )
}

export default App
