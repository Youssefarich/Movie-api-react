import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const imagesURL = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
      <FontAwesomeIcon icon={faStar} /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
    </div>
  );
};

export default MovieCard;
