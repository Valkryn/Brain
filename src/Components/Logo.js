import React from "react";
import Tilt from "react-parallax-tilt";

const Logo = () => {
  return (
    <div className="ma4 mt0 ct">
      <Tilt style={{ height: "150", width: "150", background: "red" }}>
        <div className="Tilt-inner">some text</div>
        <p>Logo</p>
      </Tilt>
    </div>
  );
};

export default Logo;
