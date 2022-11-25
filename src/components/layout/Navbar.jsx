import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <h1>
           <Link to='/'>
             MoviZZZ
           </Link>
        </h1>

        <button>
           <Link to='/topmovies'>
              Top 250 Movies
           </Link>
        </button>
    </div>
  )
}
