import React, { Component } from "react";
import PlayListAdd from "../../assets/img/playlistAdd.svg";

class TrackCard extends Component {
  state = {
    error: false,
    track: null,
    loading: true
  };

  render() {
    const { track, add } = this.props;

    return (
      <div className="row">
        <div className="col-4">
          <h4>
            {" "}
            <span>
              {track.trackNumber}
              {". "}
            </span>
            {track.name}
          </h4>
        </div>
        <div className="col-8">
          {add && (
            <a
              className="link"
              data-data={track.trackNumber}
              onClick={this.props.handleClickButton}
            >
              <img
                src={PlayListAdd}
                width="26px"
                alt="add"
                title="Add to PlayList"
              />{" "}
              Add to PlayList
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default TrackCard;
