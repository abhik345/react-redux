import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const fetchSingleMovie = createAsyncThunk(
    "movies/fetchSingleMovie",
    async (id) => {
        const response = await api.getMovieDetails(id);
        return response
    }
);

const singleMovieSlice = createSlice({
    name : "movie_details",
    initialState : {
        details : null,
        status : 'idle',
        error : null
    },
    reducers : {
        clearMovie: (state) => {
            state.details = null;
            state.status = 'idle';
            state.error = null;
          },
    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchSingleMovie.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchSingleMovie.fulfilled, (state, action) => {
            state.details = action.payload;
            state.status = 'succeeded';
        })
        .addCase(fetchSingleMovie.rejected, (state, action) => {
            state.error = action.payload;
            state.status = 'failed';
        })
    }
})
export const { clearMovie } = singleMovieSlice.actions;
export default singleMovieSlice.reducer;



