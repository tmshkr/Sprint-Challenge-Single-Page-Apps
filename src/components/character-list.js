import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

import CharacterCard from "./character-card";

function CharacterList(props) {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(5);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");
  const { data } = props;
  const { searchTerm } = useParams();

  useEffect(() => {
    console.log("useEffect fired", Date.now());
    // To deal with 429 (Too Many Requests):
    // Search results from the API are displayed when it works.
    // If it doesn't work, it falls back to static data.
    if (searchTerm) {
      const url = `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${page}&name=${searchTerm}`;

      axios
        .get(url)
        .then(({ data }) => {
          console.log(data);
          setPages(data.info.pages);
          setSearchResults(data.results);
        })
        .catch(err => {
          console.dir(err);
          setSearchResults([]);
          setError("There was a problem fetching the data");
        });
    } else if (pages !== 5) {
      setPages(5);
    }
  }, [searchTerm, page]);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  let characters = data[page - 1].results;
  if (searchTerm && !error && searchResults.length > 0) {
    characters = searchResults;
  } else if (searchTerm) {
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
          pageCount={pages}
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
