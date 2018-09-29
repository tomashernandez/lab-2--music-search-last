import React, { Component } from "react";

class AlbumCard extends Component {
  render() {
    const { album, artist } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-4">
            <img src={`${album.imageUrl}`} alt={album.name} />
          </div>
          <div className="col-8">
            <h2>{album.name}</h2>
            {artist && <h3>{album.artist.name}</h3>}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AlbumCard;
