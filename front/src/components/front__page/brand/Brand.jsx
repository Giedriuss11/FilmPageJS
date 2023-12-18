import React from "react";
import "./brand.css";

// Define the image filenames
const logoNames = ["Facebook", "Instagram", "LinkedIn", "reddit"];
const logos = logoNames.map((name) =>
  require(`../../../assets/logos/${name}.png`)
);

const Brand = () => {
  return (
    <div className="front__brand section__padding">
      <div>
        {logos.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Logo ${index + 1}`} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
