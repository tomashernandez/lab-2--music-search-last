import React, { Component } from "react";
import AlbumCard from "../AlbumCard";

class AlbumList extends Component {
  generarListaAlbumnes = () => {
    return this.props.albums.map(album => {
      return (
        <li key={album.id}>
          <a href={`/albums/${album.id}`}>
            <AlbumCard album={album} />
          </a>
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
