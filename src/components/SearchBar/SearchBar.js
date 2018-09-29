import React, { Component } from "react";
class SearchBar extends Component {
  inputSearch = React.createRef();
  // handlekeyPress = e => {
  //   e.preventDefault();
  //   if (e.key === "Enter") {
  //     this.handleSearch();
  //   }
  // };

  handleClickSearch = () => {
    this.handleSearch();
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.handleSearch();
  };

  handleSearch = () => {
    this.props.onSearch(this.inputSearch.current.value);
  };

  render() {
    return (
      <div className="centered">
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            placeholder="Artist to ..."
            ref={this.inputSearch}
          />
          <a
            className="btn"
            ref={this.btnSearch}
            onClick={this.handleClickSearch}
          >
            Search
          </a>
        </form>
      </div>
    );
  }
}

export default SearchBar;
