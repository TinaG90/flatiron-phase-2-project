import "./Styling/navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="Navigation">
      <Link to="/Home">Home</Link>
      <Link to="/BookShelf">Browse BookShelf</Link>
      <Link to="/Library">Public Library</Link>
    </nav>
  );
}

export default Navigation;
