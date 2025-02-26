import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postsSlice';
import singlePostReducer from '../features/posts/singlePostSlice';
import movieReducer from '../features/movies/movieSlice';
import singleMovieReducer from "../features/movies/singleMovieSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    singlePost: singlePostReducer,
    movie: movieReducer,
    movie_details: singleMovieReducer
  },
});
