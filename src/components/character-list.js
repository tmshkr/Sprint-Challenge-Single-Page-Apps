import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

import CharacterCard from "./character-card";

function CharacterList(props) {
  const [page, setPage] = useState(1);
  const { data } = props;
  const { searchTerm } = useParams();

  // useEffect(() => {
  //   console.log("useEffect fired", Date.now());
  //   // 429 (Too Many Requests) -- using static data
  //   if (searchTerm) {
  //     const url = `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?name=${searchTerm}`;
  //     axios.get(url).then(response => console.log(response));
  //   }
  // }, [searchTerm]);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  let characters = data[page - 1].results;
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
      <nav className="pagination" aria-label="Pagination">
        <ReactPaginate
          previousLabel={"‹"}
          previousClassName={"page-item"}
          nextLabel={"›"}
          nextClassName={"page-item"}
          breakLabel={"..."}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          forcePage={page - 1}
          pageCount={data.length}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </nav>
    </div>
  );
}

export default CharacterList;
