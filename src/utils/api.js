import axios from "axios";


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzQ1NmVmYTRmNjFkYTA1MmNkN2EwNTBmOTYyOGY5NSIsIm5iZiI6MTY5ODg5NzI1OC45MjEsInN1YiI6IjY1NDMxZDZhMjg2NmZhMDEzOGE0ZjQyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.go9YpaWq7qzc0-JUAfmhsPjDqupN9b5vgOlM7frLDs0'
    }
  };


  const api = {
    getNowPlaying : async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        return response.data.results
    },
    getMovieDetails : async (movie_id) => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,options);
      return response.data
    }
  }


  export default api;