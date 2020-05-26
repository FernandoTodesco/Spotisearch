import React from "react";
import "./home-results.scss";
import SearchBar from "../../../../components/search-bar/search-bar";

function HomeResults({ props }) {
  return (
    <div className="home-results">
      <SearchBar props={props} />
    </div>
  );
}

export default HomeResults;
