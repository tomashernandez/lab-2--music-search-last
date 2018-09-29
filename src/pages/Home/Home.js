import React, { Component } from "react";

import TopArtists from "../../components/TopArtists";
import SearchBar from "../../components/SearchBar";
import Loader from "../../components/Loader";
import * as API from "../../services/react-api-music";

const artistsBase = [
  {
    id: "83d91898-7763-47d7-b03b-b92132375c47",
    name: "Pink Floyd",
    imageUrl:
      "https://lastfm-img2.akamaized.net/i/u/300x300/98d2ca11cd6642519d750f4b82fbec2c.png"
  },
  {
    id: "8bfac288-ccc5-448d-9573-c33ea2aa5c30",
    name: "Red Hot Chili Peppers",
    imageUrl:
      "https://lastfm-img2.akamaized.net/i/u/300x300/ff9c5cb557a7489f8ef032b993638d18.png"
  }
];

export default class Home extends Component {
  state = {
    searchTerm: null,
    loading: false,
    artists: artistsBase,
    callAPI: null
  };

  handleOnSearch = searchTerm => {
    const cleanQuery = searchTerm.toLowerCase();
    this.setState({
      loading: true,
      error: null,
      callAPI: true
    });
    API.getSearchArtist(cleanQuery)
      .then(data => {
        this.setState({
          loading: false,
          artists: data.data
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error,
          callAPI: null
        });
      });
  };

  render() {
    const { artists, loading, error, callAPI } = this.state;
    const title = callAPI ? "Results" : "Top Artists";
    console.log(callAPI);
    console.log(title);
    return (
      <React.Fragment>
        <SearchBar onSearch={this.handleOnSearch} />

        {loading && <Loader />}
        <h2>{title}</h2>

        <TopArtists topArtists={artists} />
        {error && <p>{error.message}</p>}
      </React.Fragment>
    );
  }
}
