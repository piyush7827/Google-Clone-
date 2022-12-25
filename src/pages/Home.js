/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./home.css";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import Search from "../pages/Search";
function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-headerleft">
          <p>About</p>
          <p>Store</p>
        </div>
        <div className="home-headerright">
          <p>Gmail</p>
          <p>Images</p>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home-body">
        <img
          src="http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
          alt="google"
        />
        <div className="home-inputcontainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
