import React, { Component } from "react";
import AlbumCard from "../AlbumCard";
import { Link } from "react-router-dom";

class AlbumList extends Component {
  generarListaAlbumnes = () => {
    return this.props.albums.map(album => {
      return (
        <li key={album.id}>
          <Link to={`/albums/${album.id}`}>
            <AlbumCard album={album} />
          </Link>
        </li>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <ul className="albumList no-style">{this.generarListaAlbumnes()}</ul>
      </React.Fragment>
    );
  }
}

export default AlbumList;
