import React, { Component } from "react";
import ArtistList from "../ArtistList";

class TopArtists extends Component {
  render() {
    return <ArtistList artists={this.props.topArtists} />;
  }
}

export default TopArtists;
