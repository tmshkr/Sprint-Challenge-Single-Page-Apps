import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    if (searchTerm) {
      history.push(`/characters/search/${searchTerm}`);
      setSearchTerm("");
    } else {
      history.push(`/characters`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <InputGroup>
        <Input
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <InputGroupAddon addonType="append">
          <Button color="info">Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}

export default SearchBar;
