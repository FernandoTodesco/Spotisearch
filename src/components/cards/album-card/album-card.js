import React from "react";
import "./album-card.scss";

const AlbumCard = ({ album }) => {
  const handleClick = () => console.log("card clicked");

  return (
    <div className="album-card" onClick={handleClick}>
      <div className="album-card__img-container">
        {album.images.length > 0 ? (
          <img
            className="album-card__img-container__img"
            src={album.images[1].url}
            alt={`${album.name}`}
          />
        ) : (
          <img
            src={`${process.env.PUBLIC_URL}/assets/not-found.jpg`}
            className="album-card__img-container__img"
            alt="not found"
          />
        )}
      </div>
      <div className="album-card__title-container">
        <p className="album-card__title">{album.name}</p>
        <span className="album-card__subtitle">{album.release_date}</span>
      </div>
    </div>
  );
};

export default AlbumCard;
