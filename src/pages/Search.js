import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";

const searchURL = "https://api.themoviedb.org/3/search/movie";
const apiKey = "api_key=8ed200f50a6942ca5bc8b5cdec27ff22";



const Search = () => {
    const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    
    <div className="container">
        
      <h2 className="title">
      Results for: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
