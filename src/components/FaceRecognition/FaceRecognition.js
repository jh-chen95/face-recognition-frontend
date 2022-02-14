import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = (props) => {
  return (
    <div className="center ma0">
      <div className="absolute mt2">
        <img id="inputImage" src={props.imageUrl} alt="" width="500px" height="auto" />
        {
          props.boxes.map((box, i) => {
            const { topRow, rightCol, bottomRow, leftCol } = box;
            return (<div id="face" key={i} className="bounding-box" style={{ top: topRow, right: rightCol, bottom: bottomRow, left: leftCol }}></div>);
          }
          )
        }
      </div>
    </div>
  );
}

export default FaceRecognition;