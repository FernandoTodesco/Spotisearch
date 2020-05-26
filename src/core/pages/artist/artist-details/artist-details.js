import React, { useEffect } from "react";
import "./artist-details.scss";

const ArtistDetails = ({ artist, breadcrumbs }) => {
  let loading = artist && artist.images ? false : true;
  useEffect(() => {}, [loading]);

  return loading ? (
    <h1>Loading..</h1>
  ) : (
    <section className="artist-details">
      {artist.images.length > 0 ? (
        <img
          className="artist-details__img"
          src={artist.images[1].url}
          alt={`${artist.name}`}
        />
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/assets/not-found.jpg`}
          className="artist-details__img"
          alt="not found"
        />
      )}

      <div className="artist-details__container">
        <h1 className="artist-details__container--title">{artist.name}</h1>
        {artist.genres.length > 0 && (
          <span className="artist-details__container--subtitle">
            {artist.genres[0]}
          </span>
        )}
      </div>
    </section>
  );
};

export default ArtistDetails;
