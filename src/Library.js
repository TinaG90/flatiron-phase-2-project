import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Styling/library.css";

function Library() {
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

  const listOfItems = data.map((item) => {
    return (
      <div key={uuidv4()} className="Img-Div">
        <img src={item.image} alt={item.name}></img>
        <p>{item.name}</p>
      </div>
    );
  });
  console.log(listOfItems);
  return (
    <div>
      <h3>This Is My My Library</h3>
      <div className="Image-Container">{listOfItems}</div>
    </div>
  );
}
export default Library;
