import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSingleMovie, clearMovie } from "../singleMovieSlice";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;

  const { details, status, error } = useSelector((state) => state.movie_details);

  useEffect(() => {
    if (state?.id) {
      dispatch(fetchSingleMovie(state.id));
    }
    return () => {
      dispatch(clearMovie());
    };
  }, [state?.id, dispatch]);

  if (status === "loading") return <p className="text-center text-white">Loading movie details...</p>;
  if (status === "failed") return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {details && (
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
          <img
            className="w-full md:w-1/3 rounded-lg shadow-lg"
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt={details.title}
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{details.title}</h1>
            <p className="text-gray-400 mt-2">⭐ {details.vote_average} / 10</p>
            <p className="mt-4">{details.overview}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Genres:</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {details.genres?.map((genre) => (
                  <span key={genre.id} className="bg-gray-800 px-3 py-1 rounded-full">
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
