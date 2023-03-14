import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import useWindowSize from "./hooks/useWindowSize";

export default function Header({ title }) {
  const { width } = useWindowSize();
  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
}
