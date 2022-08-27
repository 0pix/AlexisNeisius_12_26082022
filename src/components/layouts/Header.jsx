import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} width={"140px"} alt={"logo"} />
      <nav>
        <ul>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Profil</a>
          </li>
          <li>
            <a href="#">Réglage</a>
          </li>
          <li>
            <a href="#">Communauté</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
