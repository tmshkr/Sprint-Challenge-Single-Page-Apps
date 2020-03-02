import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./search-bar";

function Header() {
  return (
    <header className="top">
      <nav>
        <Link to="/">Welcome</Link>
        <Link to="/characters">Characters</Link>
      </nav>
      <SearchBar />
    </header>
  );
}

export default Header;
