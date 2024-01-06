import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import MovieCard from "../components/MovieCard";

import "./Movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faWallet } from "@fortawesome/free-solid-svg-icons";
import { faFileLines, faHourglass } from "@fortawesome/free-regular-svg-icons";

const moviesURL = "https://api.themoviedb.org/3/movie/";
const apiKey = "api_key=8ed200f50a6942ca5bc8b5cdec27ff22";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
            <FontAwesomeIcon icon={faWallet} /> Budget:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
            <FontAwesomeIcon icon={faChartSimple} /> Revenu:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
            <FontAwesomeIcon icon={faHourglass} /> Durée:
            </h3>
            <p>{movie.runtime} minutes</p>
          </div>
          <div className="info description">
            <h3>
            <FontAwesomeIcon icon={faFileLines} /> Description:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
