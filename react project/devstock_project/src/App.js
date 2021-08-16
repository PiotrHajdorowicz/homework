import React, { useEffect, useState } from "react";
import "./App.css";
import Heading from "./Heading";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Stoper from "./pages/Stoper";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Nav />
        <header className="header">
          <Heading />
        </header>
      </div>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/pages/About">
          <About />
        </Route>
        <Route path="/pages/Counter">
          <Counter />
        </Route>
        <Route path="/pages/Stoper">
          <Stoper />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
