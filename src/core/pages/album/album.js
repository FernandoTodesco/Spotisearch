import React, { useContext, useEffect } from "react";
import "./album.scss";

import Header from "../../../components/header/header";
import Backdrop from "../../../components/backdrop/backdrop";
import AlbumDetails from "./album-details/album-details";
import Breadcrumb from "../../../components/breadcrumbs/breadcrumbs";
import AlbumResults from "./album-results/album-results";
import Footer from "../../../components/footer/footer";

import AppContext from "../../../contexts/app-context";
import { getAlbum, getAlbumTracks } from "../../../services/spotify";

const Album = (props) => {
  const {
    tokenState: [token, setToken],
    queryState: [query, setQuery],
    artistState: [artist, setArtist],
    albumState: [album, setAlbum],
    tracksState: [tracks, setTracks],
    breadcrumbsState: [breadcrumbs, setBreadcrumbs],
    searchingState: [searching, setSearching],
  } = useContext(AppContext);

  useEffect(() => {
    const fetchAlbum = async () => {
      const result = await getAlbum(props.match.params.id, token);
      setAlbum(result);
      setBreadcrumbs([
        { path: "/", name: "Home" },
        { path: `/artistsList/${query}`, name: `"${query}"` },
        {
          path: `/artist/${result.artists[0].id}`,
          name: `${result.artists[0].name}`,
        },
        { path: `/album/${result.id}`, name: `${result.name}` },
      ]);
    };
    fetchAlbum();
    const fetchAlbumTracks = async () => {
      const result = await getAlbumTracks(props.match.params.id, token);
      setTracks(result.items);
    };
    fetchAlbumTracks();
  }, []);

  return (
    <div className="album">
      <Header props={props} theme="pink" />
      {searching && <Backdrop props={props} />}
      <AlbumDetails album={album} />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <AlbumResults />
      <Footer theme="pink" />
    </div>
  );
};

export default Album;
