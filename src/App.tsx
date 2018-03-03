import React, { Component } from "react";
import { hot } from "react-hot-loader";

class App extends Component<{}, {}> {
  public render() {
    return <div>Hello World!</div>;
  }
}

export default hot(module)(App);
