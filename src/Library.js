import { useState, useEffect } from "react";

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
  console.log(data);

  const renderData = data.map(() => {
    const img = (
      <img src={data.image} alt="Item-Image">
        {data.name}
      </img>
    );
    // return (
    //   <div>
    //     <img src={data.imageUrl} alt="Item-Image">
    //       {data.name}
    //     </img>
    //   </div>
    // );
  });

  return (
    <div>
      <h3>This Is My My Library</h3>
    </div>
  );
}
export default Library;
