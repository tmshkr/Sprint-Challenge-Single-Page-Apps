import React from "react";
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
              <CharacterList />
            </Route>
            <Route path="/characters/search/:searchTerm">
              <CharacterList />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
