import React from "react";
import "./films.css";
import { useSelector } from "react-redux";

const Films = () => {
  const data = useSelector((store) => store.user.data);
  const name = useSelector((store) => store.user.name);

  if (!data) {
    return (
      <div className="movies__loading-screen">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (data.length === 0) {
    return (
      <div className="movies__empty-screen">
        <h1>No films available</h1>
      </div>
    );
  }

  return (
    <div className="movies__films">
      <div className="movies__films-pagename">
        <h1>{name === "" ? "Film page" : name}</h1>
      </div>
      <div className="movies__films-gridbox">
        {data && data.map((film, index) => (
          <div key={index} className="movies__films-gridbox__card">
            <div className="movies__films-gridbox__card-image">
              <img src={film.image} alt="" />
            </div>
            <h1>{film.title}</h1>
            <div className="movies__films-gridbox-cantegorys">
              {film.category.map((category, index) => (
                <h3 key={index}>{category}</h3>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Films;
