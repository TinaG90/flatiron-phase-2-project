import { v4 as uuidv4 } from "uuid";
import "./Styling/library.css";

// The Library component houses all books
function Library({ data }) {
  // this functions maps throught the array of books
  // and grabs the image and name.
  const renderItems = data.map((item) => {
    return (
      <div key={uuidv4()} className="Img-Div">
        <img src={item.image} alt={item.name}></img>
        <p>{item.name}</p>
      </div>
    );
  });
  console.log(renderItems);
  // calling renderItems in the return renders data to the DOM
  return (
    <div>
      <h3>This Is My My Library</h3>
      <div className="Image-Container">{renderItems}</div>
    </div>
  );
}
export default Library;
