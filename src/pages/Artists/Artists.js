import React, { Component } from "react";
import * as API from "../../services/react-api-music";
import ArtistCard from "../../components/ArtistCard";
import AlbumList from "../../components/AlbumList";
import Loader from "../../components/Loader";

export default class Artists extends Component {
  //recibir id
  state = {
    error: false,
    artist: null,
    loading: true
  };

  getArtist = idArtist => {
    this.setState({
      loading: true,
      error: null
    });
    return API.getArtist(idArtist)
      .then(data => {
        this.setState({
          loading: false,
          artist: data.data
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
    let idArtist = this.props.match.params.artistId;
    this.getArtist(idArtist);
  }

  render() {
    const { loading, artist, error } = this.state;

    return (
      <React.Fragment>
        {loading && <Loader />}

        {!loading &&
          artist && (
            <React.Fragment>
              <h2>Artist</h2>
              <ArtistCard artist={artist} detail />
              <hr />
              <h3>{`-- Albums List --`}</h3>
              <AlbumList albums={artist.albums} />
            </React.Fragment>
          )}

        {error && <p>{error.message}</p>}
      </React.Fragment>
    );
  }
}
