import React from "react";
import "./Header.css";
import logo from "../../../assets/logo.svg";

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} width={"140px"} alt={"logo"} />
      <nav>
        <ul>
          <li>
            <a href="src/components/layouts/Header/Header#">Accueil</a>
          </li>
          <li>
            <a href="src/components/layouts/Header/Header#">Profil</a>
          </li>
          <li>
            <a href="src/components/layouts/Header/Header#">Réglage</a>
          </li>
          <li>
            <a href="src/components/layouts/Header/Header#">Communauté</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
