import "./App.css";
import React, { useState } from "react";
function App() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const fetchImages = () => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=32mu9tNCXVNcWadSYYdJaVClvvO2DDcjoZB8xjqLWYc&query=${value}&username`
    )
      .then((a) => a.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  };
  return (
    <>
      <div className="App">
        <div className="myDiv">
          <span>Search</span>
          <input
            style={{ width: "30%" }}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => fetchImages()}>GO</button>
        </div>
        <div className="gallery">
          {results.map((item) => {
            return (
              <img className="item" key={item.id} src={item.urls.regular} />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default App;
