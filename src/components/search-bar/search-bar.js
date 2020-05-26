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

  const inputStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/lens.png)`,
  };

  return (
    <form onSubmit={search}>
      <input
        className="searchBar"
        type="text"
        onChange={updateQuery}
        placeholder="Search for Artists.."
        style={inputStyle}
      />
    </form>
  );
};

export default SearchBar;
