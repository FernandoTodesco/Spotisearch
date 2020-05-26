import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function Header({ theme }) {
  return (
    <header className={`header ${theme}`}>
      <Link to="/">
        <img
          src={`${process.env.PUBLIC_URL}/assets/logo.png`}
          className="header__logo"
          alt="logo"
        />
      </Link>
    </header>
  );
}

export default Header;
