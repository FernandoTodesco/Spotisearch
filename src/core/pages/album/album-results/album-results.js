import React, { useContext } from "react";
import "./album-results.scss";

import AppContext from "../../../../contexts/app-context";
import TrackCard from "../../../../components/cards/track-card/track-card";

const AlbumResults = () => {
  const {
    tracksState: [tracks],
  } = useContext(AppContext);
  console.log("tracks en album results: ", tracks);

  return (
    <div className="album-results">
      {tracks.map((trck) => (
        <TrackCard track={trck} key={trck.name} />
      ))}
    </div>
  );
};

export default AlbumResults;
