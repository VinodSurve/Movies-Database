import { useState } from "react";
import { useEffect } from "react";

const baseUrl="http://www.omdbapi.com/";
const apiKey="f64b628e";

function App() {
const [movies,setMovies]=useState([]);
const [search,setSearch]=useState("");

  async function getMovie(newMovie){
    const response= await fetch(`${baseUrl}?apikey=${apiKey}&s=${newMovie}`);
    const data=await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  }
  
  useEffect((newMovie)=>{
    getMovie("shivaji");
  },[])

  return (
    <div className="max-w-screen-sm mx-auto ">
      <h1 className="text-3xl font-bold text-center">Movies</h1>
      <div className="mt-5 flex justify-center">
        <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} className="border-2 text-lg border-gray-600 h-10 w-72 rounded-md p-2"/>
        <button onClick={()=> getMovie(search)} className="ml-2 border-2 h-11 px-4 bg-purple-600 hover:bg-purple-700 rounded-md text-white ">Search</button>
      </div>

      <div className="grid grid-cols-3 mt-5 gap-5 ">
      {
        movies.map((movie)=>{
          return (
            <div key={movie.imdbID} className="border-2  rounded-md p-2 w-full shadow-lg hover:scale-105 transition cursor-pointer"> 
              <img src={movie.Poster === "N/A" ? "https://placehold.co/250x400?text=Not+Available+Image":movie.Poster} alt={movie.Title} className="p-1 h-[300px] w-[400px] rounded-lg"/>
              <h1 className="font-bold">{movie.Title}</h1>
              <div className="flex justify-between pt-8 font-semibold ">
              <p>{movie.Year}</p>
              <p className="bg-amber-400 px-2 py-1 rounded-md">{movie.Type}</p>
              </div>
            </div>
          )
})

      }
      </div>
    </div>
  )
}

export default App