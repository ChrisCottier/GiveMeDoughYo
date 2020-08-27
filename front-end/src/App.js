import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./index.css";
import "bulma/css/bulma.css";
// import "@fortawesome/fontawesome-free/css/fontawesome.min.css";

import Home from "./components/Home";
import User from "./components/User";
import Campaign from "./components/Campaign";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import CreateCampaign from "./components/CreateCampaign";
import About from "./components/About";
import Footer from "./components/Footer"
import EditUser from "./components/EditUser"
import { hasAccessToken } from "./actions/auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hasAccessToken());
  });
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create-campaign" component={CreateCampaign} />
        <Route path="/campaigns/:id" component={Campaign} />
        {/* TODO IF ITS EASY ENOUGH CHANGE ROUTE TO /campaigns/:title */}
        <Route exact path="/users/:id" component={User} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/edit" component={EditUser} />
        <Route path="/profile/:view" component={Profile} />
        <Route path="/search/:category/:query" component={Search} />
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

//campaign route=either name or id

export default App;
