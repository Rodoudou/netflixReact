import React from "react";
import "../App.css";
const Section = ({ category, images }) => {
  console.log(category);
  console.log(images);
  return (
    <div className="container">
      <p className="title">{category}</p>
      <div className="movies-List">
        {images.map((img, index) => (
          <img key={index} src={img} alt="img" />
        ))}
      </div>
    </div>
  );
};

export default Section;
