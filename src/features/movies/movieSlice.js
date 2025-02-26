import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const fetchNowPlaying = createAsyncThunk(
  "movies/fetchNowPlaying",
  async () => {
    const response = await api.getNowPlaying();
    return response
  }
);


const movieSlice = createSlice({
    name: 'movie',
    initialState: {
      nowPlaying: [],
      status : 'idle',
      error : null
    },
    reducers: {},
    extraReducers : (builder) => {
        builder
        .addCase(fetchNowPlaying.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchNowPlaying.fulfilled, (state,action) => {
            state.nowPlaying = action.payload;
            state.status = 'succeeded';
        })
        .addCase(fetchNowPlaying.rejected, (state,action) => {
            state.error = action.payload;
            state.status = 'failed'
        })
    }
})


export default movieSlice.reducer;