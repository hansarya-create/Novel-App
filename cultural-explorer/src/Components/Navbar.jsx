import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/countries">Countries</Link>
      <Link to="/festivals">Festivals</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;