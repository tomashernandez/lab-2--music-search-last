import React, { Component } from "react";
import ArtistCard from "../ArtistCard";

class ArtistList extends Component {
  generarLista = () => {
    return this.props.artists.map(artist => {
      return (
        <li key={artist.id}>
          <a href={`/artists/${artist.id}`}>
            <ArtistCard artist={artist} />
          </a>
        </li>
      );
    });
  };

  render() {
    return <ul className="artistsList">{this.generarLista()}</ul>;
  }
}

export default ArtistList;
