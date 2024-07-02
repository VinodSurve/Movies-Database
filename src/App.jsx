import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header"
import SearchInput from "./components/SearchInput";
import Card from "./components/Card";

const baseUrl="http://www.omdbapi.com/";
const apiKey="f64b628e";

function App() {
const [movies,setMovies]=useState([]);
const [search,setSearch]=useState("");

  async function getMovie(newMovie){
    const response= await fetch(`${baseUrl}?apikey=${apiKey}&s=${newMovie}`);
    const data=await response.json();
    setMovies(data.Search);
  }
  
  useEffect((newMovie)=>{
    getMovie("shivaji");
  },[])

  return (
    <div className="max-w-screen-sm mx-auto ">
      <Header/>
      <SearchInput search={search} getMovie={getMovie} setSearch={setSearch}/>

      <div className="grid grid-cols-3 mt-5 gap-5 ">
      {
        movies.map((movie)=>{
          return (
            <Card movie={movie} key={movie.imdbID}/>
          )
        })
      }
      
      </div>
    </div>
  )
}

export default App