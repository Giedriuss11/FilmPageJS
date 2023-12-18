import React from "react";
import "../styles/Front.css";
import { Link } from "react-router-dom";
import { Navbar, Brand } from "../components/front__page";
import {
  Footer,
  Features,
  Header,
} from "../containers/front__page";

export const FrontPage = () => {
  return (
    <div className="FrontPage">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Features />
      <Footer />
    </div>
  );
};
