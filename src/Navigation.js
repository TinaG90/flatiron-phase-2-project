import "./Styling/navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="Navigation">
      <ul>
        <Link to="/Home">Home</Link>
      </ul>
      <ul>
        <Link to="/BookShelf">Browse BookShelf</Link>
      </ul>
      <ul>
        <Link to="/Library">Public Library</Link>
      </ul>
    </nav>
  );
}

export default Navigation;
