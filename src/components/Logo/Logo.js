import React from "react";
import Tilty from "react-tilty";
import face from "./face-scan.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilty max="55" className="Tilty br2 shadow-2" style={{ height: "128px", width: "128px" }}>
        <div className="Tilty-inner pa3">
          <img src={face} alt="logo" />
        </div>
      </Tilty>
    </div>
  );
}

export default Logo;