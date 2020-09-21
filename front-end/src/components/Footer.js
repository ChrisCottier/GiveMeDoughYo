import React from "react";
import "./styles/Footer.css";

export const footerRef = React.createRef();

const Footer = () => {
  return (
    <footer className="footer custom-footer" ref={footerRef}>
      <div className="container">
        <div className="columns footer-columns">
          <div className="column is-two-fifths">
            <div>
              This clone of indiegogo was individually created by Chris Cottier
            </div>
            <div>See my profiles to the right!</div>
          </div>
          {/* LINKS INCOMPLETE */}
          <div className="column is-one-fifth personal-links">
            <a href="https://github.com/ChrisCottier" className="title">
              GitHub
            </a>
            <a href="https://github.com/ChrisCottier">
              <i className="fab fa-github fa-9x"></i>
            </a>
          </div>
          <div className="column is-one-fifth personal-links">
            <a
              href="https://www.linkedin.com/in/christopher-cottier-92587194/"
              className="title"
            >
              LinkedIn
            </a>
            <a href="https://www.linkedin.com/in/christopher-cottier-92587194/">
              <i className="fab fa-linkedin fa-9x"></i>
            </a>
          </div>
          <div className="column is-one-fifth personal-links">
            <a href="https://angel.co/u/christopher-cottier" className="title">
              AngelList
            </a>
            <a href="https://angel.co/u/christopher-cottier">
              <i className="fab fa-angellist fa-9x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
