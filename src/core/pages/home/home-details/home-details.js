import React from "react";
import "./home-details.scss";

function HomeDetails() {
  return (
    <section className="home-details">
      <h4 className="home-details__subtitle">Welcome to</h4>
      <h1 className="home-details__title">Spotisearch</h1>
      <p className="home-details__content">
        Search your favourite songs over Spotify, just enter an artist´s name in
        the following search box and enjoy!
      </p>
    </section>
  );
}

export default HomeDetails;
