import { useStoreState } from "easy-peasy";

export default function Footer() {
  const postCount = useStoreState((state) => state.postCount);
  const today = new Date();
  return (
    <footer className="Footer">
      <p>{postCount} Blog Posts</p>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
}
