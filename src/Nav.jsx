import { Link } from "react-router-dom";

export default function Nav({ search, setSearch }) {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(event) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/post">Post</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
