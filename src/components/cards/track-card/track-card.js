import React from "react";
import "./track-card.scss";
import AudioPlayer from "../../audio-player/audio-player";

const TrackCard = ({ track }) => {
  return (
    <div className="track-card">
      <div className="track-card__title-container">
        <span className="track-card__title">{track.name}</span>
      </div>
      <AudioPlayer track={track} />
    </div>
  );
};

export default TrackCard;
