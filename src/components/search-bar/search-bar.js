import React, { useContext } from "react";
import "./search-bar.scss";
import AppContext from "../../contexts/app-context";
import { getArtists } from "../../services/spotify";

const SearchBar = ({ props }) => {
  const {
    queryState: [query, setQuery],
    tokenState: [token],
    artistsState: [artists, setArtists],
  } = useContext(AppContext);

  const updateQuery = (e) => setQuery(e.target.value);

  const search = (e) => {
    e.preventDefault();
    fetchArtist();
    props.history.push(`/artistsList/${query}`);
  };

  const fetchArtist = async () => {
    const result = await getArtists(query, token);
    setArtists(result.artists.items);
  };

  return (
    <form onSubmit={search}>
      <input type="text" onChange={updateQuery} />
    </form>
  );
};

export default SearchBar;
