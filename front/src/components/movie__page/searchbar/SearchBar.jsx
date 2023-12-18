import React, { useRef } from "react";
import "./searchbar.css";
import { BsSearch } from "react-icons/bs";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { setToggle } from "../../../features/userReducer";

import http from "../../../plugins/http";
import { setData } from "../../../features/userReducer";

const SearchBar = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const isClosedto = useSelector((store) => store.user.toggle);
  const userName = useSelector((store) => store.user.userLog.username);
  console.log("userName:", userName);

  const findFilm = async () => {
    const inputValue = inputRef.current.value;
    const res = await http.post("SearchByKeyWord", { word: inputValue });
    if (res.success) {
      dispatch(setData(res.data.films));
    }
  };

  const handleIconClick = () => {
    inputRef.current.focus();
  };

  const closeBar = () => {
    dispatch(setToggle());
  };

  return (
    <div className="movies__searchbar">
      {!isClosedto && (
        <div className="movie__searchbar-icon">
          <LiaLongArrowAltRightSolid onClick={closeBar} className="arrowIcon" />
        </div>
      )}

      <div className="movies__searchbar-search">
        <input
          onChange={findFilm}
          ref={inputRef}
          type="text"
          placeholder="Find your movie"
        />
        <BsSearch className="search-icon" onClick={handleIconClick} />
      </div>
      {userName && (
        <div className="movies_searchbar-person">
          <h1>{userName}</h1>
          <img
            src="https://assets.materialup.com/uploads/30080ad4-97ee-47f7-a98a-c0d2e8d704b2/preview"
            alt="User Avatar"
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
