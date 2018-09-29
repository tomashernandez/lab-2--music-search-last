import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "../Layout";
import Home from "../../pages/Home";
import Artists from "../../pages/Artists";
import Albums from "../../pages/Albums";
import PlayList from "../../pages/PlayList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/artists/:artistId" component={Artists} />
            <Route exact path="/albums/:albumId" component={Albums} />
            <Route exact path="/playlist/:playlistId" component={PlayList} />
            <Route component={Home} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
