import React, { useEffect } from "react";
// import axios from "axios";
import data from "./data";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";
import CharacterList from "./components/character-list";

function App() {
  useEffect(() => {
    // const url = `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`;
    // axios.get(url).then(response => console.log(response));
    console.log(data);
  }, []);

  return (
    <div id="app">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/characters">
              <CharacterList data={data} />
            </Route>
            <Route path="/characters/search/:searchTerm">
              <CharacterList data={data} />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
