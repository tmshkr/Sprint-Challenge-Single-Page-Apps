import React from "react";
import { useParams } from "react-router-dom";

import CharacterCard from "./character-card";

function CharacterList(props) {
  const { data } = props;

  const { searchTerm } = useParams();
  console.log(searchTerm);

  let characters = data.results;

  if (searchTerm) {
    characters = characters.filter(c =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="character-list">
      <h2>Characters</h2>
      <div className="list">
        {characters.map(c => (
          <CharacterCard key={c.id} character={c} />
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
