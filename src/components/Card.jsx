
function Card({movie}) {
  return (
        <div className="border-2  rounded-md p-2 w-full shadow-lg hover:scale-105 transition cursor-pointer"> 
              <img src={movie.Poster === "N/A" ? "https://placehold.co/250x400?text=Not+Available+Image":movie.Poster} alt={movie.Title} className="p-1 h-[300px] w-[400px] rounded-lg"/>
              <h1 className="font-bold">{movie.Title}</h1>
              <div className="flex justify-between pt-8 font-semibold ">
              <p >{movie.Year}</p>
              <p className="bg-amber-400 px-2 py-1 rounded-md">{movie.Type}</p>
              </div>
        </div>
  )
}

export default Card