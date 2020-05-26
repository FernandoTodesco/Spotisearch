import React, { useContext } from "react";
import "./artists-list-results.scss";
import { Link } from "react-router-dom";

import AppContext from "../../../../contexts/app-context";
import ArtistCard from "../../../../components/cards/artist-card/artist-card";

const ArtistsListResults = () => {
  const {
    artistsState: [artists],
  } = useContext(AppContext);

  return (
    <div className="artists-list-results">
      {artists.map((art) => (
        <Link to={`/artist/${art.id}`} key={art.name}>
          <ArtistCard artist={art} />
        </Link>
      ))}
    </div>
  );
};

export default ArtistsListResults;
