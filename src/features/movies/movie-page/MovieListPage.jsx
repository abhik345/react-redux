import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNowPlaying } from "../movieSlice";
import { useNavigate } from "react-router-dom";

const MovieListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nowPlaying, status, error } = useSelector((state) => state.movie);

  const imageUrl = `https://image.tmdb.org/t/p/w500`;

  useEffect(() => {
    dispatch(fetchNowPlaying());
  }, [dispatch]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }


  const handleNavigate = ({movie_id,title}) => {
    navigate(`/movies/${title}`, {
      state: {
        id: movie_id
      }
    });
  }

  

  return (
    <div>
      {nowPlaying.map((movie) => (
        <div key={movie.id} className="movie_card" onClick={() => handleNavigate({movie_id:movie.id,title:movie.title})}>
          <div className="info_section">
            <div className="movie_header">
              <img className="locandina" src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
              <h1>{movie.title}</h1>
              <h4>{movie.release_date}</h4>
            </div>
          </div>
          <div
            className="blur_back"
            style={{ backgroundImage: `url(${imageUrl}${movie.backdrop_path})` }}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieListPage;
