import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchSinglePost, clearPost } from './singlePostSlice';

const PostDetails = () => {
  const { post, status, error } = useSelector((state) => state.singlePost);
  const dispatch = useDispatch();
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (postId) {
      dispatch(fetchSinglePost(postId));
    }

    return () => {
      dispatch(clearPost());
    };
  }, [dispatch, postId]);

  if (status === 'loading') return <p>Loading post...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default PostDetails;
