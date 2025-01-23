import { useState, useEffect} from 'react'
import './Home.css'
import SearchIcon from "/search.png";
import MovieCard from './MovieCard';

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=d9b2e06";


function Home(){
  const [searchTerm, setSearchTerm] = useState();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Spider Man");
  }, []);

  const searchMovies = async (searchTerm) => {
    const response = await fetch(`${API_URL}&s=${searchTerm}`);
    const data = await response.json();
  


    setMovies(data.Search);
  }


  return (

  <div className='app'>
    <h1>Netflix Clone</h1>

    <div className='search'>
      <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type='text' placeholder='Search for movies' />
      <img src={SearchIcon} alt='Search' onClick={() => searchMovies(searchTerm)} />
      </div>
   

      {movies?.length > 0 ? (
  <div className="container">
    {movies.map((movie, index) => (
      <MovieCard key={index} movie={movie} />
    ))}
  </div>
) : (
  <div className="empty">
    <h2>No movies found</h2>
  </div>
)}

  </div>
  )
}


export default Home;