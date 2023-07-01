import "./Styling/app.css";
import Navigation from "./Navigation";
import Home from "./Home";
import BookShelf from "./Bookshelf";
import Library from "./Library";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>MY Digital BookShelf</h2>
      </header>
      <Navigation />
      <Home />
      <BookShelf />
      <Library />
    </div>
  );
}

export default App;
