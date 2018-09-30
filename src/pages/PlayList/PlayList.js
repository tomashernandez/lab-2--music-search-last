import React, { Component } from "react";
import * as API from "../../services/react-api-music";
import TrackList from "../../components/TrackList";
import Loader from "../../components/Loader";

export default class PlayList extends Component {
  //recibir id
  state = {
    error: false,
    list: null,
    loading: true
  };

  getPlayList = idPlayList => {
    this.setState({
      loading: true,
      error: null
    });
    return API.getPlayList(idPlayList)
      .then(data => {
        this.procesarLista(data.data);
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        });
      });
  };

  procesarLista = data => {
    // this.setState({
    //   loading: false,
    //   list: data.data
    // });
    const lista = data.map(track => {
      return track.track;
    });
    this.setState({
      loading: false,
      list: lista
    });
  };

  componentDidMount() {
    let playlistId = this.props.match.params.playlistId;
    this.getPlayList(playlistId);
  }

  render() {
    const { loading, error, list } = this.state;
    let playlistId = this.props.match.params.playlistId;

    return (
      <React.Fragment>
        {loading && <Loader />}

        {!loading &&
          list && (
            <React.Fragment>
              {<h3>{`${playlistId} -- PLAYLIST`}</h3>}

              <TrackList tracks={list} noAdd />
            </React.Fragment>
          )}
        {error && <p>{error.message}</p>}
      </React.Fragment>
    );
  }
}
