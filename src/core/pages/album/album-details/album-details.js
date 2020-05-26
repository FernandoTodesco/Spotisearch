import React, { useEffect } from "react";
import "./album-details.scss";

const AlbumDetails = ({ album }) => {
  let loading = album && album.images ? false : true;
  useEffect(() => {}, [loading]);

  return loading ? (
    <h1>Loading..</h1>
  ) : (
    <section className="album-details">
      {album.images.length > 0 ? (
        <img
          className="album-details__img"
          src={album.images[1].url}
          alt={`${album.name}`}
        />
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/assets/not-found.jpg`}
          className="artist-details__img"
          alt="not found"
        />
      )}

      <div className="album-details__container">
        <h1 className="album-details__container--title">{album.name}</h1>
        {album.artists.length > 0 && (
          <span className="album-details__container--subtitle">
            {album.artists[0].name}-{album.release_date}
          </span>
        )}
      </div>
    </section>
  );
};

export default AlbumDetails;
