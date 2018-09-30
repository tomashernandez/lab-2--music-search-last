import React, { Component } from "react";
import PlayListAdd from "../../assets/img/playlistAdd.svg";
import PlayListRemove from "../../assets/img/fileRemove.svg";

class TrackCard extends Component {
  state = {
    error: false,
    track: null,
    loading: true
  };

  render() {
    const { track, add, loading } = this.props;
    const titleAction = add ? "Add to PlayList" : "Remove from PlayList";
    const altAction = add ? "Add" : "Remove";
    const imgIcon = add ? PlayListAdd : PlayListRemove;

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
          {
            <a
              className="link"
              data-data={track.trackNumber}
              onClick={this.props.handleClickButton}
            >
              <img
                src={imgIcon}
                width="26px"
                alt={altAction}
                title={titleAction}
              />{" "}
              {titleAction}
            </a>
          }
        </div>
      </div>
    );
  }
}

export default TrackCard;
