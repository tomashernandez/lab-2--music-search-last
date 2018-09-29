import React, { Component } from "react";
import LoaderEqualizer from "../../assets/img/equalizer-bars-loader.gif";

class Loader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="centered">
          <img src={LoaderEqualizer} alt="loader" />
        </div>
        <div className="centered">Cargando...</div>
      </React.Fragment>
    );
  }
}

export default Loader;
