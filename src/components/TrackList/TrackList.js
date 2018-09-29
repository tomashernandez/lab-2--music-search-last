import React, { Component } from "react";
import TrackCard from "../TrackCard/TrackCard";
import * as API from "../../services/react-api-music";
import { PLAYLIST_ID } from "../../constants";
class TrackList extends Component {
  handleClickButton = event => {
    let trackNumber = event.target.dataset.data;
    if (trackNumber !== 0) {
      let track = this.findTrack(parseInt(trackNumber, 10));
      let trackToSend = JSON.stringify({ track: track[0] });
      if (track) {
        API.postPlayList(PLAYLIST_ID, trackToSend);
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

      return (
        <li key={key}>
          <TrackCard
            track={track}
            handleClickButton={this.handleClickButton}
            add={this.props.noAdd}
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
