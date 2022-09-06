import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Logo from "./Components/Logo/Logo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Logo />
        {/* <ImageLinkForm/>
        <FaceRecogn /> */}
      </div>
    );
  }
}

export default App;
