import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// import Posts from "../features/posts/Posts";
import PostDetails from "../features/posts/PostDetails";
import MovieListPage from "../features/movies/movie-page/MovieListPage";
import MovieDeatils from "../features/movies/movie-page/MovieDeatils";

const ProjectRoutes = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<MovieListPage/>}/>
                <Route path="/posts/:postId" element={<PostDetails/>}/>
                <Route path="/movies/:name" element={<MovieDeatils/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default ProjectRoutes