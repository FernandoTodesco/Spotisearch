import React from "react";
import "./artists-list.scss";

import Header from "../../../components/header/header";
import ArtistsListDetails from "./artists-list-details/artists-list-details";
import ArtistsListResults from "./artists-list-results/artists-list-results";
import Footer from "../../../components/footer/footer";

const ArtistsList = () => {
  return (
    <div className="artists-list">
      <Header theme="green" />
      <ArtistsListDetails />
      <ArtistsListResults />
      <Footer theme="green" />
    </div>
  );
};

export default ArtistsList;
