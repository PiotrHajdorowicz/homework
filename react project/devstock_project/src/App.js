import React from "react";
import "./App.css";
import Heading from "./Heading";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Stoper from "./pages/Stoper";
import Characters from "./pages/Characters";
import Details from "./Details";
import Regsitration from "./pages/Registration";
import Login from "./pages/Login";

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
        <Route path="/pages/Characters">
          <Characters />
        </Route>
        <Route path="/pages/Registration">
          <Regsitration />
        </Route>
        <Route path="/pages/Login">
          <Login />
        </Route>
        <Route path="/Details/:id" render={(props) => <Details {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
