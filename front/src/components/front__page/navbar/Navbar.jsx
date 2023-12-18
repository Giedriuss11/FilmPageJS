import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../../assets/FilmFest.png";

import http from "../../../plugins/http";

const Menu = ({ fetchData }) => (
  <>
    <p>
      <a href="">Home</a>
    </p>
    <p>
      <a onClick={fetchData} href="/moviepage">
        Films
      </a>
    </p>
    <p>
      <a href="">Favorite</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const fetchData = async () => {
    await http.post("filmsData", { "name": "Film page" });
  };

  return (
    <div className="front__navbar">
      <div className="front__navbar-links">
        <div className="front__navbar-links_logo">
          <img src={logo} alt="" />
        </div>
        <div className="front__navbar-links_container">
          <Menu fetchData={fetchData} />
        </div>
      </div>
      <div className="front__navbar-sign">
        <p>
          <a href="#login">Sign in</a>
        </p>
        <a href="/singup" className="button__nav">Sign up</a>
      </div>
      <div className="front__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          >
            Open Menu
          </RiMenu3Line>
        )}
        {toggleMenu && (
          <div className="front__navbar-menu_container scale-up-center">
            <div className="front__navbar-menu_container-links">
              <Menu fetchData={fetchData} />
              <div className="front__navbar-menu_container-links-sign">
                <p>
                  <a href="#login">Sign in</a>
                </p>
                <a href="/singup" className="button__nav">Sign up</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
