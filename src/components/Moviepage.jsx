import React, { useEffect } from 'react'
import { useState } from 'react';
import Bar from './layout/Bar';
import Header from './layout/Header';
import Loading from './layout/Loading';
import Movie from './layout/Movie';

export default function Moviepage() {
  const [movies, setMovies] = useState([]);
  const url = "https://imdb-api.com/en/API/ComingSoon/"
  const apikey ="k_p4nwmk5x"
  const imgUrl = "https://cdn.pixabay.com/photo/2019/07/24/18/32/fantasy-4360934_960_720.jpg"
  const [isLoading, setIsLoading] = useState(false)


  const getPosts = async () =>{
    setIsLoading(true);

      await fetch(url+apikey)
        .then(response => response.json())
        .then(json => {
          setMovies(json.items)
        })
        .catch(error=> console.log(error))

    setIsLoading(false);
  }
  

  useEffect(()=>{
      getPosts();
  }, []);


  return (

    
    <div>
      <Header imgUrl={imgUrl} title={"lorem ipsum"} date={"23, 22, 2022"} actor={"Lorem Ipsum"}/>

     
      <Bar title={"COMING SOON"}/>

      {isLoading ? 
        <Loading />
       : 
        <div className="main__box">
        {movies.map((movie)=>(
          <Movie key={movie.id} img={movie.image} date={movie.releaseState} title={movie.title}/>
        ))}
        </div>
      }


    </div>
  )
}
