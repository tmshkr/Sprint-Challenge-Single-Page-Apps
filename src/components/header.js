import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="top">
      <h1>
        <Link to="/">Rick & Morty</Link>
      </h1>
      <Link to="/characters">Characters</Link>
    </header>
  );
}

export default Header;
