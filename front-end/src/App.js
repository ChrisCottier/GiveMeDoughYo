import React, { useEffect } from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./index.css";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";

import Home from "./components/Home";
import User from "./components/User";
import Campaign from "./components/Campaign";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import { hasAccessToken } from "./actions/auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hasAccessToken());
  });
  return (
    <main>
      <BrowserRouter>
        <Navbar></Navbar>
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
