import React from "react";
import "./header.css";
import moviePoster from "../../../assets/poster.png";

const movieImages = [1, 2, 3, 4].map((index) =>
  require(`../../../assets/newMovies/${index}.jpg`)
);

const Header = () => {
  return (
    <div className="front__header section__padding" id="home">
      <div className="front__header-content">
        <h1 className="gradient__text">
          In here you will have the best experience watching movies
        </h1>
        <p>
          Discover the magic of the silver screen on our movie page, where we
          bring the world of cinema to your fingertips. Dive into a treasure
          trove of films that span genres, eras, and cultures.
        </p>
        <div className="front__header-content__input">
          <input
            type="text"
            placeholder="Here, just write your favorite Movie name"
          />
          <button type="button">Submit Movie name</button>
        </div>
        <div className="front__header-content__movies">
          <div>
                  {movieImages.map((image, index) => (
            <img src={image} alt={`Movie ${index + 1}`} key={index} />
          ))}
          </div>
          <p>21 New movies have been uploaded today</p>
        </div>
        
      </div>
      <div className="front__header-image">
        <img src={moviePoster} alt="" />
      </div>
    </div>
  );
};

export default Header;
