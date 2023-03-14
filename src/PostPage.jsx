import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";
import api from "./api/posts";

export default function PostPage() {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.id.toString() === id);

  async function handleDelete(id) {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postDate">{post.body}</p>
            <Link to={`/edit/${post.id}`} state={{ posts: posts }}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Hmmm...</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
}
