import React, { useContext } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import SearchBurger from "../search-burger/search-burger";
import SearchBar from "../search-bar/search-bar";
import AppContext from "../../contexts/app-context";

const Header = ({ props, theme }) => {
  const {
    searchingState: [searching, setSearching],
  } = useContext(AppContext);

  const activate = () => {
    setSearching(!searching);
  };

  return (
    <header className={`header ${theme}`}>
      <Link to="/">
        <img
          src={`${process.env.PUBLIC_URL}/assets/logo.png`}
          className="header__logo"
          alt="logo"
        />
      </Link>
      <SearchBar props={props} />
      <SearchBurger activate={activate} />
    </header>
  );
};

export default Header;
