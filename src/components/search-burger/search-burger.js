import React from "react";
import "./search-burger.scss";

const SearchBurger = ({ activate }) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/assets/lens.png`}
      className="search-burger"
      alt="search burger"
      onClick={activate.bind(this, activate)}
    />
  );
};

export default SearchBurger;
