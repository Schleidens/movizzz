import React, { useEffect } from 'react'
import { useState } from 'react';

export default function Moviepage() {
  const [movies, setMovies] = useState([]);

  const getPosts = () =>{
    const url = "https://imdb-api.com/en/API/ComingSoon/k_p4nwmk5x"

    fetch(url)
    .then(response => response.json())
    .then(json => {
      setMovies(json.items)
    })
    .catch(error=> console.log(error))
  }

  useEffect(()=>{
      getPosts()
  }, [])
  return (
    <div>

      {movies.map((movie)=>(
        <li key={movie.id}>{movie.title}</li>
      ))}

      {/* {movies} */}
    </div>
  )
}
