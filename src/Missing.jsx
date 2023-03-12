import { Link } from "react-router-dom";
export default function Missing() {
  return (
    <main className="Missing">
      <h2>Page Not Found</h2>
      <p>Hmm....</p>
      <p>
        <Link to="/">Vist Our Homepage</Link>
      </p>
    </main>
  );
}
