import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "../Layout";
import Home from "../../pages/Home";
import Artists from "../../pages/Artists";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/artists/:artistId" component={Artists} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
