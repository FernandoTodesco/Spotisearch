import React, { useContext } from "react";
import "./artist-results.scss";
import { Link } from "react-router-dom";

import AppContext from "../../../../contexts/app-context";
import AlbumCard from "../../../../components/cards/album-card/album-card";

const ArtistResults = () => {
  const {
    albumsState: [albums],
  } = useContext(AppContext);

  return (
    <div className="artist-results">
      {albums.map((alb) => (
        <Link to={`/album/${alb.id}`} key={alb.id}>
          <AlbumCard album={alb} />
        </Link>
      ))}
    </div>
  );
};

export default ArtistResults;
