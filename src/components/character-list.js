import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

import CharacterCard from "./character-card";

let prevSearchTerm = "";

function CharacterList() {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(5);
  const [fetchedData, setFetchedData] = useState({});
  const [error, setError] = useState("");
  const { searchTerm } = useParams();

  useEffect(() => {
    console.log("useEffect fired", Date.now());
    if (searchTerm) {
      const url = `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${
        searchTerm === prevSearchTerm ? page : 1
      }&name=${searchTerm}`;
      prevSearchTerm = searchTerm;

      axios
        .get(url)
        .then(({ data }) => {
          console.log(data);
          setPages(data.info.pages);
          setFetchedData(data);
        })
        .catch(err => {
          console.dir(err);
          setFetchedData([]);
          setError("There was a problem fetching the data");
        });
    } else if (!error) {
      const url = `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${page}`;

      axios
        .get(url)
        .then(({ data }) => {
          console.log(data);
          setPages(data.info.pages);
          setFetchedData(data);
        })
        .catch(err => {
          console.dir(err);
          setFetchedData([]);
          setError("There was a problem fetching the data");
        });
    } else if (pages !== 5) {
      setPages(5);
    }
  }, [searchTerm, page]);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  let characters = [];
  if (!error && fetchedData.results) {
    characters = fetchedData.results;
  }

  return (
    <div className="character-list">
      <h2>Characters</h2>
      <div className="list">
        {error ? (
          <p>{error}</p>
        ) : (
          characters.map(c => <CharacterCard key={c.id} character={c} />)
        )}
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
