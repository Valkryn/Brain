import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import ParticlesMaker from "./Components/ParticlesMaker/ParticlesMaker";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticlesMaker />
        <Nav />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecogn /> */}
      </div>
    );
  }
}

export default App;
