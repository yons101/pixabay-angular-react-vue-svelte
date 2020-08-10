import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("Nature");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=17039239-7ccdc3f5c80caa80d628661b2&q=${searchTerm}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <div className="App">
      <Navbar />
      <Search search={(value) => setSearchTerm(value)} />

      {!loading && (
        <div className="container">
          <div className="row  justify-content-center">
            {images.map((image, i) => (
              <ImageCard image={image} key={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
