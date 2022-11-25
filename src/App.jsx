import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/layout/Navbar'
import Moviepage from './components/Moviepage'
import Topmovies from './components/Topmovies'

function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' exact element={<Moviepage />} />
        <Route path='/topmovies' element={<Topmovies />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
