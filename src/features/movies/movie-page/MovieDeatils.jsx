import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSingleMovie, clearMovie } from "../singleMovieSlice";

const MovieDeatils = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;

  const { details, status, error } = useSelector(
    (state) => state.movie_details
  );
  useEffect(() => {
    if (state.id) {
      dispatch(fetchSingleMovie(state.id));
    }
    return () => {
      dispatch(clearMovie());
    };
  }, [state.id, dispatch]);

  console.log(details);
  if (status === "loading") return <p>Loading movie details...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  return <></>;
};

export default MovieDeatils;
