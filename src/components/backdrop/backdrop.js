import React from "react";
import "./backdrop.scss";
import SearchBar from "../search-bar/search-bar";

const Backdrop = ({ props }) => {
  return (
    <div className="backdrop">
      <SearchBar props={props} />
    </div>
  );
};

export default Backdrop;
