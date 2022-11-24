import { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/layout/Navbar'
import Moviepage from './components/Moviepage'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Moviepage />
      <Footer />
    </div>
  )
}

export default App
