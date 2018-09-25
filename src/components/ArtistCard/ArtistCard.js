import React, { Component } from "react";

class CardArtist extends Component {
  render() {
    const { artist, detail } = this.props;
    return (
      <div className="row mb-4">
        <div className="col-4">
          <img src={`${artist.imageUrl}`} alt={artist.name} />
        </div>
        <div className="col-8">
          <h2>{artist.name}</h2>
          {detail && <p>{artist.bio}</p>}
        </div>
      </div>
    );
  }
}

export default CardArtist;
