import React, { useContext, useEffect } from "react";
import "./artist.scss";

import Header from "../../../components/header/header";
import ArtistDetails from "./artist-details/artist-details";
import Breadcrumb from "../../../components/breadcrumbs/breadcrumbs";
import ArtistResults from "./artist-results/artist-results";
import Footer from "../../../components/footer/footer";

import AppContext from "../../../contexts/app-context";
import { getArtist, getAlbums } from "../../../services/spotify";

const Artist = (props) => {
  const {
    tokenState: [token, setToken],
    queryState: [query, setQuery],
    artistState: [artist, setArtist],
    albumsState: [albums, setAlbums],
    breadcrumbsState: [breadcrumbs, setBreadcrumbs],
  } = useContext(AppContext);

  useEffect(() => {
    const fetchArtist = async () => {
      const result = await getArtist(props.match.params.id, token);
      setArtist(result);
      setBreadcrumbs([
        { path: "/", name: "Home" },
        { path: `/artistsList/${query}`, name: `"${query}"` },
        { path: `/artist/`, name: `${result.name}` },
      ]);
    };
    fetchArtist();
    const fetchAlbums = async () => {
      const result = await getAlbums(props.match.params.id, token);
      setAlbums(result.items);
    };
    fetchAlbums();
  }, []);

  return (
    <div className="artist">
      <Header theme="blue" />
      <ArtistDetails artist={artist} breadcrumbs={breadcrumbs} />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <ArtistResults />
      <Footer theme="blue" />
    </div>
  );
};

export default Artist;
