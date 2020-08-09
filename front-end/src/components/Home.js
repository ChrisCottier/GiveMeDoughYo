import React from "react";

import { appName } from "../config";
import { Banner, MostBacked } from "./sub-components/Home-Components";
import "./styles/Home.css";

const Home = () => {
  return (
    <main className="splash-page">
      <Banner></Banner>
      <div className="banner-word-overlay">
        <div className="banner-title banner-words">{appName}</div>
        <div className="banner-words motto">Bring Your Ideas to Life</div>
      </div>
      <div className="splash-container container is-widescreen"></div>
    </main>
  );
};

export default Home;
