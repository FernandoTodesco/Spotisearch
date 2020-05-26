import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home/home";
import ArtistsList from "./artists-list/artists-list";
import Artist from "./artist/artist";
import Album from "./album/album";

function Pages() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/artistsList/:id" component={ArtistsList} />
      <Route path="/artist/:id" component={Artist} />
      <Route path="/album/:id" component={Album} />
    </Switch>
  );
}

export default Pages;
