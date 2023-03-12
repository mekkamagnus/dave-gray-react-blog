export default function NewPost({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) {
  return (
    <main className="NewPost">
      <h2>NewPost</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(event) => setPostTitle(event.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(event) => setPostBody(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
