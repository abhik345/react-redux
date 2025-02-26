import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSinglePost = createAsyncThunk(
  'singlePost/fetchSinglePost',
  async (postId) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return response.data;
  }
);

const singlePostSlice = createSlice({
  name: 'singlePost',
  initialState: {
    post: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    clearPost: (state) => {
      state.post = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSinglePost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSinglePost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.post = action.payload;
      })
      .addCase(fetchSinglePost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { clearPost } = singlePostSlice.actions;
export default singlePostSlice.reducer;
