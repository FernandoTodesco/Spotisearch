import React from "react";
import "./home.scss";

import Header from "../../../components/header/header";
import HomeDetails from "./home-details/home-details";
import HomeResults from "./home-results/home-results";
import Footer from "../../../components/footer/footer";

import SpotifyLogin from "../../../services/spotify-login";

const Home = (props) => {
  SpotifyLogin();

  return (
    <div className="home">
      <Header theme="green" />
      <HomeDetails />
      <HomeResults props={props} />
      <Footer theme="green" />
    </div>
  );
};

export default Home;
