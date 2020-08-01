import React from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

import "./index.css";
import "bulma/css/bulma.css";

import Home from "./components/Home";
import User from "./components/User";
import Campaign from "./components/Campaign";
import Search from "./components/Search";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main>
      <BrowserRouter>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/campaigns/example">Campaign</NavLink>
        <NavLink to="/users/example">User</NavLink>
        <NavLink to="/search/example">Search</NavLink>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/campaigns/:title" component={Campaign} />
          <Route path="/users/:id" component={User} />
          <Route path="/search/:query" component={Search} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

//campaign route=either name or id

export default App;
