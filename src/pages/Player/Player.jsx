import React from "react";
import "./Player.css";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const Player = () => {
  return (
    <div className="player">
      <FaRegArrowAltCircleLeft className="previous-icon"/>
      <iframe
        width={"90%"}
        height={"90%"}
        src="https://www.youtube.com/embed/3nQxCoEmD9A"
        frameborder="0"
        title="trailer"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  );
};

export default Player;
