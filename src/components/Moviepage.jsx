import React, { useEffect } from 'react'
import { useState } from 'react';
import Header from './layout/Header';

export default function Moviepage() {
  const [movies, setMovies] = useState([]);
  const url = "https://imdb-api.com/en/API/ComingSoon/"
  const apikey ="k_p4nwmk5x"
  const imgUrl = "https://cdn.pixabay.com/photo/2019/07/24/18/32/fantasy-4360934_960_720.jpg"



  const getPosts = () =>{

    fetch(url+apikey)
    .then(response => response.json())
    .then(json => {
      setMovies(json.items)
    })
    .catch(error=> console.log(error))
  }

  useEffect(()=>{
      getPosts();
  }, [])
  return (

    
    <div>
      <Header imgUrl={imgUrl} title={"lorem ipsum"} date={"23, 22, 2022"} actor={"Lorem Ipsum"}/>

      {movies.map((movie)=>(
        <li key={movie.id}>{movie.title}</li>
      ))}

    </div>
  )
}
