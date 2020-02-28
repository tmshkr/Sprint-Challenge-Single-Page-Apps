import React, { useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Header from "./components/header";

function App() {
  useEffect(() => {
    const url = `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`;
    axios.get(url).then(response => console.log(response));
  }, []);

  return (
    <div id="app">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            <Route path="/characters">
              <h1>Characters</h1>
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
