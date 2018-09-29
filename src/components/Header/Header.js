import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

import Logo from "../Logo";
import svgPlayList from "../../assets/img/playlist.svg";
import { PLAYLIST_ID } from "../../constants";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="container">
          <a className="mr-2" href="/">
            <Logo />
          </a>

          <NavLink to={`/playlist/${PLAYLIST_ID}`}>
            <img
              src={svgPlayList}
              width="50px;"
              id="playListIcon"
              alt="playlist"
              title="playList"
            />
          </NavLink>
        </div>
      </div>
    );
  }
}
