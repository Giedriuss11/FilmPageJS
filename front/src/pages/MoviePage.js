import React from "react";
import "../styles/Movie.css";
import { LeftSideBar, SearchBar } from "../components/movie__page";
import { Films } from "../containers/movie__page";

export const MoviePage = () => {
  return (
    <div className="MoviePage">
          <LeftSideBar />
      <div className="movie__rightside">
        <SearchBar />
        <Films />
      </div>
    </div>
  );
};
