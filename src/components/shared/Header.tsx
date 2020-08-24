import * as React from "react";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header: React.StatelessComponent = () => {
  return (
    <div className="vh-100 bg-gradient-white text-center align-center justify-content-center">
      <Jumbotron fluid className="bg-dark text-primary">
        <h1>Joe Frazier</h1>
        <div className="d-flex justify-content-center">
          <h1 className="d-flex text-light justify-content-around">
            <a href="https://github.com/frazierjoe" className="px-3" target="_blank">
              <FaGithub  />
            </a>
            <a href="https://linkedin.com/in/joe-frazier-b1564a13b" className="px-3" target="_blank">
              <FaLinkedin  />
            </a>
          </h1>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Header;
