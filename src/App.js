import "./Styling/app.css";
import Navigation from "./Navigation";
import Home from "./Home";
import BookShelf from "./Bookshelf";
import Library from "./Library";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [page, setPage] = useState({ Home });

  return (
    <div className="App">
      <header className="App-header">
        <h2>MY Digital BookShelf</h2>
      </header>
      <Navigation onSetPage={setPage} />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/BookShelf" element={<BookShelf />} />
        <Route path="/Library" element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
