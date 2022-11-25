import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/layout/Navbar'
import Moviepage from './components/Moviepage'

function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' exact element={<Moviepage />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
