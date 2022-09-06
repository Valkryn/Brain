import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brainIcon80.png";

const Logo = () => {
  return (
    <div className="ma4 mt0 ct">
      <Tilt
        className="Tilt br2 shadow-3"
        style={{ height: "150", width: "150" }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "5px" }} src={brain} alt="of a brain" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
