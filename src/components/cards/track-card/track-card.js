import React from "react";
import "./track-card.scss";

const TrackCard = ({ track }) => {
  const handleClick = () => console.log("card clicked");

  return (
    <div className="track-card" onClick={handleClick}>
      <span className="track-card__title">{track.name}</span>
      <span className="track-card__star">star</span>
    </div>
  );
};

export default TrackCard;
