import React from "react";
import "./audio-player.scss";

const AudioPlayer = ({ track }) => {
  return (
    <div className="audio-player">
      <audio className="controls" controls controlsList="nodownload">
        <source src={track.preview_url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
