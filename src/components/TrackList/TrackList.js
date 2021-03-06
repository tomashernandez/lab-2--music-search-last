import React, { Component } from "react";
import TrackCard from "../TrackCard/TrackCard";
import * as API from "../../services/react-api-music";
import { PLAYLIST_ID } from "../../constants";
class TrackList extends Component {
  state = {
    loading: false
  };

  handleClickButton = event => {
    let trackNumber = event.target.dataset.data;
    if (trackNumber !== 0) {
      let track = this.findTrack(parseInt(trackNumber, 10));
      let trackToSend = JSON.stringify({ track: track[0] });
      if (track) {
        API.postPlayList(PLAYLIST_ID, trackToSend)
          .then(data => {
            if (data.ok) {
              alert("Agregado correctamente");
            }
          })
          .catch(error => {
            console.log("Error");
          });
      }
    }
  };

  findTrack = trackNumber => {
    return this.props.tracks.filter(track => {
      return track.trackNumber === trackNumber;
    });
  };

  generarListaTracks = () => {
    return this.props.tracks.map(track => {
      let key = `${track.album.id}"_"${track.artist.id}"_"${track.trackNumber}`;
      let Add = this.props.noAdd ? false : true;

      return (
        <li key={key}>
          <TrackCard
            track={track}
            handleClickButton={this.handleClickButton}
            add={Add}
            loading={this.state.loading}
          />
        </li>
      );
    });
  };

  render() {
    if (this.props.tracks.length > 0) {
      return (
        <ul className="trackList no-style">{this.generarListaTracks()}</ul>
      );
    } else {
      return <h4 className="centered">Lo sentimos no existen tracks.</h4>;
    }
  }
}
export default TrackList;
