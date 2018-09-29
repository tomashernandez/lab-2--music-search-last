import React, { Component } from "react";
import ArtistCard from "../ArtistCard";
import { Link } from "react-router-dom";

class ArtistList extends Component {
  generarLista = () => {
    return this.props.artists.map(artist => {
      return (
        <li key={artist.id}>
          <Link to={`/artists/${artist.id}`}>
            <ArtistCard artist={artist} />
          </Link>
        </li>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <ul className="artistsList no-style">{this.generarLista()}</ul>
      </React.Fragment>
    );
  }
}

export default ArtistList;
