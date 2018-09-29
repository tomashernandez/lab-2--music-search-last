import React, { Component } from "react";
import * as API from "../../services/react-api-music";
import Loader from "../../components/Loader";
import AlbumCard from "../../components/AlbumCard";
import TrackList from "../../components/TrackList";

class Albums extends Component {
  state = {
    error: false,
    album: null,
    loading: true
  };

  getAlbum = idAlbum => {
    this.setState({
      loading: true,
      error: null
    });
    return API.getAlbum(idAlbum)
      .then(data => {
        this.setState({
          loading: false,
          album: data.data
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        });
      });
  };

  componentDidMount() {
    let albumId = this.props.match.params.albumId;
    this.getAlbum(albumId);
  }

  render() {
    const { loading, album, error } = this.state;

    return (
      <React.Fragment>
        {loading && <Loader />}

        {!loading &&
          album && (
            <React.Fragment>
              <h2>Album</h2>
              <AlbumCard album={album} artist />
              <hr />
              <h3>{`-- TrackList --`}</h3>
              <TrackList tracks={album.tracks} />
            </React.Fragment>
          )}
        {error && <p>{error.message}</p>}
      </React.Fragment>
    );
  }
}
export default Albums;
