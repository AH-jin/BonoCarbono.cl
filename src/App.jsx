import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SimpleFooter from './components/SimpleFooter'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Home />
      </main>
      <SimpleFooter />
    </div>
  )
}

export default App
