import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [alboms, setAlboms] = useState([]);
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setAlboms(data));
  }, []);

  const selectAlbum = (e) => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${e.target.selectedIndex}`
    )
      .then((res) => res.json())
      .then((data) => setImgs(data));
  };

  return (
    <div className="App">
      <h1>Select an album:</h1>
      <select name="alboms" id="alboms" onChange={selectAlbum}>
        <option>Select an album:</option>
        {alboms.map((albom) => (
          <option value={albom.title} key={albom.id}>
            {albom.title}
          </option>
        ))}
      </select>

      <br />
      <br />
      {imgs.map((img, i) => (
        <img key={i} src={img.thumbnailUrl} alt={img.title} />
      ))}
    </div>
  );
}

export default App;

// To get the albums: https://jsonplaceholder.typicode.com/albums

// To get the photos of an album: https://jsonplaceholder.typicode.com/photos?albumId=[ID] where [ID] is the album's ID of course.
