import { useParams, Link } from "react-router-dom";

export default function PostPage({ posts, handleDelete }) {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postDate">{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
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
