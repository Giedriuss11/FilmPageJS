import React from "react";
import "./leftsidebar.css";
import icon from "../../../assets/FilmFest.png";
import {
  LiaLongArrowAltRightSolid,
  LiaLongArrowAltLeftSolid,
} from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { setToggle } from "../../../features/userReducer";

import http from "../../../plugins/http";
import { setData, setName } from "../../../features/userReducer";

const LeftSideBar = () => {
  const dispatch = useDispatch();
  const isClosedto = useSelector((store) => store.user.toggle);

  const closeBar = () => {
    dispatch(setToggle());
  };

  const findFilm = async (genre) => {
    const res = await http.post("FindFilms", { name: genre });
    if (res.success) {
      dispatch(setName(res.data.category));
      dispatch(setData(res.data.films));
    }
  };

  const genres = [
    "All Films",
    "Action",
    "Animation",
    "Horror",
    "Comedy",
    "Fantasy",
    "Thriller",
  ];

  return (
    <div
      id="leftsidebar"
      className={`movie__leftsidebar ${
        isClosedto ? "slide-right" : "slide-left"
      }`}
    >
      <div className="movie__leftsidebar-topicon">
        <div className="movie__leftsidebar-topicon__backBuuton">
          <a href="/"> Main Page</a>
        </div>
        <img src={icon} alt="" />
      </div>
      <div className="movie__leftsidebar-closeArrow">
        <LiaLongArrowAltLeftSolid onClick={closeBar} className={`arrowIcon`} />
      </div>
      <div className="movie__leftsidebar-genres">
        {genres.map((genre, index) => (
          <div key={index} className="movie__leftsidebar-genres__links">
            {" "}
            <p>
              <a onClick={() => findFilm(genre)}>{genre}</a>
            </p>
            <LiaLongArrowAltRightSolid className="arrowIcon" />
          </div>
        ))}
        <div className="movie__leftsidebar-genres__bottomLine"></div>
      </div>
    </div>
  );
};

export default LeftSideBar;
