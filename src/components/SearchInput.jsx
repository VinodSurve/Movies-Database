
function SearchInput({search,setSearch,getMovie}) {
  return (
    <div className="mt-5 flex justify-center">
        <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} className="border-2 text-lg border-gray-600 h-10 w-72 rounded-md p-2"/>
        <button onClick={()=> getMovie(search)} className="ml-2 border-2 h-11 px-4 bg-purple-600 hover:bg-purple-700 rounded-md text-white ">Search</button>
      </div>
  )
}

export default SearchInput