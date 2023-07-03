import "./Styling/app.css";
import Navigation from "./Navigation";
import Home from "./Home";
import BookShelf from "./Bookshelf";
import Library from "./Library";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const URL = "http://localhost:4000/toys";

  const fetchData = async () => {
    const response = await fetch(URL);
    const results = await response.json();
    setData(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>MY Digital BookShelf</h2>
      </header>
      <Navigation />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/BookShelf" element={<BookShelf data={data} />} />
        <Route path="/Library" element={<Library data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
