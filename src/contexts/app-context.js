import React, { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [search, setSearch] = useState("");
  const [artists, setArtists] = useState([]);
  const [artist, setArtist] = useState({});
  const [albums, setAlbums] = useState([]);
  const [album, setAlbum] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [query, setQuery] = useState("");
  const [breadcrumbs, setBreadcrumbs] = useState(["Home"]);
  const [searching, setSearching] = useState(false);

  const returnValue = {
    tokenState: [token, setToken],
    searchState: [search, setSearch],
    artistsState: [artists, setArtists],
    artistState: [artist, setArtist],
    albumsState: [albums, setAlbums],
    albumState: [album, setAlbum],
    tracksState: [tracks, setTracks],
    queryState: [query, setQuery],
    breadcrumbsState: [breadcrumbs, setBreadcrumbs],
    searchingState: [searching, setSearching],
  };

  return (
    <AppContext.Provider value={returnValue}>{children}</AppContext.Provider>
  );
};
export default AppContext;
