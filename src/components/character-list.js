import React from "react";
import CharacterCard from "./character-card";

function CharacterList(props) {
  const { data } = props;

  return (
    <div className="character-list">
      <h2>Characters</h2>
      <div className="list">
        {data.results.map(c => (
          <CharacterCard key={c.id} character={c} />
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
